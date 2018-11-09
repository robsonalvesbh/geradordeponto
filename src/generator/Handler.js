const Generator = require('./Generator');

class Handler {
    generate(req, res, next) {
        const generator = new Generator();
        const times = generator.generate(JSON.parse(req.body));
        return res.send(times);
    }
}

module.exports = Handler;