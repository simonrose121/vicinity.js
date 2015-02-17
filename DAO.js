/*
Data Access Object is required to return JSON objects from a mongoDB instance 
and map them to the model objects
*/

var mongoose = require('mongoose');

function DAO() {
    var db;
    var node;
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
    
    mongoose.model('node', nodeSchema);
    this.node = mongoose.model("node");
};

DAO.prototype.createNode = function(obj, callback) {
    var newNode = new this.node();
    newNode.lat = obj.lat_;
    newNode.lon = obj.lon_,
    newNode.alt = obj.alt_;
    newNode.save(function(err, newNode) {
        if (err) return console.error(err);
        callback(err, 'added');
    });
}

DAO.prototype.getNode = function(id) {
    
}

DAO.prototype.getNodes = function() {
    this.node.find(function(err, nodes) {
        if (err) return console.log(err);
        console.log(nodes);
    });
}

DAO.prototype.removeAllNodes = function() {
    this.node.remove({}, function(err, nodes) {
        if (err) return console.log(err);
    });
}

module.exports = DAO;

// mongod --dbpath /data/db --smallfiles