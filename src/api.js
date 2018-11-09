var restify = require('restify');

var server = restify.createServer();
server.use(restify.plugins.bodyParser({
  mapParams: true
}));

require('./../src/routes/Router').load(server);

var port = process.env.PORT || 5000;

server.listen(port, function() {
  console.log('%s listening at %s:$s', server.name, server.url, port);
});