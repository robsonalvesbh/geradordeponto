var restify = require('restify');

var server = restify.createServer();
server.use(restify.plugins.bodyParser({
  mapParams: true
}));

require('./../src/routes/Router').load(server);

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});