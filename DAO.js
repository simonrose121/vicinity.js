var mongoose = require('mongoose');

var DAO = (function() {
    var instance;
 
    function init() {
        //singleton
        return {
            connect: function() {
                mongoose.connect('mongodb://localhost/vicinity');
                var db = mongoose.connection;
                db.on('error', console.error.bind(console, 'connection error:'));
                db.once('open', function(callback) {
                    return true;
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

// define schema

// methods to get data

module.exports = DAO;