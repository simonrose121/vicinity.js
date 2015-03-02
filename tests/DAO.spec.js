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
            var node1 = new node(321, 32, 0);

            dao.createNode(node0, function(result, myNode) {
                 response = result;
                 testingNode = myNode;
            });
            
            dao.createNode(node1, function(result, myNode) {
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
    it("update node", function() {
        runs(function() {
            var response;
            
            var id = testingNode._id;
            testingNode = new node(10, 20, 0);
            
            // keep id the same
            testingNode._id = id;

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
                console.log(nodes);
                
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
    
    // TAG TESTS
    
    it("create tag", function() {
        runs(function() {
            var response;
            
            var tag0 = new tag("name", "test");
            var tag1 = new tag("id", "129839213");

            dao.createTag(tag0, function(result, myTag) {
                 response = result;
                 testingTag = myTag;
            });
            
            dao.createTag(tag1, function(result, myTag) {
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
    it("update tag", function() {
        runs(function() {
            var response;
            
            var id = testingTag._id;
            testingTag = new tag("name", "other name");
            
            // keep id the same
            testingTag._id = id;

            dao.updateTag(testingTag, function(result) {
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
    it("get tag", function() {
        runs(function() {
            var tag;

            dao.getTag(testingTag._id, function(newTag) {
                tag = newTag;
                console.log(tag);
            });
            
            waitsFor(function() {
                return tag !== undefined;
            }, 'should return a status that is not undefined', 1000);
            
            runs(function() {
                expect(tag.key_).toEqual(testingTag.key_);
                expect(tag.value_).toEqual(testingTag.value_);
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
            
            var tags;
            dao.getAllNodes(function(allTags) {
                tags = allTags;
            });
            
            waitsFor(function() {
                return tags !== undefined;
            }, 'should return a status that is not undefined', 1000);
            
            runs(function() {
                //check nodes are empty
                expect(tags).toEqual([]);
            });
        });
    });
    
    // WAY METHODS
    
    it("create ways", function() {
        runs(function() {
             
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