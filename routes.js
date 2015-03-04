var node = require('./model/node');
var response = require('./response');
var app = require('./app');

exports.editNode = function() {
    var node0 = new node(53.373656, -1.450626, 0);
    console.log(node0);
	var resp = new response(200, JSON.stringify(node0));
	return resp;
}

exports.createNode = function() {
    var node0 = new node(53.373656, -1.450626, 0);
    var res;
    var n;
    app.dao.createNode(node0, function(result, newNode) {
        res = result;
        n = newNode;
    });
    var resp = new response(200, n._id + " " + res);
    return resp;
}

exports.listNodes = function() {
    var nodes;
    app.dao.getAllNodes(function(allNodes) {
        nodes = allNodes;
    });
    var resp = new response(200, JSON.stringify(nodes));
    return resp;
}