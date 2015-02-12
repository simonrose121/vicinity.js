var mongoose = require('mongoose');

function DAO() {};
 
DAO.prototype.connect = function() {
    mongoose.connect('mongodb://localhost/vicinity');
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
};
            
DAO.prototype.close = function() {
    mongoose.connection.close();
}
            
DAO.prototype.createSchemas = function() {
    // create schemas
    var nodeSchema = mongoose.Schema({
        lat: Number,
        lon: Number,
        alt: Number
    });
    
    nodeSchema.statics.create = function(lat, lon, alt) {
        var newNode = new this();
        newNode.lat = lat;
        newNode.lon = lon,
        newNode.alt = alt;
        newNode.save(function(err, newNode) {
            if (err) return console.error(err);
            //console.dir(newNode);
        });
    }
    
    nodeSchema.statics.delete = function(id) {
        this.find({lat: lat, lon: lon}).remove().exec();
    }
    
    // create model
    mongoose.model('node', nodeSchema);
};

module.exports = DAO;

// mongod --dbpath /data/db --smallfiles