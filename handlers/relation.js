var response = require('../model/response');
var app = require('../app');
var way = require('../model/way');
var relation = require('../model/relation');
var tag = require('../model/tag');

exports.create = function(query, respond) {
    // create relation and store it
    var relation0 = new relation();
    app.dao.createRelation(relation0, function(result, newRelation) {
        if (newRelation) {
            respond(new response(200, JSON.stringify(newRelation)));
        } else {
            respond(new response(200, JSON.stringify(result)));
        }
    }); 
};

exports.get = function(query, respond) {
    // get relation and return it
    app.dao.getRelation(query.id, function(result, relation) {
        if (relation) {
            respond(new response(200, JSON.stringify(relation)));
        } else {
            respond(new response(200, JSON.stringify(result)));
        }
    });
};

exports.list = function(query, respond) {
    // get all relations
    app.dao.getAllRelations(function(allRelations) {
        if(allRelations) {
            // validate length of returned array
            if(allRelations.length > 0) {
                respond(new response(200, JSON.stringify(allRelations)));
            } else {
                respond(new response(200, "no relations found"));
            }
        } else {
            respond(new response(200, "no relations found"));
        }
    });
};

exports.delete = function(query, respond) {
    app.dao.deleteRelation(query.id, function(result) {
        if(result === 'deleted') {
            respond(new response(200, query.id + " has been deleted"));
        } else {
            respond(new response(200, JSON.stringify(result)));
        }
    });
};

exports.addNode = function(query, respond) {
    // add node to relation
    app.dao.addNodeToRelation(query.nodeId, query.relationId, function(result, relation) {
        if(relation) {
            respond(new response(200, JSON.stringify(relation)));
        } else {
            respond(new response(200, JSON.stingify(result)));
        }
    });
};

exports.removeNode = function(query, respond) {
    // remove node from relation
    app.dao.removeNodeFromRelation(query.nodeId, query.relationId, function(result, relation) {
        if(relation) {
            respond(new response(200, JSON.stringify(relation)));
        } else {
            respond(new response(200, JSON.stringify(result)));
        }
    });
};

exports.listNodes = function(query, respond) {
    app.dao.getNodesInRelation(query.id, function(result, nodes) {
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
    app.dao.addTagToRelation(tag0, query.id, function(result, relation) {
        if(way) {
            respond(new response(200, JSON.stringify(relation)));
        } else {
            respond(new response(200, JSON.stringify(result)));
        }
    });
};

exports.removeTag = function(query, respond) {
    // create new tag and use that to remove tag
    var tag0 = new tag(query.key, query.value);
    app.dao.removeTagFromRelation(tag0, query.id, function(result, relation) {
        if(way) {
            respond(new response(200, JSON.stringify(relation)));
        } else {
            respond(new response(200, JSON.stringify(result)));
        }
    });
};

exports.addWay = function(query, respond) {
    app.dao.addWayToRelation(query.wayId, query.relationId, function(result, relation) {
        if(relation) {
            respond(new response(200, JSON.stringify(relation)));
        } else {
            respond(new response(200, JSON.stringify(result)));
        }
    });
};

exports.removeWay = function(query, respond) {
    app.dao.removeWayFromRelation(query.wayId, query.relationId, function(result, relation) {
        if(relation) {
            respond(new response(200, JSON.stringify(relation)));
        } else {
            respond(new response(200, JSON.stringify(result)));
        }
    });
};

exports.listWays = function(query, respond) {
    app.dao.getWaysInRelation(query.id, function(result, ways) {
        if (ways) {
            respond(new response(200, JSON.stringify(ways)));
        } else {
            respond(new response(200, JSON.stringify(result)));
        }
    });
};

exports.addRelation = function(query, respond) {
    app.dao.addRelationToRelation(query.otherRelationId, query.relationId, function(result, relation) {
        if(relation) {
            respond(new response(200, JSON.stringify(relation)));
        } else {
            respond(new response(200, JSON.stringify(result)));
        }
    });
};

exports.removeRelation = function(query, respond) {
    app.dao.removeRelationFromRelation(query.otherRelationId, query.relationId, function(result, relation) {
        if(relation) {
            respond(new response(200, JSON.stringify(relation)));
        } else {
            respond(new response(200, JSON.stringify(result)));
        }
    });
};

exports.listRelations = function(query, respond) {
    app.dao.getRelationsInRelation(query.id, function(result, relations) {
        if (relations) {
            respond(new response(200, JSON.stringify(relations)));
        } else {
            respond(new response(200, JSON.stringify(result)));
        }
    });
};