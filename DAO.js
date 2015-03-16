/*
Data Access Object is required to return JSON objects from a mongoDB instance 
*/

var mongoose = require('mongoose');

function DAO() {
    var db;
    var nodeSchema;
    var tagSchema;
    var waySchema;
    var relationSchema;
};
 
DAO.prototype.connect = function(port, dbname) {
    // connect to a local instance of mongodb
    mongoose.connect('mongodb://localhost:' + port + '/' + dbname, function(err) {
        if(err)
            console.trace('error occurred, when attempted to connect db. Error: ' + err);
        else
            console.log('connection established');
    });
    // store connection
    this.db = mongoose.connection;
    // bind for connection errors
    this.db.on('error', console.error.bind(console, 'connection error:'));
};
            
DAO.prototype.close = function(callback) {
    this.db.close(function(err) {
        if (err) return console.error(err);
        callback(err, 'closed')
    });
};
            
DAO.prototype.createSchemas = function() {
    // create schemas which mimic model objects
    var tagSchema = mongoose.Schema({
        key_: Object,
        value_: Object
    });
    var nodeSchema = mongoose.Schema({
        lat_: Number,
        lon_: Number,
        tags_: [tagSchema]
    });
    var waySchema = mongoose.Schema({
        nodes_: [{type: mongoose.Schema.Types.ObjectId, ref: 'nodeSchema'}],
        tags_: [tagSchema]
    });
    var relationSchema = mongoose.Schema({
        nodes_: [{type: mongoose.Schema.Types.ObjectId, ref: 'nodeSchema'}],
        tags_: [tagSchema],
        ways_: [{type: mongoose.Schema.Types.ObjectId, ref: 'waySchema'}],
        relations_: [{type: mongoose.Schema.Types.ObjectId, ref: 'relationSchema'}]
    });
    
    // store the schemas as objects
    mongoose.model('nodeSchema', nodeSchema);
    this.nodeSchema = mongoose.model('nodeSchema');
    
    mongoose.model('tagSchema', tagSchema);
    this.tagSchema = mongoose.model('tagSchema');
    
    mongoose.model('waySchema', waySchema);
    this.waySchema = mongoose.model('waySchema');
    
    mongoose.model('relationSchema', relationSchema);
    this.relationSchema = mongoose.model('relationSchema');
};

// NODE METHODS

DAO.prototype.createNode = function(obj, callback) {
    // convert node to instance of node schema
    var newNode = new this.nodeSchema(obj);
    // save node
    newNode.save(function(err) {
        if (err) {
            return console.error(err);
        } else {
            callback('added', newNode);
        }
    });
};


DAO.prototype.updateNode = function(obj, callback) {
    // convert node to instance of node schema
    var updatedNode = new this.nodeSchema(obj);
    // update node if it exists (upsert)
    this.nodeSchema.update({_id: updatedNode._id}, updatedNode, {upsert: true}, function(err) {
        if (err) {
            return console.error(err);
        } else {
            callback('updated', updatedNode);
        }
    });
};

DAO.prototype.getNode = function(id, callback) {
    // find node with matching id
    this.nodeSchema.findOne({_id: id}, function(err, node) {
        if (err) {
            return console.error(err);
        } else {
            callback(node);
        }
    });
};

DAO.prototype.getAllNodes = function(callback) {
    // find all nodes
    this.nodeSchema.find(function(err, nodes) {
        if (err) {
            return console.error(err);
        } else {
            callback(nodes);
        }
    });
};

DAO.prototype.deleteNode = function(id, callback) {
    // remove node from database
    this.nodeSchema.remove({_id: id}, function(err) {
        if (err) {
            return console.error(err);
        }
    });
    // remove references
    this.waySchema.remove({nodes_: id}, function(err) {
        if (err) {
            return console.error(err);
        }
    });
    this.relationSchema.remove({nodes_: id}, function(err) {
        if (err) {
            return console.error(err);
        } else {
            // fire callback after last action
            callback('deleted');
        }
    });
};

DAO.prototype.deleteAllNodes = function() {
    // delete all nodes
    this.nodeSchema.remove(function(err) {
        if (err) {
            return console.error(err);
        }
    });
};

