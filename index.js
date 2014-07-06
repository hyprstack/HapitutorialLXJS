var Hapi = require('hapi'); //require the hapi module

//create the server and listen to port 8080
var server = Hapi.createServer('localhost', Number(process.argv[2] || 8080));
server.route({
  //set the method
    method: 'GET',
    //set the path
    path: '/',
    //set the handler function
    handler: function (request, reply) {
        reply('Hello Hapi'); //displays 'Hello Hapi' in the brower
    }
});
server.start();
