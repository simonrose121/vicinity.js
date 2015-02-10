function response(respCode, content) {
	this.respCode = respCode;
	this.content = content;
}

module.exports = response;