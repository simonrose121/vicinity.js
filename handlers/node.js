var response = require('../model/response');
var app = require('../app');
var node = require('../model/node');
var tag = require('../model/tag');

exports.create = function(query, respond) {
    // create new node and store it
    var node0 = new node(query.lat, query.lon);
    app.dao.createNode(node0, function(result, newNode) {
        if (newNode) {
            respond(new response(200, JSON.stringify(newNode)));
        } else {
            respond(new response(200, JSON.stringify(result)));
        }
    });
};

exports.update = function(query, respond) {
    // create new node and use it to update
    var node0 = new node(query.lat, query.lon);
    node0._id = query.id;
    app.dao.updateNode(node0, function(result, editedNode) {
        if (editedNode) {
            respond(new response(200, JSON.stringify(editedNode)));
        } else {
            if (result) {
                respond(new response(200, JSON.stringify(result)));
            }
        }
    });
};

exports.get = function(query, respond) {
    // get node and return it
    app.dao.getNode(query.id, function(result, node) {
        if (node) {
            respond(new response(200, JSON.stringify(node)));
        } else {
            respond(new response(200, JSON.stringify(result)));
        }
    });
};

exports.list = function(query, respond) {
    // get all nodes
    app.dao.getAllNodes(function(allNodes) {
        if (allNodes) {
            // validate length of returned array
            if (allNodes.length > 0) {
                respond(new response(200, JSON.stringify(allNodes)));
            } else {
                respond(new response(200, "no nodes found"));
            }
        } else {
            respond(new response(200, "no nodes found"));
        }
    });
};

exports.delete = function(query, respond) {
    // check if id is in querystring
    app.dao.deleteNode(query.id, function(result) {
        if (result === 'deleted') {
            respond(new response(200, query.id + " has been deleted"));
        } else {
            respond(new response(200, JSON.stringify(result)));
        } 
    });
};

exports.addTag = function(query, respond) {
    // create new tag
    var tag0 = new tag(query.key, query.value);
    app.dao.addTagToNode(tag0, query.id, function(result, node) {
        if (node) {
            respond(new response(200, JSON.stringify(node)));
        } else {
            respond(new response(200, JSON.stringify(result)));
        }
    });
};

exports.removeTag = function(query, respond) {
    var tag0 = new tag(query.key, query.value);
    app.dao.removeTagFromNode(tag0, query.id, function(result, node) {
        if(node) {
            respond(new response(200, JSON.stringify(node)));
        } else {
            respond(new response(200, JSON.stringify(result)));
        }
    });
};