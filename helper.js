var Hapi = require('hapi');
var path = require('path')

/*create a server which responds to requests to /?name=Helping&suffix=!
using the template from VIEWS */

var options = {
    views: {
        path:  path.join(__dirname, 'templates'),
        engines: {
            html: require('handlebars')
        },
        helpersPath:  path.join(__dirname, 'helpers') //joins the path
        //from the server.route function and in the root directory (__dirname) goes to
        //the helpers folder and loads all Js files therein.
    }
};

var server = Hapi.createServer('localhost', Number(process.argv[2] || 8080), options);

server.route({
    method: 'GET',
    path: '/',
    handler: {
        view: 'templatehelpers.html' //gets the file "templatehelpers" from the
        //"templates" folder by using the path from the views object in the options variable.
    }
});

server.start()
