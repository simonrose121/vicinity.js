var mongoose = require('mongoose');

var DAO = (function() {
    var instance;
 
    /*function createInstance() {
        var object = 
        return object;
    }*/
 
    return {
        getInstance: function () {
            if (!instance) {
                instance = new DAO();
            }
            return instance;
        },
        
        /*connect: function() {
            mongoose.connect('mongodb://localhost/vicinity');
            var db = mongoose.connection;
            db.on('error', console.error.bind(console, 'connection error:'));
            db.once('open', function(callback) {
                return true;
            });
        }*/
    };
})();

// define schema

// methods to get data

module.exports = DAO;