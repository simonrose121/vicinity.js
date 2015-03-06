var node = require('./model/node');
var response = require('./response');
var app = require('./app');
//var wait = require('wait.for');

exports.editNode = function() {
    var node0 = new node(53.373656, -1.450626, 0);
    console.log(node0);
    var resp = new response(200, JSON.stringify(node0));
    return resp;
}

exports.createNode = function() {
    var node0 = new node(53.373656, -1.450626, 0);
    var resp;
    app.dao.createNode(node0, function(result, newNode) {
        resp = new response(200, JSON.stringify(newNode));
        return resp;
    });
    return resp;
}

exports.listNodes = function() {
    var resp;
    app.dao.getAllNodes(function(allNodes) {
        resp = new response(200, JSON.stringify(allNodes));
    });
    console.log(resp);
    return resp;
}