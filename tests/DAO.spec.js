var DAO = require("../DAO");
var mongoose = require("mongoose");

describe("DAO unit tests", function() {
    it("Connection to database", function() {
        runs(function(){
            var newDOA = new DAO();
            newDOA.connect();
        });
    });
    it("Connection to database", function() {
        runs(function(){
            var newDOA = new DAO();
            newDOA.createSchemas();
        });
    });
    it("Save node", function() {
       runs(function() {
            var node = mongoose.model("node");
            expect(node).toBeDefined();
            node.create(53.373656, -1.450626, 0);
       });
    });
    it("Get nodes", function() {
       runs(function() {
            var node = mongoose.model("node");
            expect(node).toBeDefined();
            node.find(function(err, node) {
                if (err) return console.error(err);
                console.log(node);
            });
       });
    });
    it("Delete node", function() {
        runs(function() {
            var node = mongoose.model("node");
            node.remove(53.373656, -1.450626);
        });
    });
});