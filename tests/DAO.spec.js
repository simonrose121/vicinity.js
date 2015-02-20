var DAO = require("../DAO");
var node = require("../model/node");
var mongoose = require("mongoose");

describe("DAO unit tests", function() {
    var testingNode;
    var dao = new DAO();
    dao.connect(process.env.IP, "vicinity");
    dao.createSchemas();
        
    it("create node", function() {
       runs(function() {
            var response;
            
            var node0 = new node(53.373656, -1.450626, 0);

            dao.createNode(node0, function(error, result, myNode) {
                 response = result;
                 testingNode = myNode;
            });
            
            waitsFor(function() {
                return response !== undefined;
            }, 'should return a status that is not undefined', 1000);
        
            runs(function() {
                expect(response).toEqual('added');
            });
       });
    });
    it("get node", function() {
        runs(function() {
            var node;
            dao.getNode(testingNode._id, function(newNode) {
                node = newNode;
            });
            
            waitsFor(function() {
                return node !== undefined;
            }, 'should return a status that is not undefined', 1000);
            
            runs(function() {
                expect(node.lat_).toEqual(testingNode.lat);
                expect(node.lon_).toEqual(testingNode.lon);
            });
        });
    });
    it("get all nodes", function() {
       runs(function() {
            var nodes;
            dao.getAllNodes(function(allNodes) {
                nodes = allNodes;
            });
            
            waitsFor(function() {
                return nodes !== undefined;
            }, 'should return a status that is not undefined', 1000);
            
            runs(function() {
                expect(nodes[0].lat_).toEqual(testingNode.lat);
                expect(nodes[0].lon_).toEqual(testingNode.lon);
            });
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