var response = require('../model/response');
var app = require('../app');
var way = require('../model/way');
var tag = require('../model/tag');

exports.create = function(query, respond) {
    // create way and store it
    var way0 = new way();
    app.dao.createWay(way0, function(result, newWay) {
        if (newWay) {
            respond(new response(200, JSON.stringify(newWay)));
        } else {
            respond(new response(200, JSON.stringify(result)));
        }
    }); 
};

exports.get = function(query, respond) {
    // get way and return it
    app.dao.getWay(query.id, function(result, way) {
        if (way) {
            respond(new response(200, JSON.stringify(way)));
        } else {
            respond(new response(200, JSON.stringify(result)));
        }
    });
};

exports.list = function(query, respond) {
    // get all ways
    app.dao.getAllWays(function(allWays) {
        if (allWays) {
            // validate length of returned array
            if(allWays.length > 0) {
                respond(new response(200, JSON.stringify(allWays)));
            } else {
                respond(new response(200, "no ways found"));
            }
        } else {
            respond(new response(200, "no ways found"));
        }
    });
};

exports.delete = function(query, respond) {
    app.dao.deleteWay(query.id, function(result) {
        if(result === 'deleted') {
            respond(new response(200, query.id + " has been deleted"));
        } else {
            respond(new response(200, JSON.stringify(result)));
        }
    });
};

exports.addNode = function(query, respond) {
    // add node to way
    app.dao.addNodeToWay(query.nodeId, query.wayId, function(result, way) {
        if (way) {
            respond(new response(200, JSON.stringify(way)));
        } else {
            respond(new response(200, JSON.stringify(result)));
        }
    });
};

exports.removeNode = function(query, respond) {
    // remove node from way
    app.dao.removeNodeFromWay(query.nodeId, query.wayId, function(result, way) {
        if (way) {
            respond(new response(200, JSON.stringify(way)));
        } else {
            respond(new response(200, JSON.stringify(result)));
        }
    });
};

exports.listNodes = function(query, respond) {
    app.dao.getNodesInWay(query.id, function(result, nodes) {
        if (nodes) {
            respond(new response(200, JSON.stringify(nodes)));
        } else {
            respond(new response(200, JSON.stringify(result)));
        }
    });
};

exports.addTag = function(query, respond) {
    // create new tag and add it
    var tag0 = new tag(query.key, query.value);
    app.dao.addTagToWay(tag0, query.id, function(result, way) {
        if(way) {
            respond(new response(200, JSON.stringify(way)));
        } else {
            respond(new response(200, JSON.stringify(result)));
        }
    });
};

exports.removeTag = function(query, respond) {
    // create new tag and use that to remove tag
    var tag0 = new tag(query.key, query.value);
    app.dao.removeTagFromWay(tag0, query.id, function(result, way) {
        if(way) {
            respond(new response(200, JSON.stringify(way)));
        } else {
            respond(new response(200, JSON.stringify(result)));
        }
    });
};