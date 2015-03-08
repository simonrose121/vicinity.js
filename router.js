var response = require("./response");

exports.route = function(handle, pathname, query, respond) {
	var handler = handle[pathname];
	if(typeof handler === 'function') {
		handler(query, function(resp){
			respond(resp);
		});
	} else {
		return new response(404);
	}
}