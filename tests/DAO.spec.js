var DAO = require("../DAO");
var node = require("../model/node");
var tag = require("../model/tag");
var mongoose = require("mongoose");

describe("DAO unit tests", function() {
    var testingNode;
    var testingTag;
    var testingNodeForDeletion;
    var testingTagForDeletion;
    var dao = new DAO();
    dao.connect(process.env.IP, "vicinity");
    dao.createSchemas();
        
    // NODE TESTS
    
    it("create node", function() {
        runs(function() {
            var response;
            
            var node0 = new node(53.373656, -1.450626, 0);
            var node1 = new node(53.373656, -1.450626, 0);

            dao.createNode(node0, function(error, result, myNode) {
                 response = result;
                 testingNode = myNode;
            });
            
            dao.createNode(node1, function(error, result, myNode) {
                 testingNodeForDeletion = myNode;
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
    it("delete node", function() {
        runs(function() {
            var response;
            
            dao.deleteNode(testingNode._id, function(result) {
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
            dao.deleteAllNodes();
        });
    });
    
    // TAG TESTS
    
    it("create tag", function() {
        runs(function() {
            var response;
            
            var tag0 = new tag("name", "test");
            var tag1 = new tag("id", "129839213");

            dao.createTag(tag0, function(error, result, myTag) {
                 response = result;
                 testingTag = myTag;
            });
            
            dao.createTag(tag1, function(error, result, myTag) {
                 testingTagForDeletion = myTag;
            });
            
            waitsFor(function() {
                return response !== undefined;
            }, 'should return a status that is not undefined', 1000);
        
            runs(function() {
                expect(response).toEqual('added');
            }); 
        });
    });
    it("get tag", function() {
        runs(function() {
            var tag;
            dao.getTag(testingTag._id, function(newTag) {
                tag = newTag;
            });
            
            waitsFor(function() {
                return tag !== undefined;
            }, 'should return a status that is not undefined', 1000);
            
            runs(function() {
                expect(tag.key_).toEqual(testingTag.key);
                expect(tag.value_).toEqual(testingTag.value);
            });
        });
    });
    it("delete tag", function() {
        runs(function() {
            var response;
            
            dao.deleteTag(testingNodeForDeletion._id, function(result) {
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
     it("delete all tags", function() {
        runs(function() {
            dao.deleteAllTags();
        });
    });
    
    // WAY METHODS
    
    
    

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