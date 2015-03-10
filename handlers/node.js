var response = require('../model/response');
var app = require('../app');
var node = require('../model/node');
var tag = require('../model/tag')

exports.create = function(query, respond) {
    var node0 = new node(query.lat, query.lon);
    console.log('creating');
    app.dao.createNode(node0, function(result, newNode) {
        if (newNode) {
            respond(new response(200, JSON.stringify(newNode)));
        } else {
            respond(new response(200, "node wasn't complete"));
        }
    });
};

exports.update = function(query, respond) {
    var node0 = new node(query.lat, query.lon);
    node0._id = query.id;
    app.dao.updateNode(node0, function(result, editedNode) {
        if (editedNode) {
            respond(new response(200, JSON.stringify(editedNode)));
        } else {
            respond(new response(200, "node not found"));
        }
    });
};

exports.get = function(query, respond) {
    app.dao.getNode(query.id, function(node) {
        if (node) {
            respond(new response(200, JSON.stringify(node)));
        } else {
            respond(new response(200, "node not found"));
        }
    });
};

exports.list = function(query, respond) {
    app.dao.getAllNodes(function(allNodes) {
        if (allNodes) {
            if(allNodes.length > 0) {
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
    app.dao.deleteNode(query.id, function(resp) {
        if (resp === 'deleted') {
            respond(new response(200, query.id + " has been deleted"));
        } else {
            respond(new response(200, "node not found"));
        } 
    });
};

exports.addTag = function(query, respond) {
    var tag0 = new tag(query.key, query.value);
    app.dao.addTagToNode(tag0, query.id, function(result, node) {
        if(node) {
            respond(new response(200, JSON.stringify(node)));
        } else {
            respond(new response(200, "way not found"));
        }
    });
}

exports.removeTag = function(query, respond) {
    var tag0 = new tag(query.key, query.value);
    app.dao.removeTagFromNode(tag0, query.id, function(result, node) {
        if(node) {
            respond(new response(200, JSON.stringify(node)));
        } else {
            respond(new response(200, "way not found"));
        }
    });
}