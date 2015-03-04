var app = require('./app');
var response = require('./response');

var node = function(node) {
	var resp = new response(200, JSON.stringify(node));
	return resp;
}

var handle = {
	'/node' : node
}

app.start(handle, process.env.PORT);