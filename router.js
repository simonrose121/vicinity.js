var response = require("./response");
var wait = require("wait.for");

exports.route = function(handle, pathname, query, callback) {
	var handler = handle[pathname];
	if(typeof handler === 'function') {
		handler(query, function(resp){
			callback(resp);
		});
	} else {
		return new response(404);
	}
}