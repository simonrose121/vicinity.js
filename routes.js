var node = require('./model/node');
var response = require('./response');
var app = require('./app');

// NODE METHODS
exports.addNode = function(query, respond) {
    var node0 = new node(query.lat, query.lon, query.alt);
    app.dao.createNode(node0, function(result, newNode) {
        if(newNode)
            respond(new response(200, JSON.stringify(newNode)));
        else
            respond(new response(200, "node wasn't complete"));
    });
};

exports.editNode = function(query, respond) {
    var node0 = new node(query.lat, query.lon, query.alt);
    node0._id = query.id;
    app.dao.updateNode(node0, function(result, editedNode) {
        if(editedNode)
            respond(new response(200, JSON.stringify(editedNode)));
        else
            respond(new response(200, "node not found"));
    });
};

exports.getNode = function(query, respond) {
    console.log(query);
    app.dao.getNode(query.id, function(node) {
        if(node)
            respond(new response(200, JSON.stringify(node)));
        else
            respond(new response(200, "node not found"));
    });
};

exports.listNodes = function(query, respond) {
    var resp;
    app.dao.getAllNodes(function(allNodes) {
        if(allNodes)
            respond(new response(200, JSON.stringify(allNodes)));
        else
            respond(new response(200, "no nodes found"));
    });
};

//add?lon=20&lat=10&alt=0