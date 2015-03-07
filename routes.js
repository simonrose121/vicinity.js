var node = require('./model/node');
var response = require('./response');
var app = require('./app');

exports.editNode = function(query, callback) {
    var node0 = new node(query.lat, query.lon, query.alt);
    node0._id = query.id;
    app.dao.updateNode(node0, function(result, editedNode) {
        if(editedNode)
            callback(new response(200, JSON.stringify(editedNode)));
        else
            callback(new response(200, "node not found"));
    });
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

exports.getNode = function(query, callback) {
    console.log(query);
    app.dao.getNode(query.id, function(node) {
        if(node)
            callback(new response(200, JSON.stringify(node)));
        else
            callback(new response(200, "node not found"));
    });
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