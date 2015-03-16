exports.write = function(response, resp) {
	resp.writeHead(response.respCode, {"Content-Type": "text/plain"});
	if(response.respCode === 200) {
		resp.write(response.content);
	} else if (response.respCode === 404) {
		resp.write(response.respCode + " Page Not Found");
	} else if (response.respCode === 500) {
		resp.write(response.respCode = " Sever Error");
	}
	resp.end();
}