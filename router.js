var response = require("./model/response");

// route requests to correct handle
exports.route = function(handle, pathname, query, respond) {
	var handler = handle[pathname];
	// check if handler is function
	if (typeof handler === 'function') {
		handler(query, function(resp) {
			// callback with content
			respond(resp);
		});
	} else {
		// if handle not found then return 404 response code
		return new response(404);
	}
}