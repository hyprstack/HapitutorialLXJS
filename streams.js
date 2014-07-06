var Hapi = require('hapi'),
    Fs = require('fs');

var server = Hapi.createServer('localhost', 8080);

server.route({
  path: '/',
  method: 'GET',
  handler: function(request, reply) {
    //using the createReadStream method will stream the data contained in
    //the target file ("sillefile.txt" in this example)
    //and display it in the browser window
      var thisFile = Fs.createReadStream(__dirname + '/sillyfile.txt');
      reply(thisFile);
      //run "node streams.js" and then go to
      //localhost:8080 in your browser
  }
});

server.start();
