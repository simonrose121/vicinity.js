var node = require('./model/node');
var response = require('./response');
var app = require('./app');
var wait = require('wait.for');

exports.editNode = function() {
    var node0 = new node(53.373656, -1.450626, 0);
    console.log(node0);
    var resp = new response(200, JSON.stringify(node0));
    return resp;
};

exports.addNode = function(query, callback) {
    var node0 = new node(query.lat, query.lon, query.alt);
    app.dao.createNode(node0, function(result, newNode) {
        if(newNode)
            callback(new response(200, JSON.stringify(newNode)));
        else
            callback(new response(200, "node wasn't complete"));
    });
};

exports.getNode = function(qs) {
    var resp;
    app.dao.getNode(qs.id, function(result, node) {
        resp = new response(200, JSON.stringify(node));
    });
    return resp;
};

exports.listNodes = function(query, callback) {
    var resp;
    app.dao.getAllNodes(function(allNodes) {
        if(allNodes)
            callback(new response(200, JSON.stringify(allNodes)));
        else
            callback(new response(200, "no nodes found"));
    });
};

//add?lon=20&lat=10&alt=0