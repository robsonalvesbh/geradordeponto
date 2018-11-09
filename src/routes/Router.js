const GeneratorHandler = require('./../generator/Handler');

class Router {
    static load(server) {
        const handler = new GeneratorHandler();
        server.post('/generate', handler.generate);
    }
}

module.exports = Router;