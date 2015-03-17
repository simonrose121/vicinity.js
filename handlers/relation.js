var response = require('../model/response');
var app = require('../app');
var way = require('../model/way');
var node = require('../model/node');
var relation = require('../model/relation');
var tag = require('../model/tag');

exports.create = function(query, respond) {
    // create relation and store it
    var relation0 = new relation();
    app.dao.createRelation(relation0, function(result, newRelation) {
        if (newRelation) {
            respond(new response(200, JSON.stringify(newRelation)));
        } else {
            respond(new response(200, "relation not complete"));
        }
    }); 
};

exports.get = function(query, respond) {
    // check if id is in querystring
    if (!query.id) {
        respond(new response(200, "id not defined"));
    } else {
        // get relation and return it
        app.dao.getRelation(query.id, function(relation) {
            if(relation) {
                respond(new response(200, JSON.stringify(relation)));
            } else {
                respond(new response(200, "relation not found"));
            }
        });
    }
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
    // check if id is in querystring
    if (!query.id) {
        respond(new response(200, "id not defined"));
    } else {
        app.dao.deleteRelation(query.id, function(resp) {
            if(resp === 'deleted') {
                respond(new response(200, query.id + " has been deleted"));
            } else {
                respond(new response(200, "relation not found"));
            }
        });
    }
};

exports.addNode = function(query, respond) {
    // validate query
    if (!query.nodeId) {
        respond(new response(200, "node id not defined"));
    } else if (!query.relationId) {
        respond(new response(200, "relation id not defined"));
    } else {
        // add node to relation
        app.dao.addNodeToRelation(query.nodeId, query.relationId, function(result, relation) {
            if(relation) {
                respond(new response(200, JSON.stringify(relation)));
            } else {
                respond(new response(200, "relation not found"));
            }
        });
    }
};

exports.removeNode = function(query, respond) {
    // validate query
    if (!query.nodeId) {
        respond(new response(200, "node id not defined"));
    } else if (!query.relationId) {
        respond(new response(200, "relation id not defined"));
    } else {
        // remove node from relation
        app.dao.removeNodeFromRelation(query.nodeId, query.relationId, function(result, relation) {
            if(relation) {
                respond(new response(200, JSON.stringify(relation)));
            } else {
                respond(new response(200, "relation not found"));
            }
        });
    }
};

exports.listNodes = function(query, respond) {
    // validate query
    if (!query.id) {
        respond(new response(200, "id not defined"));
    } else {
        app.dao.getNodesInRelation(query.id, function(result, nodes) {
            if (nodes) {
                respond(new response(200, JSON.stringify(nodes)));
            } else {
                respond(new response(200, "no nodes found"));
            }
        });
    }
};

exports.addTag = function(query, respond) {
    // validate query
    if (!query.id) {
        respond(new response(200, "id not defined"));
    } else if (!query.key) {
        respond(new response(200, "key not defined"));
    } else if (!query.value) {
        respond(new response(200, "value not defined"));
    } else {
        // create new tag and add it
        var tag0 = new tag(query.key, query.value);
        app.dao.addTagToRelation(tag0, query.id, function(result, relation) {
            if(way) {
                respond(new response(200, JSON.stringify(relation)));
            } else {
                respond(new response(200, "relation not found"));
            }
        });
    }
};

exports.removeTag = function(query, respond) {
    // validate query
    if (!query.id) {
        respond(new response(200, "id not defined"));
    } else if (!query.key) {
        respond(new response(200, "key not defined"));
    } else if (!query.value) {
        respond(new response(200, "value not defined"));
    } else {
        // create new tag and use that to remove tag
        var tag0 = new tag(query.key, query.value);
        app.dao.removeTagFromRelation(tag0, query.id, function(result, relation) {
            if(way) {
                respond(new response(200, JSON.stringify(relation)));
            } else {
                respond(new response(200, "relation not found"));
            }
        });
    }
};

exports.addWay = function(query, respond) {
    // validate query
    if (!query.wayId) {
        respond(new response(200, "way id not defined"));
    } else if (!query.relationId) {
        respond(new response(200, "relation id not defined"));
    } else {
        app.dao.addWayToRelation(query.wayId, query.relationId, function(result, relation) {
            if(relation) {
                respond(new response(200, JSON.stringify(relation)));
            } else {
                respond(new response(200, "relation not found"));
            }
        });
    }
};

exports.removeWay = function(query, respond) {
    // validate query
    if (!query.wayId) {
        respond(new response(200, "way id not defined"));
    } else if (!query.relationId) {
        respond(new response(200, "relation id not defined"));
    } else {
        app.dao.removeWayFromRelation(query.wayId, query.relationId, function(result, relation) {
            if(relation) {
                respond(new response(200, JSON.stringify(relation)));
            } else {
                respond(new response(200, "relation not found"));
            }
        });
    }
};

exports.listWays = function(query, respond) {
    // validate query
    if (!query.id) {
        respond(new response(200, "id not defined"));
    } else {
        app.dao.getWaysInRelation(query.id, function(result, ways) {
            if (ways) {
                respond(new response(200, JSON.stringify(ways)));
            } else {
                respond(new response(200, "no ways found"));
            }
        });
    }
};

exports.addRelation = function(query, respond) {
    // validate query
    if (!query.otherRelationId) {
        respond(new response(200, "second relation id not defined"));
    } else if (!query.relationId) {
        respond(new response(200, "relation id not defined"));
    } else {
        app.dao.addRelationToRelation(query.otherRelationId, query.relationId, function(result, relation) {
            if(relation) {
                respond(new response(200, JSON.stringify(relation)));
            } else {
                respond(new response(200, "relation not found"));
            }
        });
    }
};

exports.removeRelation = function(query, respond) {
    // validate query
    if (!query.otherRelationId) {
        respond(new response(200, "second relation id not defined"));
    } else if (!query.relationId) {
        respond(new response(200, "relation id not defined"));
    } else {
        app.dao.removeRelationFromRelation(query.otherRelationId, query.relationId, function(result, relation) {
            if(relation) {
                respond(new response(200, JSON.stringify(relation)));
            } else {
                respond(new response(200, "relation not found"));
            }
        });
    }
};

exports.listRelations = function(query, respond) {
    // validate query
    if (!query.id) {
        respond(new response(200, "id not defined"));
    } else {
        app.dao.getRelationsInRelation(query.id, function(result, relations) {
            if (relations) {
                respond(new response(200, JSON.stringify(relations)));
            } else {
                respond(new response(200, "no relations found"));
            }
        });
    }
};