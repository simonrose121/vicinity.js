var response = require('../model/response');
var app = require('../app');
var way = require('../model/way');
var tag = require('../model/tag');

exports.create = function(query, respond) {
    var way0 = new way();
    app.dao.createWay(way0, function(result, newWay) {
        if (newWay) {
            respond(new response(200, JSON.stringify(newWay)));
        } else {
            respond(new response(200, "way not complete"));
        }
    }); 
};

exports.get = function(query, respond) {
    if (!query.id) {
        respond(new response(200, "id not defined"));
    } else {
        app.dao.getWay(query.id, function(way) {
            if(way) {
                respond(new response(200, JSON.stringify(way)));
            } else {
                respond(new response(200, "way not found"));
            }
        });
    }
};

exports.list = function(query, respond) {
    app.dao.getAllWays(function(allWays) {
        if(allWays) {
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
    if (!query.id) {
        respond(new response(200, "id not defined"));
    } else {
        app.dao.deleteWay(query.id, function(resp) {
            if(resp === 'deleted') {
                respond(new response(200, query.id + " has been deleted"));
            } else {
                respond(new response(200, "way not found"));
            }
        });
    }
};

exports.addNode = function(query, respond) {
    if (!query.nodeId) {
        respond(new response(200, "node id not defined"));
    } else if (!query.wayId) {
        respond(new response(200, "way id not defined"));
    } else {
        app.dao.addNodeToWay(query.nodeId, query.wayId, function(result, way) {
            if(way) {
                respond(new response(200, JSON.stringify(way)));
            } else {
                respond(new response(200, "way not found"));
            }
        });
    }
};

exports.removeNode = function(query, respond) {
    if (!query.nodeId) {
        respond(new response(200, "node id not defined"));
    } else if (!query.wayId) {
        respond(new response(200, "way id not defined"));
    } else {
        app.dao.removeNodeFromWay(query.nodeId, query.wayId, function(result, way) {
            if(way) {
                respond(new response(200, JSON.stringify(way)));
            } else {
                respond(new response(200, "way not found"));
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
        app.dao.addTagToWay(tag0, query.id, function(result, way) {
            if(way) {
                respond(new response(200, JSON.stringify(way)));
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
        app.dao.removeTagFromWay(tag0, query.id, function(result, way) {
            if(way) {
                respond(new response(200, JSON.stringify(way)));
            } else {
                respond(new response(200, "way not found"));
            }
        });
    }
};