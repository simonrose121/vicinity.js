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
    // validate node values
    if (!obj.lat_ || obj.lat_ < -90 || obj.lat_ > 90) {
        callback('node latitude value invalid');
    } else if (!obj.lon_ || obj.lon_ < -180 || obj.lon_ > 180) {
        callback('node longitude value invalid');
    } else {
        // convert node to instance of node schema
        var newNode = new this.nodeSchema(obj);
        // save node
        newNode.save(function(err) {
            if (err) {
                console.error(err);
            } else {
                callback('added', newNode);
            }
        });
    }
};

DAO.prototype.updateNode = function(obj, callback) {
    // validate node values
    if (!obj._id) {
        callback('id not defined');
    } else if (!obj.lat_ || obj.lat_ < -90 || obj.lat_ > 90) {
        callback('node latitude value invalid');
    } else if (!obj.lon_ || obj.lon_ < -180 || obj.lon_ > 180) {
        callback('node longitude value invalid');
    } else {
        // convert node to instance of node schema
        var updatedNode = new this.nodeSchema(obj);
        // update node if it exists (upsert)
        this.nodeSchema.update({_id: updatedNode._id}, updatedNode, {upsert: true}, function(err) {
            if (err) {
                console.error(err);
                callback('node not found');
            } else {
                callback('updated', updatedNode);
            }
        });
    }
};

DAO.prototype.getNode = function(id, callback) {
    if (!id) {
        callback('id not defined');
    } else {
        // find node with matching id
        this.nodeSchema.findById(id, function(err, node) {
            if (err) {
                console.error(err);
                callback('node not found');
            } else {
                callback('node returned', node);
            }
        });
    }
};

DAO.prototype.getAllNodes = function(callback) {
    // find all nodes
    this.nodeSchema.find(function(err, nodes) {
        if (err) {
            return console.error(err);
        } else {
            callback('nodes returned', nodes);
        }
    });
};

