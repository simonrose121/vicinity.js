exports.write = function(response, resp) {
	// write header
	resp.writeHead(response.code, {"Content-Type": "text/plain"});
	// write dependant on returned code from handler
	switch (response.code) {
		case 200:
			resp.write(response.content);
			break;
		case 404:
			resp.write(response.code + " Page Not Found");
			break;
		case 500:
			resp.write(response.code = " Sever Error");
			break;
	}
	// end response
	resp.end();
};