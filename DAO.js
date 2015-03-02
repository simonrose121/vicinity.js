/*
Data Access Object is required to return JSON objects from a mongoDB instance 
and map them to the model objects
*/

var mongoose = require('mongoose');
var node = require('./model/node');
var tag = require('./model/tag');

function DAO() {
    var db;
    var nodeSchema;
    var tagSchema;
    var waySchema;
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
        node_: [nodeSchema],
        tags_: [tagSchema]
    });
    
    mongoose.model('nodeSchema', nodeSchema);
    this.nodeSchema = mongoose.model('nodeSchema');
    
    mongoose.model('tagSchema', tagSchema);
    this.tagSchema = mongoose.model('tagSchema');
    
    mongoose.model('waySchema', waySchema);
    this.waySchema = mongoose.model('waySchema');
};

// NODE METHODS

DAO.prototype.createNode = function(obj, callback) {
    var newNode = new this.nodeSchema(obj);
    newNode.save(function(err, obj) {
        if (err) 
            return console.error(err);
        console.log(newNode);
        callback(err, 'added', newNode);
    });
}


DAO.prototype.updateNode = function(obj, callback) {
    var newNode = new this.nodeSchema(obj);
    this.nodeSchema.update({_id: newNode._id}, newNode, {upsert: true}, function(err) {
        if(err)
            return console.error(err);
        callback(err, 'updated');
    });
}

DAO.prototype.getNode = function(id, callback) {
    this.nodeSchema.findOne({_id: id}, function(err, n) {
        if (err) 
            return console.log(err);
        callback(new node(n.lat_, n.lon_, n.alt_));
    });
}

DAO.prototype.deleteNode = function(id, callback) {
    this.nodeSchema.remove({_id: id}, function(err) {
        if(err) 
            return console.log(err);
        callback('deleted');
    })
} 

DAO.prototype.getAllNodes = function(callback) {
    this.nodeSchema.find(function(err, nodes) {
        if (err) 
            return console.log(err);
        callback(nodes);
    });
}

DAO.prototype.deleteAllNodes = function() {
    this.nodeSchema.remove({}, function(err, nodes) {
        if (err) 
            return console.log(err);
    });
}

// TAG METHODS

DAO.prototype.createTag = function(obj, callback) {
    var newTag = new this.tagSchema();
    newTag.key = obj.key_;
    newTag.value = obj.value_,
    newTag.save(function(err, newTag) {
        if (err) 
            return console.error(err);
        callback(err, 'added', newTag);
    });
}

DAO.prototype.getTag = function(id, callback) {
    this.tagSchema.findOne({_id: id}, function(err, t) {
        if (err) 
            return console.log(err);
        callback(new tag(t.key, t.value));
    });
}

DAO.prototype.deleteTag = function(id, callback) {
    this.tagSchema.remove({_id: id}, function(err) {
        if(err)
            return console.log(err);
        callback('deleted');
    });
}

DAO.prototype.deleteAllTags = function() {
    this.tagSchema.remove({}, function(err, tags) {
        if (err) 
            return console.log(err);
    });
}

// WAY METHODS

DAO.prototype.createWay = function(obj, callback) {
    var newWay = new this.waySchema();
    newWay.nodes = obj.nodes_;
    newWay.tags = obj.tags_;
    
    
}


// RELATION METHODS

module.exports = DAO;

// mongod --dbpath /data/db --smallfiles