DAO.prototype.addTagToNode = function(tag, id, callback) {
    // find node and add tag to array
    this.nodeSchema.findOne({_id: id}, function(err, node) {
        if (err) {
            return console.error(err);
        } else {
            node.tags_.push(tag);
            callback('added tag', node, tag);
        }
    });
};

DAO.prototype.removeTagFromNode = function(tag, id, callback) {
    // find node and remove tag from tags array
    this.nodeSchema.findOne({_id: id}, function(err, node) {
        if (err) {
            return console.error(err);
        } else {
            var index;
            // find tag that matches
            for (var i = 0; i < node.tags_.length; i++) {
                if (node.tags_[i].value_ === tag.value_ && 
                    node.tags_[i].key_ === tag.key_ ) {
                    index = i;
                }
            }
            // remove tag
            node.tags_.splice(index);
            callback('removed tag', node);
        }
    });
};

// WAY METHODS

DAO.prototype.createWay = function(obj, callback) {
    // convert to instance of way schema
    var newWay = new this.waySchema(obj);
    newWay.save(function(err) {
        if (err) {
            return console.error(err);
        } else {
            callback('added', newWay);
        }   
    });
};

DAO.prototype.getWay = function(id, callback) {
    // find way with matching id
    this.waySchema.findOne({_id: id}, function(err, way) {
        if (err) {
            return console.error(err);
        } else {
            callback(way);
        }
    });
};

DAO.prototype.getAllWays = function(callback) {
    // find all ways
    this.waySchema.find(function(err, ways) {
        if (err) {
            return console.error(err);
        } else {
            callback(ways);
        }
    });
};

DAO.prototype.deleteWay = function(id, callback) {
    // remove way from database
    this.waySchema.remove({_id: id}, function(err) {
        if (err) {
            return console.error(err);
        }
    });
    // remove references
    this.relationSchema.remove({ways_: id}, function(err) {
        if (err) {
            return console.error(err);
        } else {
            // fire callback after last action
            callback('deleted');
        }
    });
};

DAO.prototype.deleteAllWays = function(callback) {
    // remove all ways
    this.waySchema.remove(function(err) {
        if (err) {
            return console.error(err);
        } else {
            callback('deleted all ways');
        }
    });
};

DAO.prototype.addNodeToWay = function(nodeId, wayId, callback) {
    // find way and add node id
    this.waySchema.findOne({_id: wayId}, function(err, way) {
        if (err) {
            return console.error(err);
        } else {
            way.nodes_.push(nodeId);
            callback('added node', way);
        }
    });
};

DAO.prototype.removeNodeFromWay = function(nodeId, wayId, callback) {
    // find way and remove node id
    this.waySchema.findOne({_id: wayId}, function(err, w) {
        if (err) {
            return console.error(err);
        } else {
            // remove and readjust array
            w.nodes_.splice(w.nodes_.indexOf(nodeId));
            callback('removed node', w);
        }
    });
};

DAO.prototype.addTagToWay = function(tag, id, callback) {
    // find way and add tag to array
    this.waySchema.findOne({_id: id}, function(err, way) {
        if (err) {
            return console.error(err);
        } else {
            way.tags_.push(tag);
            callback('added tag', way, tag);
        }
    });
};

DAO.prototype.removeTagFromWay = function(tag, id, callback) {
    // find way and remove tag from tags array
    this.waySchema.findOne({_id: id}, function(err, w) {
        if (err) {
            return console.error(err);
        } else {
            var index;
            // find tag that matches
            for (var i = 0; i < w.tags_.length; i++) {
                if (w.tags_[i].value_ === tag.value_ && 
                    w.tags_[i].key_ === tag.key_ ) {
                    index = i;
                }
            }
            // remove tag
            w.tags_.splice(index);
            callback('removed tag', w);
        }
    });
};

// RELATION METHODS

DAO.prototype.createRelation = function(obj, callback) {
    // convert relation to instance of relation schema
    var newRelation = new this.relationSchema(obj);
    // save relation
    newRelation.save(function(err) {
        if (err) {
            return console.error(err);
        } else {
            callback('added', newRelation);
        }
    });
};