DAO.prototype.deleteNode = function(id, callback) {
    if (!id) {
        callback('id not defined');
    } else {
        // remove node from database
        this.nodeSchema.remove({_id: id}, function(err) {
            if (err) {
                console.error(err);
                callback('node not found');
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
    }
};

DAO.prototype.deleteAllNodes = function(callback) {
    // delete all nodes
    this.nodeSchema.remove(function(err) {
        if (err) {
            return console.error(err);
        } else {
            callback('deleted all nodes');
        }
    });
};

DAO.prototype.addTagToNode = function(tag, id, callback) {
    if (!id) {
        callback('id not defined');
    } else if (!tag.key_) {
        callback('tag key not defined');
    } else if (!tag.value_) {
        callback('tag value not defined');
    } else {
        // find node and add tag to array
        var update = { $push: { tags_ : tag } };
        this.nodeSchema.findByIdAndUpdate(id, update, {upsert: true}, function(err, node) {
            if (err) {
                console.error(err);
                callback('node not found');
            } else {
                callback('added tag', node, tag);
            }
        });
    }
};

DAO.prototype.removeTagFromNode = function(tag, id, callback) {
    if (!id) {
        callback('id not defined');
    } else if (!tag.key_) {
        callback('tag key not defined');
    } else if (!tag.value_) {
        callback('tag value not defined');
    } else {
        // find node and remove tag from tags array
        var remove = { $pull : { tags_: tag } };
        this.nodeSchema.findByIdAndUpdate(id, remove, {upsert: true}, function(err, node) {
            if (err) {
                console.error(err);
                callback('node not found');
            } else {
                callback('removed tag', node);
            }
        });
    }
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
    if (!id) {
        callback('id not defined');
    } else {
        // find way with matching id
        this.waySchema.findById(id, function(err, way) {
            if (err) {
                console.error(err);
                callback('way not found');
            } else {
                callback('returned way', way);
            }
        });
    }
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
    if (!id) {
        callback('id not defined');
    } else {
        // remove way from database
        this.waySchema.remove({_id: id}, function(err) {
            if (err) {
                console.error(err);
                callback('way not found');
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
    }
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
    if (!nodeId) {
        callback('node id not defined');
    } else if (!wayId) {
        callback('way id not defined');
    } else {
        // find way and add node id
        var update = { $push: { nodes_: nodeId } };
        this.waySchema.findByIdAndUpdate(wayId, update, {upsert: true}, function(err, way) {
            if (err) {
                console.error(err);
                callback('way not found');
            } else {
                callback('added node', way);
            }
        });
    }
};

DAO.prototype.removeNodeFromWay = function(nodeId, wayId, callback) {
    if (!nodeId) {
        callback('node id not defined');
    } else if (!wayId) {
        callback('way id not defined');
    } else {
        // find way and remove node id
        var remove = { $pull: { nodes_: nodeId } }; 
        this.waySchema.findByIdAndUpdate(wayId, remove, {upsert: true}, function(err, way) {
            if (err) {
                console.error(err);
                callback('way not found');
            } else {
                // remove and readjust array
                callback('removed node', way);
            }
        });
    }
};

DAO.prototype.getNodesInWay = function(id, callback) {
    if (!id) {
        callback('id not defined');
    } else {
        // keep hold of current context
        var that = this;
        this.waySchema.findById(id, function(err, way) {
            if (err) {
                return console.error(err);
            } else {
                if (way.nodes_.length > 0) {
                    var nodes = [];
                    for (var i = 0; i < way.nodes_.length; i++) {
                        // need to be strings for in to work
                        nodes.push(way.nodes_[i].toString());
                    }
                    that.nodeSchema.find({_id: { $in: nodes } }, function(err, foundNodes) {
                        if (err) {
                            return console.error(err);
                        } else {
                            callback('found nodes', foundNodes);
                        }
                    });
                } else {
                    callback('no nodes');
                }
            }
        });  
    }
};

DAO.prototype.addTagToWay = function(tag, id, callback) {
    if (!id) {
        callback('id not defined');
    } else if (!tag.key_) {
        callback('tag key not defined');
    } else if (!tag.value_) {
        callback('tag value not defined');
    } else {
        // find way and add tag to array
        var update = { $push: { tags_: tag } };
        this.waySchema.findByIdAndUpdate(id, update, {upsert:true}, function(err, way) {
            if (err) {
                console.error(err);
                callback('way not found');
            } else {
                callback('added tag', way, tag);
            }
        });
    }
};

DAO.prototype.removeTagFromWay = function(tag, id, callback) {
    if (!id) {
        callback('id not defined');
    } else if (!tag.key_) {
        callback('tag key not defined');
    } else if (!tag.value_) {
        callback('tag value not defined');
    } else {
        // find way and remove tag from tags array
        var remove = { $pull: { tags_: tag } };
        this.waySchema.findByIdAndUpdate(id, remove, {upsert:true}, function(err, way) {
            if (err) {
                console.error(err);
                callback('way not found');
            } else {
                callback('removed tag', way);
            }
        });
    }
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
    if (!id) {
        callback('id not defined');
    } else {
        // find relation matching id
        this.relationSchema.findById(id, function(err, relation) {
            if (err) {
                console.error(err);
                callback('relation not found');
            } else {
                callback('returned relation', relation);
            }
        });
    }
};

DAO.prototype.getAllRelations = function(callback) {
    // find all relations
    this.relationSchema.find(function(err, relations) {
        if (err) {
            return console.error(err);
        } else {
            callback(relations);
        }
    });
};

DAO.prototype.deleteRelation = function(id, callback) {
    if (!id) {
        callback('id not defined');
    } else {
        // remove relation from database
        this.relationSchema.remove({_id: id}, function(err) {
            if (err) {
                console.error(err);
                callback('relation not found');
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
    }
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
    if (!nodeId) {
        callback('node id not defined');
    } else if (!relationId) {
        callback('relation id not defined');
    } else {
        // find relation and add node id
        var update = { $push: { nodes_: nodeId } };
        this.relationSchema.findByIdAndUpdate(relationId, update, {upsert:true}, function(err, relation) {
            if (err) {
                console.error(err);
                callback('relation not found');
            } else {
                callback('added node', relation);
            }
        });
    }
};

DAO.prototype.removeNodeFromRelation = function(nodeId, relationId, callback) {
    if (!nodeId) {
        callback('node id not defined');
    } else if (!relationId) {
        callback('relation id not defined');
    } else {
        // find relation and remove node id
        var remove = { $pull: { nodes_: nodeId } };
        this.relationSchema.findByIdAndUpdate(relationId, remove, {upsert:true}, function(err, relation) {
            if (err) {
                console.error(err);
                callback('relation not found');
            } else {
                callback('removed node', relation);
            }
        });
    }
};

DAO.prototype.getNodesInRelation = function(id, callback) {
    if (!id) {
        callback('id not defined');
    } else {
        // keep hold of current context
        var that = this;
        this.relationSchema.findById(id, function(err, relation) {
            if (err) {
                return console.error(err);
            } else {
                if (relation.nodes_.length > 0) {
                    var nodes = [];
                    for (var i = 0; i < relation.nodes_.length; i++) {
                        // need to be strings for in to work
                        nodes.push(relation.nodes_[i].toString());
                    }
                    that.nodeSchema.find({_id: { $in: nodes } }, function(err, foundNodes) {
                        if (err) {
                            return console.log(err);
                        } else {
                            callback('found nodes', foundNodes);
                        }
                    });
                } else {
                    callback('no nodes');
                }
            }
        }); 
    }
};

DAO.prototype.addTagToRelation = function(tag, id, callback) {
    if (!id) {
        callback('id not defined');
    } else if (!tag.key_) {
        callback('tag key not defined');
    } else if (!tag.value_) {
        callback('tag value not defined');
    } else {
        // find way and add tag to array
        var update = { $push: { tags_: tag } };
        this.relationSchema.findByIdAndUpdate(id, update, {upsert: true}, function(err, relation) {
            if (err) {
                console.error(err);
                callback('relation not found');
            } else {
                callback('added tag', relation, tag);
            }
        });
    }
};

DAO.prototype.removeTagFromRelation = function(tag, id, callback) {
    if (!id) {
        callback('id not defined');
    } else if (!tag.key_) {
        callback('tag key not defined');
    } else if (!tag.value_) {
        callback('tag value not defined');
    } else {
        // find way and remove tag from array
        var remove = { $pull: { tags_: tag } };
        this.relationSchema.findByIdAndUpdate(id, remove, {upsert: true}, function(err, relation) {
            if (err) {
                console.error(err);
                callback('relation not found');
            } else {
                callback('removed tag', relation);
            }
        });
    }
};

DAO.prototype.addWayToRelation = function(wayId, relationId, callback) {
    if (!wayId) {
        callback('way id not defined');
    } else if (!relationId) {
        callback('relation id not defined');
    } else {
        // find relation and add way id
        var update = { $push: { ways_: wayId } };
        this.relationSchema.findByIdAndUpdate(relationId, update, {upsert: true}, function(err, relation) {
            if (err) {
                console.error(err);
                callback('relation not found');
            } else {
                callback('added way', relation);
            }
        });
    }
};

DAO.prototype.removeWayFromRelation = function(wayId, relationId, callback) {
    if (!wayId) {
        callback('way id not defined');
    } else if (!relationId) {
        callback('relation id not defined');
    } else {
        // find relation and remove way id
        var remove = { $pull: { ways_: wayId } };
        this.relationSchema.findByIdAndUpdate(relationId, remove, {upsert: true}, function(err, relation) {
            if (err) {
                console.error(err);
                callback('relation not found');
            } else {
                callback('removed way', relation);
            }
        });
    }
};

DAO.prototype.getWaysInRelation = function(id, callback) {
    if (!id) {
        callback('id not defined');
    } else {
        // keep hold of current context
        var that = this;
        this.relationSchema.findById(id, function(err, relation) {
            if (err) {
                return console.error(err);
            } else {
                if (relation.ways_.length > 0) {
                    var ways = [];
                    for (var i = 0; i < relation.ways_.length; i++) {
                        // need to be strings for in to work
                        ways.push(relation.ways_[i].toString());
                    }
                    that.waySchema.find({_id: { $in: ways } }, function(err, foundWays) {
                        if (err) {
                            return console.log(err);
                        } else {
                            callback('found ways', foundWays);
                        }
                    });
                } else {
                    callback('no ways');
                }
            }
        }); 
    }
};

DAO.prototype.addRelationToRelation = function(relationToAddId, relationId, callback) {
    if (!relationToAddId) {
        callback('second relation id is not defined');
    } else if (!relationId) {
        callback('relation id is not defined');
    } else {
        // find relation and add relation id
        var update = { $push: { relations_: relationToAddId } };
        this.relationSchema.findByIdAndUpdate(relationId, update, {upsert: true}, function(err, relation) {
            if (err) {
                console.error(err);
                callback('relation not found');
            } else {
                relation.relations_.push(relationToAddId);
                callback('added relation', relation);
            }
        });
    }
    
};

DAO.prototype.removeRelationFromRelation = function(relationToRemoveId, relationId, callback) {
    if (!relationToRemoveId) {
        callback('second relation id is not defined');
    } else if (!relationId) {
        callback('relation id is not defined');
    } else {
        // find relation and remove relation id
        var remove = { $pull: { relations_: relationToRemoveId } };
        this.relationSchema.findByIdAndUpdate(relationId, remove, {upsert: true}, function(err, relation) {
            if (err) {
                console.error(err);
                callback('relation not found');
            } else {
                relation.relations_.splice(relation.ways_.indexOf(relationId));
                callback('removed relation', relation);
            }
        });
    }
};

DAO.prototype.getRelationsInRelation = function(id, callback) {
    if (!id) {
        callback('id not defined');
    } else {
        // keep hold of current context
        var that = this;
        this.relationSchema.findById(id, function(err, relation) {
            if (err) {
                return console.error(err);
            } else {
                if (relation.relations_.length > 0) {
                    var relations = [];
                    for (var i = 0; i < relation.relations_.length; i++) {
                        // need to be strings for in to work
                        relations.push(relation.relations_[i].toString());
                    }
                    that.relationSchema.find({_id: { $in: relations } }, function(err, foundRelations) {
                        if (err) {
                            return console.log(err);
                        } else {
                            callback('found relations', foundRelations);
                        }
                    });
                } else {
                    callback('no relations');
                }
            }
        }); 
    }
};

module.exports = DAO;

/**
 * Start mongo command
 **/
// mongod --dbpath /data/db --smallfiles