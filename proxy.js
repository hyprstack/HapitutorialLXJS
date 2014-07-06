var Hapi = require('hapi');
var path = require('path');

var server = Hapi.createServer('localhost', Number(process.argv[2] || 8080));


server.route({
  /* create a server which takes any requests to the path /proxy
  and proxies it to http://localhost:65535/proxy  */
  path: '/proxy', //set the path to /proxy
  method: 'GET',
  handler: {
    //use the proxy key to generate a reverse proxy handler
    //http://en.wikipedia.org/wiki/Proxy_server#Reverse_proxies
    proxy : {
      host: '127.0.0.1',
      port: 65535 //proxy the request to port 65535
    }
  }
});

server.start();
