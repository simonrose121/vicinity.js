/*
Data Access Object is required to return JSON objects from a mongoDB instance 
and map them to the model objects
*/

var mongoose = require('mongoose');

function DAO() {
    var db;
};
 
DAO.prototype.connect = function(port, dbname) {
    mongoose.connect('mongodb://' + port + '/' + dbname);
    db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
};
            
DAO.prototype.close = function() {
    mongoose.connection.close();
    db.close();
}
            
DAO.prototype.createSchemas = function() {
    // create schemas
    var nodeSchema = mongoose.Schema({
        lat: Number,
        lon: Number,
        alt: Number
    });
    
    mongoose.model('node', nodeSchema);
    
    /*nodeSchema.statics.getAllNodes = function() {
        this.find(function(err, node) {
            if (err) return console.error(err);
        });
    }
    
    nodeSchema.statics.delete = function(id) {
        this.find({_id: id}).remove().exec();
    }
    
    nodeSchema.statics.removeAll = function() {
        mongoose.connection.db.dropCollection('node', function(err, result) {

        });
    }*/
   
};

DAO.prototype.createNode = function(node) {
    var node = mongoose.model("node");
    var newNode = new node();
    newNode.lat = lat;
    newNode.lon = lon,
    newNode.alt = alt;
    newNode.save(function(err, newNode) {
        if (err) return console.error(err);
    });
}

module.exports = DAO;

// mongod --dbpath /data/db --smallfiles