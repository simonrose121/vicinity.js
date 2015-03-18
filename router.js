var response = require("./model/response");

// route requests to correct handle
exports.route = function(apiHandles, pathname, query, respond) {
	var handler = apiHandles[pathname];
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