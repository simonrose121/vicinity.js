var DAO = require("../DAO");
var node = require("../objects/node");
var tag = require("../objects/tag");
var way = require("../objects/way");
var relation = require("../objects/relation");

var mongoose = require("mongoose");

describe("DAO unit tests", function() {
    var testingNode;
    var testingTag;
    var testingWay;
    var testingRelation;
    var testingNodeForDeletion;
    var testingTagForDeletion;
    var testingWayForDeletion;
    var testingRelationForDeletion;
    var dao = new DAO();
    dao.connect(process.env.IP, "vicinity");
    dao.createSchemas();
        
    // NODE TESTS
    
    it("create node", function() {
        runs(function() {
            dao.deleteAllNodes();
            
            var node0 = new node(53.373656, -1.450626);
            var node1 = new node(321, 32);

            var response;
            dao.createNode(node0, function(result, myNode) {
                 response = result;
                 testingNode = myNode;
            });
            
            dao.createNode(node1, function(result, myNode) {
                 testingNodeForDeletion = myNode;
            });
            
            //TODO: possibly remove waits for
            waitsFor(function() {
                return response !== undefined;
            }, 'should return a status that is not undefined', 1000);
        
            runs(function() {
                expect(response).toEqual('added');
            });
       });
    });
    it("update node", function() {
        runs(function() {
            var id = testingNode._id;
            testingNode = new node(10, 20);
            
            // keep id the same
            testingNode._id = id;
            
            var response;
            dao.updateNode(testingNode, function(result) {
                response = result;
            });
            
            waitsFor(function() {
                return response !== undefined;
            }, 'should return a status that is not undefined', 1000);
            
            runs(function() {
                expect(response).toEqual('updated');
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
                expect(node.lat_).toEqual(testingNode.lat_);
                expect(node.lon_).toEqual(testingNode.lon_);
            });
        });
    });
    it("delete node", function() {
        runs(function() {
            var response;
            
            dao.deleteNode(testingNodeForDeletion._id, function(result) {
                response = result;
            });
            
            waitsFor(function() {
                return response !== undefined;
            }, 'should return a status that is not undefined', 1000);
            
            runs(function() {
                expect(response).toEqual('deleted');
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
            }, 'should return a status that is not undefined', 3000);

            runs(function() {
                expect(nodes.length).toEqual(1);
                expect(nodes[0].lat_).toEqual(testingNode.lat_);
                expect(nodes[0].lon_).toEqual(testingNode.lon_);
            });
       });
    });
    it("delete all nodes", function() {
        runs(function() {
            dao.deleteAllNodes();
            
            var nodes;
            dao.getAllNodes(function(allNodes) {
                nodes = allNodes;
            });
            
            waitsFor(function() {
                return nodes !== undefined;
            }, 'should return a status that is not undefined', 1000);
            
            runs(function() {
                //check nodes are empty
                expect(nodes).toEqual([]);
            });
        });
    });
    
    // WAY METHODS
    
    it("create ways", function() {
        runs(function() {
            var node0 = new node(53.373656, -1.450626);
            var node1 = new node(321, 32);
            var tag0 = new tag("name", "test");
            var tag1 = new tag("node_id", "129839213");
            
            var way0 = new way();
            way0.addNode(node0);
            way0.addNode(node1);
            way0.addTag(tag0);
            way0.addTag(tag1);
            
            var response;
            dao.createWay(way0, function(result, myWay) {
                 response = result;
                 testingWay = myWay;
            });
            
            waitsFor(function() {
                return response !== undefined;
            }, 'should return a status that is not undefined', 1000);
        
            runs(function() {
                expect(response).toEqual('added');
                expect(testingWay.nodes_[0].lon_).toEqual(node0.lon_);
                expect(testingWay.tags_[0].value_).toEqual(tag0.value_);
            });
        });
    });
    it("get way", function() {
        runs(function() {
            var way;
            
            dao.getWay(testingWay._id, function(newWay) {
                way = newWay;
            });
            
            waitsFor(function() {
                return way !== undefined;
            }, 'should return a status that is not undefined', 1000);
            
            runs(function() {
                expect(way.nodes_[0].lat_).toEqual(testingWay.nodes_[0].lat_);
                expect(way.tags_[0].value_).toEqual(testingWay.tags_[0].value_);
            });
        });
    });
    it("delete way", function() {
        runs(function() {
            var response;
            
            dao.deleteWay(testingWay._id, function(result) {
                response = result;
            })
            
            waitsFor(function() {
                return response !== undefined;
            }, 'should return a status that is not undefined', 1000);
            
            runs(function() {
                expect(response).toEqual('deleted');
            });  
        });
    });
    
    // RELATION METHODS
    it("create relation", function() {
        runs(function() {
            var node0 = new node(53.373656, -1.450626);
            var node1 = new node(321, 32);
            var tag0 = new tag("name", "test");
            var tag1 = new tag("node_id", "129839213");
            
            var relation0 = new relation();
            relation0.addNode(node0);
            relation0.addNode(node1);
            relation0.addTag(tag0);
            relation0.addTag(tag1);
            
            var response;
            dao.createRelation(relation0, function(result, myRelation) {
                 response = result;
                 testingRelation = myRelation;
            });
            
            waitsFor(function() {
                return response !== undefined;
            }, 'should return a status that is not undefined', 1000);
        
            runs(function() {
                expect(response).toEqual('added');
                expect(testingRelation.nodes_[0].lon_).toEqual(node0.lon_);
                expect(testingRelation.tags_[0].value_).toEqual(tag0.value_);
            });
        });
    });
    it("get relation", function() {
        runs(function() {
            var relation;
            
            dao.getRelation(testingRelation._id, function(newRelation) {
                relation = newRelation;
            });
            
            waitsFor(function() {
                return relation !== undefined;
            }, 'should return a status that is not undefined', 1000);
            
            runs(function() {
                expect(relation.nodes_[0].lat_).toEqual(testingRelation.nodes_[0].lat_);
                expect(relation.tags_[0].value_).toEqual(testingRelation.tags_[0].value_);
            });
        });
    });
    it("delete relation", function() {
        runs(function() {
            var response;
            
            dao.deleteRelation(testingRelation._id, function(result) {
                response = result;
            })
            
            waitsFor(function() {
                return response !== undefined;
            }, 'should return a status that is not undefined', 1000);
            
            runs(function() {
                expect(response).toEqual('deleted');
            });  
        });
    });
    

    // Override the finishCallback so we can add some cleanup methods.
    // This is run after all tests have been completed.
    // Reference: https://github.com/mhevery/jasmine-node/issues/241
    var _finishCallback = jasmine.Runner.prototype.finishCallback;
    jasmine.Runner.prototype.finishCallback = function () {
        // Run the old finishCallback
        _finishCallback.bind(this)();
    
        // cleanup db
        dao.close();
    };
});