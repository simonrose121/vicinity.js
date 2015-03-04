/*
App.js will hold the start method
*/

var http = require('http');
var url = require('url');
var querystring = require('querystring');

var responder = require('./responder');
var DAO = require('./DAO');
var router = require('./router');
var node = require('./model/node');

exports.start = function(handle, port) {
    var route = router.route;
    var dao = new DAO();
    dao.connect(process.env.IP, "vicinity");
    dao.createSchemas();
    
    function start(req, resp) {
        var url_parse = url.parse(req.url);
        //get parameter from url
        var node0 = new node(53.373656, -1.450626, 0);
        console.log(node0);
        var response = route(handle, url_parse.pathname, node0);
        responder.respond(response, resp);
    }
    http.createServer(start).listen(port);
}
