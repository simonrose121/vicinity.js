var response = require("./response");

exports.route = function(handle, pathname) {
	var handler = handle[pathname];
	if(typeof handler === 'function') {
		return handler();
	} else {
		return new response(404);
	}
}