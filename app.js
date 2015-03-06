var http = require('http');
var url = require('url');
var querystring = require('querystring');

var responder = require('./responder');
var DAO = require('./DAO');
var router = require('./router');
var routes = require('./routes');

var dao = new DAO();

// intialise framework
exports.createApp = function(port) {
    var route = router.route;
    
    // initialise database
    dao.connect(process.env.IP, "vicinity");
    dao.createSchemas();
    
    // set handles
    var handle = {
        '/node/create' : routes.createNode,
    	'/node/edit' : routes.editNode,
    	'/node/list' : routes.listNodes
    }
    
    function start(req, resp) {
        var url_parse = url.parse(req.url);
        var response = route(handle, url_parse.pathname);
        responder.respond(response, resp);
    }
    
    http.createServer(start).listen(port);
}

// export dao to be used in other files
exports.dao = dao;

