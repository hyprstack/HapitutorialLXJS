var Hapi = require('hapi');
//create server at localhost listening on port 8080
var server = Hapi.createServer('localhost', Number(process.argv[2] || 8080));
server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply('Hello Hapi'); //this will output 'Hello Hapi' on the browser page
    }
});
server.start();
