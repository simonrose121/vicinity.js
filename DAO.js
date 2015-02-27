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
        lat: Number,
        lon: Number,
        alt: Number
    });
    
    var tagSchema = mongoose.Schema({
        key: Object,
        value: Object
    });
    
    var waySchema = mongoose.Schema({
        
    });
    
    mongoose.model('nodeSchema', nodeSchema);
    this.nodeSchema = mongoose.model('nodeSchema');
    
    mongoose.model('tagSchema', tagSchema);
    this.tagSchema = mongoose.model('tagSchema');
};

// NODE METHODS

DAO.prototype.createNode = function(obj, callback) {
    var newNode = new this.nodeSchema();
    newNode.lat = obj.lat_;
    newNode.lon = obj.lon_,
    newNode.alt = obj.alt_;
    newNode.save(function(err, newNode) {
        if (err) 
            return console.error(err);
        console.log(newNode);
        callback(err, 'added', newNode);
    });
}

DAO.prototype.getNode = function(id, callback) {
    this.nodeSchema.findOne({_id: id}, function(err, n) {
        if (err) 
            return console.log(err);
        callback(new node(n.lat, n.lon, n.alt));
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
        var allNodes = [];
        for(var i = 0; i < nodes.length; i++) {
            allNodes.push(new node(nodes[i].lat, nodes[i].lon, nodes[i].alt));
        }
        callback(allNodes);
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
        console.log(newTag);
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

DAO.prototype.createWay = function(obj) {
    
}


// RELATION METHODS

module.exports = DAO;

// mongod --dbpath /data/db --smallfiles