var DAO = require("../DAO");
var node = require("../model/node");
var mongoose = require("mongoose");

describe("DAO unit tests", function() {
    var dao = new DAO();
    dao.connect(process.env.IP, "vicinity");
    dao.createSchemas();
        
    it("create node", function() {
       runs(function() {
            var response;
            var node0 = new node(53.373656, -1.450626, 0);

            dao.createNode(node0, function(error, result) {
                 response = result;
            });
            
            waitsFor(function() {
                return response !== undefined;
            }, 'should return a status that is not undefined', 1000);
        
            runs(function() {
                expect(response).toEqual('added');
            });
       });
    });
    it("get all nodes", function() {
       runs(function() {
            var nodes = dao.getNodes();
            console.log(nodes);
       });
    });
    it("delete all nodes", function() {
        runs(function() {
            dao.removeAllNodes();
        });
    });

    //TODO: figure where this needs to be called - in own test or after each test
    //dao.close();
});