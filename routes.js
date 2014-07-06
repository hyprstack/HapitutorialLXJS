var Hapi = require('hapi');
var server = Hapi.createServer('localhost', Number(process.argv[2] || 8080));
server.route({
    method: 'GET',
    path: '/{name}',
    handler: function (request, reply) {
        reply('Hello ' + request.params.name);
        //this will output 'Hello' + the name you specify in the url bar
        //So 'localhost:8080/Hello/FooBar' will output 'Hello FooBar' in the browser
    }
});
server.start();
