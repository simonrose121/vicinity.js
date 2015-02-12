var http = require("http");
var url = require("url");
var router = require("./router");
var responder = require("./responder");
var DAO = require("./DAO");

DAO.getInstance().connect();

exports.start = function(handle, port) {
	var route = router.route;
	function start(req, resp) {
		var url_parse = url.parse(req.url);
		var response = route(handle, url_parse.pathname);
		responder.respond(response, resp);
	}
	http.createServer(start).listen(typeof port === 'number' ? port : 3000);
}

