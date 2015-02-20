/*
Data Access Object is required to return JSON objects from a mongoDB instance 
and map them to the model objects
*/

var mongoose = require('mongoose');
var node = require('./model/node');

function DAO() {
    var db;
    var nodeSchema;
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
    var nodeSchema = mongoose.Schema({
        lat: Number,
        lon: Number,
        alt: Number
    });
    
    mongoose.model('nodeSchema', nodeSchema);
    this.nodeSchema = mongoose.model('nodeSchema');
};

// NODE METHODS

DAO.prototype.createNode = function(obj, callback) {
    var newNode = new this.nodeSchema();
    newNode.lat = obj.lat_;
    newNode.lon = obj.lon_,
    newNode.alt = obj.alt_;
    newNode.save(function(err, newNode) {
        if (err) return console.error(err);
        callback(err, 'added', newNode);
    });
}

DAO.prototype.getNode = function(id, callback) {
    this.nodeSchema.findOne({_id: id}, function(err, n) {
        if (err) return console.log(err);
        callback(new node(n.lat, n.lon, n.alt));
    });
}

DAO.prototype.getAllNodes = function(callback) {
    this.nodeSchema.find(function(err, nodes) {
        if (err) return console.log(err);
        var allNodes = [];
        for(var i = 0; i < nodes.length; i++) {
            allNodes.push(new node(nodes[i].lat, nodes[i].lon, nodes[i].alt));
        }
        callback(allNodes);
    });
}

DAO.prototype.removeAllNodes = function() {
    this.nodeSchema.remove({}, function(err, nodes) {
        if (err) return console.log(err);
    });
}

// WAY METHODS

DAO.prototype.createWay = function(obj) {
    
}


// RELATION METHODS

module.exports = DAO;

// mongod --dbpath /data/db --smallfiles