/*
Data Access Object is required to return JSON objects from a mongoDB instance 
and map them to the model objects
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
    mongoose.connect('mongodb://localhost:' + port + '/' + dbname, function(err) {
        if(err)
            console.trace('error occurred, when attempted to connect db. Error: ' + err);
        else
            console.log("connection established");
    });
    this.db = mongoose.connection;
    this.db.on('error', console.error.bind(console, 'connection error:'));
};
            
DAO.prototype.close = function(callback) {
    this.db.close(function(err) {
        if (err) return console.error(err);
        callback(err, 'closed')
    });
}
            
DAO.prototype.createSchemas = function() {
    // create schemas
    // use local then assign to member variable
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
        nodes_: [nodeSchema],
        tags_: [tagSchema],
        ways_: [waySchema],
        relations_: [relationSchema]
    });
    
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
    var newNode = new this.nodeSchema(obj);
    newNode.save(function(err) {
        if (err) {
            return console.error(err);
        } else {
            callback('added', newNode);
        }
    });
};


DAO.prototype.updateNode = function(obj, callback) {
    var updatedNode = new this.nodeSchema(obj);
    this.nodeSchema.update({_id: updatedNode._id}, updatedNode, {upsert: true}, function(err) {
        if(err) {
            return console.error(err);
        } else {
            callback('updated', updatedNode);
        }
    });
}

DAO.prototype.getNode = function(id, callback) {
    this.nodeSchema.findOne({_id: id}, function(err, n) {
        if (err) 
            return console.log(err);
        else
            callback(n);
    });
}

DAO.prototype.getAllNodes = function(callback) {
    // can't put wait for fiber in here as it never fires
    this.nodeSchema.find(function(err, nodes) {
        if (err) {
            return console.log(err);
        } else {
            callback(nodes);
        }
    });
}

DAO.prototype.deleteNode = function(id, callback) {
    this.nodeSchema.remove({_id: id}, function(err) {
        if(err) {
            return console.log(err);
        } else {
            callback('deleted');
        }
    });
} 

DAO.prototype.deleteAllNodes = function() {
    this.nodeSchema.remove(function(err) {
        if (err) {
            return console.log(err);
        }
    });
}

// WAY METHODS

DAO.prototype.createWay = function(obj, callback) {
    var newWay = new this.waySchema();
    newWay.tags_ = obj.tags_;
    newWay.save(function(err, newWay) {
        if (err) {
            return console.error(err);
        } else {
            callback('added', newWay);
        }   
    });
}

DAO.prototype.getWay = function(id, callback) {
    this.waySchema.findOne({_id: id}, function(err, w) {
        if(err) {
            return console.log(err);
        } else {
            callback(w);
        }
    });
}

DAO.prototype.getAllWays = function(callback) {
    this.waySchema.find({}, function(err, ways) {
        if(err) {
            return console.log(err);
        } else {
            callback(ways);
        }
    });
}

DAO.prototype.deleteWay = function(id, callback) {
    this.waySchema.remove({_id: id}, function(err) {
        if(err) {
            return console.log(err);
        } else {
            callback('deleted');
        }
    });
}

DAO.prototype.deleteAllWays = function(callback) {
    this.waySchema.remove({}, function(err) {
        if (err) {
            return console.log(err);
        }
    });
}

DAO.prototype.addNodeToWay = function(nodeId, wayId, callback) {
    this.waySchema.findOne({_id: wayId}, function(err, w) {
        if (err) {
            return console.log(err);
        } else {
            w.nodes_.push(nodeId);
            callback('added node', w);
        }
    });
};

DAO.prototype.removeNodeFromWay = function(nodeId, wayId, callback) {
    this.waySchema.findOne({_id: wayId}, function(err, w) {
        if (err) {
            return console.log(err);
        } else {
            w.nodes_.splice(w.nodes_.indexOf(nodeId));
            callback('removed node', w);
        }
    });
};

DAO.prototype.addTagToWay = function(tag, id, callback) {
    this.waySchema.findOne({_id: id}, function(err, w) {
        if (err) {
            return console.log(err);
        } else {
            w.tags_.push(tag);
            callback('added tag', w, tag);
        }
    });
};

DAO.prototype.removeTagFromWay = function(tag, id, callback) {
    this.waySchema.findOne({_id: id}, function(err, w) {
        if (err) {
            return console.log(err);
        } else {
            var index;
            // find tag that matches
            for (var i = 0; i < w.tags_.length; i++) {
                if (w.tags_[i].value_ === tag.value_ && 
                    w.tags_[i].key_ === tag.key_ ) {
                    index = i;
                }
            }
            // remove
            w.tags_.splice(index);
            callback('removed tag', w);
        }
    });
};


// RELATION METHODS

DAO.prototype.createRelation = function(obj, callback) {
    var newRelation = new this.relationSchema();
    newRelation.nodes_ = obj.nodes_;
    newRelation.tags_ = obj.tags_;
    newRelation.ways_ = obj.ways_;
    newRelation.relations_ = obj.relations_;
    newRelation.save(function(err, newRelation) {
        if(err) 
            return console.log(err);
        else
            callback('added', newRelation);
    });
}

DAO.prototype.getRelation = function(id, callback) {
    this.relationSchema.findOne({_id: id}, function(err, r) {
        if(err) 
            return console.log(err); 
        else
            callback(r);
    });
}

DAO.prototype.getAllRelations = function(callback) {
    this.relationSchema.find({}, function(err, relations) {
        if(err) 
            return console.log(err);
        else
            callback(relations);
    });
}

DAO.prototype.deleteRelation = function(id, callback) {
    this.relationSchema.remove({_id: id}, function(err) {
        if(err) 
            return console.log(err);
        else    
            callback('deleted');
    });
}

DAO.prototype.deleteAllRelations = function(callback) {
    this.relationSchema.remove({}, function(err) {
        if(err) 
            return console.log(err);
    });
}

module.exports = DAO;

// mongod --dbpath /data/db --smallfiles