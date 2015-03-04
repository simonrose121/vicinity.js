exports.respond = function(response, resp) {
	resp.writeHead(response.respCode, {"Content-Type": "text/plain"});
	if(response.respCode === 200) {
		resp.write(JSON.stringify(response.content));
	} else if (response.respCode === 404) {
		resp.write(response.respCode + " Page Not Found");
	}
	resp.end();
}