var DAO = require("../DAO");
var mongoose = require("mongoose");

describe("DAO unit tests", function() {
    it("If singleton is instantiated correctly", function() {
        runs(function(){
            var DAO1 = DAO.getInstance();
            var DAO2 = DAO.getInstance();
            expect(DAO1).toEqual(DAO2);
        });
    });
    it("Connection to database", function() {
        runs(function(){
            DAO.getInstance().connect();
            DAO.getInstance().createSchemas();
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
                //console.log(node);
            });
       });
    });
});