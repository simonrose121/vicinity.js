var response = require('../model/response');
var app = require('../app');
var way = require('../model/way');
var node = require('../model/node');
var relation = require('../model/relation');
var tag = require('../model/tag');

exports.create = function(query, respond) {
    var relation0 = new relation();
    app.dao.createRelation(relation0, function(result, newRelation) {
        if (newRelation) {
            respond(new response(200, JSON.stringify(newRelation)));
        } else {
            respond(new response(200, "relation not complete"));
        }
    }); 
}

exports.get = function(query, respond) {
    app.dao.getRelation(query.id, function(relation) {
        if(relation) {
            respond(new response(200, JSON.stringify(relation)));
        } else {
            respond(new response(200, "way not found"));
        }
    });
}

exports.list = function(query, respond) {
    app.dao.getAllRelations(function(allRelations) {
        if(allRelations) {
            if(allRelations.length > 0) {
                respond(new response(200, JSON.stringify(allRelations)));
            } else {
                respond(new response(200, "no ways found"));
            }
        } else {
            respond(new response(200, "no ways found"));
        }
    });
}

exports.delete = function(query, respond) {
    app.dao.deleteRelation(query.id, function(resp) {
        if(resp === 'deleted') {
            respond(new response(200, query.id + " has been deleted"));
        } else {
            respond(new response(200, "way not found"));
        }
    });
}

exports.addNode = function(query, respond) {
    app.dao.addNodeToRelation(query.nodeId, query.relationId, function(result, relation) {
        if(relation) {
            respond(new response(200, JSON.stringify(relation)));
        } else {
            respond(new response(200, "way not found"));
        }
    });
}

exports.removeNode = function(query, respond) {
    app.dao.removeNodeFromRelation(query.nodeId, query.relationId, function(result, relation) {
        if(relation) {
            respond(new response(200, JSON.stringify(relation)));
        } else {
            respond(new response(200, "way not found"));
        }
    });
}

exports.addTag = function(query, respond) {
    var tag0 = new tag(query.key, query.value);
    app.dao.addTagToRelation(tag0, query.id, function(result, relation) {
        if(way) {
            respond(new response(200, JSON.stringify(relation)));
        } else {
            respond(new response(200, "way not found"));
        }
    });
}

exports.removeTag = function(query, respond) {
    var tag0 = new tag(query.key, query.value);
    app.dao.removeTagFromRelation(tag0, query.id, function(result, relation) {
        if(way) {
            respond(new response(200, JSON.stringify(relation)));
        } else {
            respond(new response(200, "way not found"));
        }
    });
}

exports.addWay = function(query, respond) {
    app.dao.addWayToRelation(query.wayId, query.relationId, function(result, relation) {
        if(relation) {
            respond(new response(200, JSON.stringify(relation)));
        } else {
            respond(new response(200, "way not found"));
        }
    });
}

exports.removeWay = function(query, respond) {
    app.dao.removeWayFromRelation(query.wayId, query.relationId, function(result, relation) {
        if(relation) {
            respond(new response(200, JSON.stringify(relation)));
        } else {
            respond(new response(200, "way not found"));
        }
    });
}

exports.addRelation = function(query, respond) {
    app.dao.addRelationToRelation(query.otherRelationId, query.relationId, function(result, relation) {
        if(relation) {
            respond(new response(200, JSON.stringify(relation)));
        } else {
            respond(new response(200, "way not found"));
        }
    });
}

exports.removeRelation = function(query, respond) {
    app.dao.removeRelationFromRelation(query.otherRelationId, query.relationId, function(result, relation) {
        if(relation) {
            respond(new response(200, JSON.stringify(relation)));
        } else {
            respond(new response(200, "way not found"));
        }
    });
}