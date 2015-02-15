/*
var DAO = require("../DAO");
var mongoose = require("mongoose");

describe("DAO unit tests", function() {
    var dao;
    var node;
    
    beforeEach(function() {
        dao = new DAO();
        dao.connect();
        dao.createSchemas();
    });
    afterEach(function() {
        dao.close();
        dao.remove(ModelObject);
    });
    
    it("create node", function() {
       runs(function() {
            dao.createNode(53.373656, -1.450626, 0);
       });
    });
   it("Get nodes", function() {
       runs(function() {
            dao.getAllNodes();
       });
    });
    /* it("Delete node", function() {
        runs(function() {
            node.remove(53.373656, -1.450626);
        });
    });
    it("Delete all nodes", function() {
        runs(function() {
            node.removeAll();
        });
    });
});
*/