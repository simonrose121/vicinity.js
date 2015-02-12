var mongoose = require('mongoose');

var DAO = (function() {
    var instance;
    var db;
 
    function init() {
        // singleton
        return {
            connect: function() {
                mongoose.connect('mongodb://localhost/vicinity');
                db = mongoose.connection;
                db.on('error', console.error.bind(console, 'connection error:'));
            },
            close: function() {
                mongoose.connection.close();
            },
            createSchemas: function() {
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
                        console.dir(newNode);
                    });
                }
                
                // create model
                mongoose.model('node', nodeSchema);
            }
        }
    }
 
    return {
        getInstance: function () {
            if (!instance) {
                instance = init();
            }
            return instance;
        }
    };
})();

module.exports = DAO;

// mongod --dbpath /data/db --smallfiles