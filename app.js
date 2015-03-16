var http = require('http');
var url = require('url');
var querystring = require('querystring');

var writer = require('./writer');
var DAO = require('./DAO');
var router = require('./router');
var handles = require('./handles');

// create a new DAO instance
var dao = new DAO();

// intialise framework
exports.start = function(port) {
    var route = router.route;
    
    // initialise database
    dao.connect(process.env.IP, "vicinity");
    dao.createSchemas();
    
    // request listener
    function app(req, resp) {
        // parse url
        var url_parse = url.parse(req.url);
        // route request
        route(handles.handle, url_parse.pathname, querystring.parse(url_parse.query), function(response) {
            // write response
            writer.write(response, resp);
        });
    }
    
    // create new server instance
    http.createServer(app).listen(port);
};

// export dao to be used in other files
exports.dao = dao;

