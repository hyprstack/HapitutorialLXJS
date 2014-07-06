var Hapi = require('hapi');
var path = require('path');

var server = Hapi.createServer('localhost', Number(process.argv[2] || 8080));
server.route({
    method: 'GET',
    path: '/',
    handler: {
      //assign the file key to the handler object to point to a specific file
      //use the "join" method to join the path file and the path object with the
      //current root directory ( __dirname )
        file: path.join(__dirname + '/index.html')
    }
});
server.start()
