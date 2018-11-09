class Handler {
    generate(req, res, next) {
        console.log(req.body)
        return res.send(200, JSON.parse(req.body))
    }
}

module.exports = Handler;