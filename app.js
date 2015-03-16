var http = require('http');
var url = require('url');
var querystring = require('querystring');

var responder = require('./responder');
var DAO = require('./DAO');
var router = require('./router');
var handles = require('./handles');

var dao = new DAO();

// intialise framework
exports.createApp = function(port) {
    var route = router.route;
    
    // initialise database
    dao.connect(process.env.IP, "vicinity");
    dao.createSchemas();
    
    function start(req, resp) {
        var url_parse = url.parse(req.url);
        route(handles.handle, url_parse.pathname, querystring.parse(url_parse.query), function(response) {
            responder.write(response, resp);
        });
    }
    
    http.createServer(start).listen(port);
};

// export dao to be used in other files
exports.dao = dao;

