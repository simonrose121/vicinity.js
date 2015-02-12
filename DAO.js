var mongoose = require('mongoose');

var DAO = (function() {
    var instance;
 
    function init() {
        // singleton
        return {
            connect: function() {
                mongoose.connect('mongodb://localhost/vicinity');
                var db = mongoose.connection;
                db.on('error', console.error.bind(console, 'connection error:'));
                db.once('open', function(callback) {
                    // set up schemas
                    var nodeSchema = mongoose.Schema({
                        lat: Number,
                        lon: Number,
                        alt: Number
                    })
                    
                    // create model
                    var Node = mongoose.model('node', nodeSchema);
                });
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