var response = require('../model/response');
var app = require('../app');
var node = require('../model/node');
var tag = require('../model/tag');

exports.create = function(query, respond) {
    // validate node values
    if (query.lat < -90 || query.lat > 90) {
        respond(new response(200, "node lat is invalid"));
    } else if(query.lon < -180 || query.lon > 180) {
        respond(new response(200, "node lon is invalid"));
    } else {
        var node0 = new node(query.lat, query.lon);
        console.log('creating');
        app.dao.createNode(node0, function(result, newNode) {
            if (newNode) {
                respond(new response(200, JSON.stringify(newNode)));
            } else {
                respond(new response(200, "node wasn't complete"));
            }
        });
    }
};

exports.update = function(query, respond) {
    if (query.lat < -90 || query.lat > 90) {
        respond(new response(200, "node lat is invalid"));
    } else if(query.lon < -180 || query.lon > 180) {
        respond(new response(200, "node lon is invalid"));
    } else {
        var node0 = new node(query.lat, query.lon);
        node0._id = query.id;
        app.dao.updateNode(node0, function(result, editedNode) {
            if (editedNode) {
                respond(new response(200, JSON.stringify(editedNode)));
            } else {
                respond(new response(200, "node not found"));
            }
        });
    }
};

exports.get = function(query, respond) {
    if (!query.id) {
        respond(new response(200, "id not defined"));
    } else {
        app.dao.getNode(query.id, function(node) {
            if (node) {
                respond(new response(200, JSON.stringify(node)));
            } else {
                respond(new response(200, "node not found"));
            }
        });
    }
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
    if (!query.id) {
        respond(new response(200, "id not defined"));
    } else {
        app.dao.deleteNode(query.id, function(resp) {
            if (resp === 'deleted') {
                respond(new response(200, query.id + " has been deleted"));
            } else {
                respond(new response(200, "node not found"));
            } 
        });
    }
};

exports.addTag = function(query, respond) {
    if (!query.key) {
        respond(new response(200, "key not defined"));
    } else if (!query.value) {
        respond(new response(200, "value not defined"));
    } else {
        var tag0 = new tag(query.key, query.value);
        app.dao.addTagToNode(tag0, query.id, function(result, node) {
            if(node) {
                respond(new response(200, JSON.stringify(node)));
            } else {
                respond(new response(200, "way not found"));
            }
        });
    }
};

exports.removeTag = function(query, respond) {
    if (!query.key) {
        respond(new response(200, "key not defined"));
    } else if (!query.value) {
        respond(new response(200, "value not defined"));
    } else {
        var tag0 = new tag(query.key, query.value);
        app.dao.removeTagFromNode(tag0, query.id, function(result, node) {
            if(node) {
                respond(new response(200, JSON.stringify(node)));
            } else {
                respond(new response(200, "way not found"));
            }
        });
    }
};