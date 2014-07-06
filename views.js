var Hapi = require('hapi');
var path = require('path');

var options = {
  views: {
    path: path.join(__dirname + '/templates'),
    engines: {
      html: require('handlebars') //require the handlebars templates
    }
  }
};

  //createServer takes an options object as a third parameter. Using this options
  //object, you can configure the server to use different templating engines based
  //on file extension. You can also define a directory path for templates.

var server = Hapi.createServer('localhost', Number(process.argv[2] || 8080), options);

server.route({
  /*path: '/{name*}',*/
  path: '/',
  method: 'GET',
  handler: {
    view: 'template.html'
    //The template receives some information from the request. For example, the query
    //parameters that were passed in via the URL are available in the query object.
    //These parameters can then be used in the template.
    //  <div>{{query.paramName}}</div>
  }
});

server.start();
