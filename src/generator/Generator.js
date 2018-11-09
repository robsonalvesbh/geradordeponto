const moment = require('moment');

class Generator  {
    generate(params) {

        const { month, year , startTime, startLunch, endLunch, endTime } = params;

        const daysInMonth = this.getQuantityOfDaysInAMonth(month, year);

        const times = [];

        for (let day = 1; day <= daysInMonth; day++) {
            times.push({
                day,
                startTime: this.generateHour(startTime),
                startLunch: this.generateHour(startLunch),
                endLunch: this.generateHour(endLunch),
                endTime: this.generateHour(endTime),
                weekend: this.isWeekDay(year, month, day),
            });
        }

        return times;
    } 

    generateHour(time) {
        const adittionalMinute = this.generateMinute();

        const momentTime = this.explodeTime(time);

        return this.addMinutes(momentTime, adittionalMinute);
    }

    isWeekDay(year, month, day) {
        const weekendsDay = [0, 6];
        return weekendsDay.includes(moment(`${year}-${month}-${day}`).day());
    }

    getQuantityOfDaysInAMonth(month, year) {
        return moment(`${year}-${month}`, "YYYY-MM").daysInMonth();
    }

    generateMinute() {
        const low = -10; 
        const high = 10;
        return Math.floor(Math.random() * (high - low) + low);
      }
    
    addMinutes(time, minutes) {
        return moment().hour(time.hour).minute(time.minute).add(minutes, 'minutes').format('HH:mm')
    }

    explodeTime(time) {
        const { 0: hour, 1: minute } = time.split(':');
        return { hour, minute };
    }
}

module.exports = Generator;