DAO.prototype.getRelation = function(id, callback) {
    // find relation matching id
    this.relationSchema.findOne({_id: id}, function(err, r) {
        if (err) {
            return console.error(err); 
        } else {
            callback(r);
        }
    });
};

DAO.prototype.getAllRelations = function(callback) {
    // find all relations
    this.relationSchema.find({}, function(err, relations) {
        if (err) {
            return console.error(err);
        } else {
            callback(relations);
        }
    });
};

DAO.prototype.deleteRelation = function(id, callback) {
    // remove relation from database
    this.relationSchema.remove({_id: id}, function(err) {
        if (err) {
            return console.error(err);
        }
    });
    // remove references
    this.relationSchema.remove({relations_: id}, function(err) {
        if (err) {
            return console.error(err);
        } else {
            // fire callback after last action
            callback('deleted');
        } 
    });
};

DAO.prototype.deleteAllRelations = function(callback) {
    // remove all relations
    this.relationSchema.remove({}, function(err) {
        if (err) {
            return console.error(err);
        } else {
            callback('deleted all relations');
        }
    });
};

DAO.prototype.addNodeToRelation = function(nodeId, relationId, callback) {
    // find relation and add node id
    this.relationSchema.findOne({_id: relationId}, function(err, relation) {
        if (err) {
            return console.error(err);
        } else {
            relation.nodes_.push(nodeId);
            callback('added node', relation);
        }
    });
};

DAO.prototype.removeNodeFromRelation = function(nodeId, relationId, callback) {
    // find relation and remove node id
    this.relationSchema.findOne({_id: relationId}, function(err, relation) {
        if (err) {
            return console.error(err);
        } else {
            relation.nodes_.splice(relation.nodes_.indexOf(nodeId));
            callback('removed node', relation);
        }
    });
};

DAO.prototype.addTagToRelation = function(tag, id, callback) {
    // find way and add tag to array
    this.relationSchema.findOne({_id: id}, function(err, relation) {
        if (err) {
            return console.error(err);
        } else {
            relation.tags_.push(tag);
            callback('added tag', relation, tag);
        }
    });
};

DAO.prototype.removeTagFromRelation = function(tag, id, callback) {
    // find way and remove tag from array
    this.relationSchema.findOne({_id: id}, function(err, relation) {
        if (err) {
            return console.error(err);
        } else {
            var index;
            // find tag that matches
            for (var i = 0; i < relation.tags_.length; i++) {
                if (relation.tags_[i].value_ === tag.value_ && 
                    relation.tags_[i].key_ === tag.key_ ) {
                    index = i;
                }
            }
            // remove
            relation.tags_.splice(index);
            callback('removed tag', relation);
        }
    });
};

DAO.prototype.addWayToRelation = function(wayId, relationId, callback) {
    // find relation and add way id
    this.relationSchema.findOne({_id: relationId}, function(err, relation) {
        if (err) {
            return console.error(err);
        } else {
            relation.ways_.push(wayId);
            callback('added way', relation);
        }
    });
};

DAO.prototype.removeWayFromRelation = function(wayId, relationId, callback) {
    // find relation and remove way id
    this.relationSchema.findOne({_id: relationId}, function(err, r) {
        if (err) {
            return console.error(err);
        } else {
            r.ways_.splice(r.ways_.indexOf(wayId));
            callback('removed way', r);
        }
    });
};

DAO.prototype.addRelationToRelation = function(relationToAddId, relationId, callback) {
    // find relation and add relation id
    this.relationSchema.findOne({_id: relationId}, function(err, relation) {
        if (err) {
            return console.error(err);
        } else {
            relation.relations_.push(relationToAddId);
            callback('added relation', relation);
        }
    });
};

DAO.prototype.removeRelationFromRelation = function(relationToRemoveId, relationId, callback) {
    // find relation and remove relation id
    this.relationSchema.findOne({_id: relationId}, function(err, relation) {
        if (err) {
            return console.error(err);
        } else {
            relation.relations_.splice(relation.ways_.indexOf(relationId));
            callback('removed relation', relation);
        }
    });
};

module.exports = DAO;

// mongod --dbpath /data/db --smallfiles