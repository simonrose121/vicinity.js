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
    var nodeSchema = mongoose.Schema({
        lat_: Number,
        lon_: Number,
        alt_: Number
    });
    
    var tagSchema = mongoose.Schema({
        key_: Object,
        value_: Object
    });
    
    var waySchema = mongoose.Schema({
        nodes_: [nodeSchema],
        tags_: [tagSchema]
    });
    
    var relationSchema = mongoose.Schema({
        nodes_: [nodeSchema],
        tags_: [tagSchema],
        ways_: [waySchema],
        relations_: [relationSchema]
    });
    
    this.db.model('nodeSchema', nodeSchema);
    this.nodeSchema = this.db.model('nodeSchema');
    
    this.db.model('tagSchema', tagSchema);
    this.tagSchema = this.db.model('tagSchema');
    
    this.db.model('waySchema', waySchema);
    this.waySchema = this.db.model('waySchema');
    
    this.db.model('relationSchema', relationSchema);
    this.relationSchema = this.db.model('relationSchema');
};

// NODE METHODS

DAO.prototype.createNode = function(obj, callback) {
    var newNode = new this.nodeSchema(obj);
    newNode.save(function(err) {
        console.log("saving node...");
        if (err) return console.log(err);
        callback('added', newNode);
    });
}


DAO.prototype.updateNode = function(obj, callback) {
    var newNode = new this.nodeSchema(obj);
    this.nodeSchema.update({_id: newNode._id}, newNode, {upsert: true}, function(err) {
        if(err) return console.error(err);
        callback('updated');
    });
}

DAO.prototype.getNode = function(id, callback) {
    this.nodeSchema.findOne({_id: id}, function(err, n) {
        if (err) return console.log(err);
        callback(n);
    });
}

DAO.prototype.getAllNodes = function(callback) {
    this.nodeSchema.find(function(err, nodes) {
        if (err) 
            return console.log(err);
        callback(nodes);
    });
}

DAO.prototype.deleteNode = function(id, callback) {
    this.nodeSchema.remove({_id: id}, function(err) {
        if(err) return console.log(err);
        callback('deleted');
    });
} 

DAO.prototype.deleteAllNodes = function() {
    this.nodeSchema.remove(function(err) {
        if (err) return console.log(err);
    });
}

// TAG METHODS

//TODO: Possibly remove this as tags should only exist inside other elements

DAO.prototype.createTag = function(obj, callback) {
    var newTag = new this.tagSchema(obj);
    newTag.save(function(err, newTag) {
        if (err) return console.error(err);
        callback('added', newTag);
    });
}

DAO.prototype.updateTag = function(obj, callback) {
    var newTag = new this.tagSchema(obj);
    this.tagSchema.update({_id: newTag._id}, newTag, {upsert: true}, function(err) {
        if(err) return console.error(err);
        callback('updated');
    });
}

DAO.prototype.getTag = function(id, callback) {
    this.tagSchema.findOne({_id: id}, function(err, t) {
        if (err) return console.log(err);
        callback(t);
    });
}

DAO.prototype.deleteTag = function(id, callback) {
    this.tagSchema.remove({_id: id}, function(err) {
        if(err) return console.log(err);
        callback('deleted');
    });
}

// WAY METHODS

DAO.prototype.createWay = function(obj, callback) {
    var newWay = new this.waySchema();
    newWay.nodes_ = obj.nodes_;
    newWay.tags_ = obj.tags_;
    newWay.save(function(err, newWay) {
        if (err) return console.error(err);
        callback('added', newWay);
    });
}

DAO.prototype.getWay = function(id, callback) {
    this.waySchema.findOne({_id: id}, function(err, w) {
        if(err) return console.log(err);
        callback(w);
    });
}

DAO.prototype.getAllWays = function(callback) {
    this.waySchema.find({}, function(err, ways) {
        if(err) return console.log(err);
        callback(ways);
    });
}

DAO.prototype.deleteWay = function(id, callback) {
    this.waySchema.remove({_id: id}, function(err) {
        if(err) return console.log(err);
        callback('deleted');
    });
}

DAO.prototype.deleteAllWays = function(callback) {
    this.waySchema.remove({}, function(err) {
        if (err) return console.log(err);
    });
}


// RELATION METHODS

DAO.prototype.createRelation = function(obj, callback) {
    var newRelation = new this.relationSchema();
    newRelation.nodes_ = obj.nodes_;
    newRelation.tags_ = obj.tags_;
    newRelation.ways_ = obj.ways_;
    newRelation.relations_ = obj.relations_;
    newRelation.save(function(err, newRelation) {
        if(err) return console.log(err);
        callback('added', newRelation);
    });
}

DAO.prototype.getRelation = function(id, callback) {
    this.relationSchema.findOne({_id: id}, function(err, r) {
        if(err) return console.log(err); 
        callback(r);
    });
}

DAO.prototype.getAllRelations = function(callback) {
    this.relationSchema.find({}, function(err, relations) {
        if(err) return console.log(err);
        callback(relations);
    });
}

DAO.prototype.deleteRelation = function(id, callback) {
    this.relationSchema.remove({_id: id}, function(err) {
        if(err) return console.log(err);
        callback('deleted');
    });
}

DAO.prototype.deleteAllRelations = function(callback) {
    this.relationSchema.remove({}, function(err) {
        if(err) return console.log(err);
    });
}

module.exports = DAO;

// mongod --dbpath /data/db --smallfiles