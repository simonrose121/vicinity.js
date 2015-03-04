var response = require("./response");

exports.route = function(handle, pathname, node) {
	var handler = handle[pathname];
	if(typeof handler === 'function') {
		return handler(node);
	} else {
		return new response(404);
	}
}