var DAO = require("../../DAO");
var node = require("../../model/node");
var tag = require("../../model/tag");
var way = require("../../model/way");
var relation = require("../../model/relation");

describe("DAO unit tests", function() {
    // objects persistent between tests for testing removal, etc.
    var testingNode;
    var testingTag;
    var testingWay;
    var testingRelation;
    var testingNodeForDeletion;
    var testingWayForDeletion;
    var testingRelationForDeletion;
    
    var dao = new DAO();
    dao.connect(process.env.IP, "vicinity");
    dao.createSchemas();
        
    // NODE TESTS
    
    it("create node", function() {
        runs(function() {
            dao.deleteAllNodes(function(result) {
                
            });
            
            var node0 = new node(40.689245, -74.044489);
            var node1 = new node(48.860593, 2.337698);

            var response;
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
                expect(testingNode.lat_).toEqual(node0.lat_);
                expect(testingNode.lon_).toEqual(node0.lon_);
            });
       });
    });
    it("update node", function() {
        runs(function() {
            var id = testingNode._id;
            var updatedNode = new node(53.378491, -1.472634);
            
            // keep id the same
            updatedNode._id = id;
            
            var response;
            dao.updateNode(updatedNode, function(result, node) {
                response = result;
                testingNode = node;
            });
            
            waitsFor(function() {
                return response !== undefined;
            }, 'should return a status that is not undefined', 1000);
            
            runs(function() {
                expect(response).toEqual('updated');
                expect(testingNode.lat_).toEqual(updatedNode.lat_);
                expect(testingNode.lon_).toEqual(updatedNode.lon_);
            });
        }); 
    });
    it("get node", function() {
        runs(function() {
            var node;
            var response;
            dao.getNode(testingNode._id, function(result, newNode) {
                response = result;
                node = newNode;
            });
            
            waitsFor(function() {
                return response !== undefined;
            }, 'should return a status that is not undefined', 1000);
            
            runs(function() {
                expect(response).toEqual('node returned');
                expect(node.lat_).toEqual(testingNode.lat_);
                expect(node.lon_).toEqual(testingNode.lon_);
            });
        });
    });
    it("added tag to node", function() {
        runs(function() {
            var tag0 = new tag("oneway", "yes");
            
            var response;
            dao.addTagToNode(tag0, testingNode._id, function(result, node, tag) {
                response = result;
                testingNode = node;
                testingTag = tag;
            });
            
            waitsFor(function() {
                return response !== undefined; 
            }, 'should return a status that is not undefined', 1000);
            
            runs(function() {
                expect(response).toEqual('added tag');
                expect(testingNode.tags_[testingNode.tags_.length-1].key_).toEqual(tag0.key_);
            });
        });
    });
    it("remove tag from node", function() {
        runs(function() {
            var response;
            dao.removeTagFromNode(testingTag, testingNode._id, function(result, node) {
                response = result;
                testingNode = node;
            });
             
            waitsFor(function() {
                return response !== undefined; 
            }, 'should return a status that is not undefined', 1000);
            
            runs(function() {
                expect(response).toEqual('removed tag');
                expect(testingNode.tags_[testingNode.tags_.length-1]).toBeUndefined();
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
            var response;
            dao.getAllNodes(function(result, allNodes) {
                response = result;
                nodes = allNodes;
            });
            
            waitsFor(function() {
                return response !== undefined;
            }, 'should return a status that is not undefined', 3000);

            runs(function() {
                expect(response).toEqual('nodes returned');
                expect(nodes.length).toEqual(1);
                expect(nodes[nodes.length-1].lat_).toEqual(testingNode.lat_);
                expect(nodes[nodes.length-1].lon_).toEqual(testingNode.lon_);
            });
       });
    });
    
    // WAY METHODS
    
    it("create ways", function() {
        runs(function() {
            var tag0 = new tag("name", "test");
            var tag1 = new tag("highway", "residential");
            
            var way0 = new way();
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
                expect(testingWay.tags_[testingWay.tags_.length-2].value_).toEqual(tag0.value_);
            });
        });
    });
    it("get way", function() {
        runs(function() {
            var way;
            var response;
            dao.getWay(testingWay._id, function(result, newWay) {
                response = result;
                way = newWay;
            });
            
            waitsFor(function() {
                return response !== undefined;
            }, 'should return a status that is not undefined', 1000);
            
            runs(function() {
                expect(response).toEqual('returned way');
                expect(way.tags_[way.tags_.length-1].value_).toEqual(testingWay.tags_[testingWay.tags_.length-1].value_);
            });
        });
    });
    it("add node to way", function() {
        runs(function() {
            var response;
            dao.addNodeToWay(testingNode._id, testingWay.id, function(result, way) {
                response = result;
                testingWay = way;
            });
        
            waitsFor(function() {
                return response !== undefined; 
            }, 'should return a status that is not undefined', 1000);
            
            runs(function() {
                expect(response).toEqual('added node');
                expect(testingWay.nodes_[testingWay.nodes_.length-1]).toEqual(testingNode._id); 
            });
        });
    });
    it("get nodes in way", function() {
        runs(function() {
            var response;
            var nodesInWay;
            dao.getNodesInWay(testingWay.id, function(result, nodes) {
                response = result;
                nodesInWay = nodes;
            });
            
            waitsFor(function() {
                return response !== undefined; 
            }, 'should return a status that is not undefined', 1000);
            
            runs(function() {
                expect(response).toEqual('found nodes');
                expect(nodesInWay[nodesInWay.length-1].lat_).toEqual(testingNode.lat_); 
                expect(nodesInWay[nodesInWay.length-1].lon_).toEqual(testingNode.lon_); 
            });
        });
    });
    it("remove node from way", function() {
        runs(function() {
            var response; 
            dao.removeNodeFromWay(testingNode._id, testingWay._id, function(result, way) {
                response = result;
                testingWay = way;
            });
            
            waitsFor(function() {
                return response !== undefined; 
            }, 'should return a status that is not undefined', 1000);
            
            runs(function() {
                expect(response).toEqual('removed node');
                expect(testingWay.nodes_[testingWay.nodes_.length-1]).toBeUndefined();
            });
        });      
    });
    it("added tag to way", function() {
        runs(function() {
            var tag0 = new tag("oneway", "yes");
            
            var response;
            dao.addTagToWay(tag0, testingWay._id, function(result, way, tag) {
                response = result;
                testingWay = way;
                testingTag = tag;
            });
            
            waitsFor(function() {
                return response !== undefined; 
            }, 'should return a status that is not undefined', 1000);
            
            runs(function() {
                expect(response).toEqual('added tag');
                expect(testingWay.tags_[testingWay.tags_.length-1].key_).toEqual(tag0.key_);
            });
        });
    });
    it("remove tag from way", function() {
        runs(function() {
            var response;
            dao.removeTagFromWay(testingTag, testingWay._id, function(result, way) {
                response = result;
                testingWay = way;
            });
             
            waitsFor(function() {
                return response !== undefined; 
            }, 'should return a status that is not undefined', 1000);
            
            runs(function() {
                expect(response).toEqual('removed tag');
                expect(testingWay.tags_[2]).toBeUndefined();
            });
        });
    });
    
    // RELATION METHODS
    it("create relation", function() {
        runs(function() {
            var tag0 = new tag("name", "test");
            var tag1 = new tag("highway", "residential");
            
            var relation0 = new relation();
            relation0.addTag(tag0);
            relation0.addTag(tag1);
            
            var relation1 = new relation();
            
            var response;
            dao.createRelation(relation0, function(result, relation) {
                 response = result;
                 testingRelation = relation;
            });
            
            dao.createRelation(relation1, function(result, relation) {
                testingRelationForDeletion = relation;
            });
            
            waitsFor(function() {
                return response !== undefined;
            }, 'should return a status that is not undefined', 1000);
        
            runs(function() {
                expect(response).toEqual('added');
                expect(testingRelation.tags_[testingRelation.tags_.length-1].value_).toEqual(tag1.value_);
            });
        });
    });
    it("get relation", function() {
        runs(function() {
            var relation;
            var response;
            dao.getRelation(testingRelation._id, function(result, newRelation) {
                response = result;
                relation = newRelation;
            });
            
            waitsFor(function() {
                return relation !== undefined;
            }, 'should return a status that is not undefined', 1000);
            
            runs(function() {
                expect(response).toEqual('return relation');
                expect(relation.tags_[relation.tags_.length-1].value_).toEqual(testingRelation.tags_[testingRelation.tags_.length-1].value_);
            });
        });
    });
    it("add node to relation", function() {
        runs(function() {
            var response;
            dao.addNodeToRelation(testingNode._id, testingRelation._id, function(result, relation) {
                response = result;
                testingRelation = relation;
            });
            
            waitsFor(function() {
                return response !== undefined;
            }, 'should return a status that is not undefined', 1000);
            
            runs(function() {
                expect(response).toEqual('added node');
                expect(testingRelation.nodes_[testingRelation.nodes_.length-1]).toEqual(testingNode._id);
            });
        });
    });
    it("get nodes in relation", function() {
        runs(function() {
            var response;
            var nodesInRelation;
            dao.getNodesInRelation(testingRelation._id, function(result, nodes) {
                response = result;
                nodesInRelation = nodes;
            });
            
            waitsFor(function() {
                return response !== undefined; 
            }, 'should return a status that is not undefined', 1000);
            
            runs(function() {
                expect(response).toEqual('found nodes');
                expect(nodesInRelation[nodesInRelation.length-1].lat_).toEqual(testingNode.lat_); 
                expect(nodesInRelation[nodesInRelation.length-1].lon_).toEqual(testingNode.lon_); 
            });
        });
    });
    it("remove node from relation", function() {
        runs(function() {
            var response;
            dao.removeNodeFromRelation(testingNode._id, testingRelation._id, function(result, relation) {
                 response = result;
                 testingRelation = relation;
            });
            
            waitsFor(function() {
                return response !== undefined;
            }, 'should return a status that is not undefined', 1000);
            
            runs(function() {
                expect(response).toEqual('removed node');
                expect(testingRelation.nodes_[testingRelation.nodes_.length-1]).toBeUndefined();
            });
        });
    });
    it("added tag to relation", function() {
        runs(function() {
            var tag0 = new tag("oneway", "yes");
            
            var response;
            dao.addTagToRelation(tag0, testingRelation._id, function(result, relation, tag) {
                response = result;
                testingRelation = relation;
                testingTag = tag;
            });
            
            waitsFor(function() {
                return response !== undefined; 
            }, 'should return a status that is not undefined', 1000);
            
            runs(function() {
                expect(response).toEqual('added tag');
                expect(testingRelation.tags_[testingRelation.tags_.length-1].key_).toEqual(tag0.key_);
            });
        });
    });
    it("remove tag from relation", function() {
        runs(function() {
            var response;
            dao.removeTagFromRelation(testingTag, testingRelation._id, function(result, relation) {
                response = result;
                testingRelation = relation;
            });
             
            waitsFor(function() {
                return response !== undefined; 
            }, 'should return a status that is not undefined', 1000);
            
            runs(function() {
                expect(response).toEqual('removed tag');
                expect(testingRelation.tags_[testingRelation.tags_[2]]).toBeUndefined();
            });
        });
    });
    it("add way to relation", function() {
        runs(function() {
            var response;
            dao.addWayToRelation(testingWay._id, testingRelation._id, function(result, relation) {
                response = result;
                testingRelation = relation;
            });
            
            waitsFor(function() {
                return response !== undefined; 
            }, 'should return a status that is not undefined', 1000);
            
            runs(function() {
                expect(response).toEqual('added way');
                expect(testingRelation.ways_[testingRelation.ways_.length-1]).toEqual(testingWay._id);
            });
        });
    });
    it("get ways in relation", function() {
        runs(function() {
            var response;
            var waysInRelation;
            dao.getWaysInRelation(testingRelation._id, function(result, ways) {
                response = result;
                waysInRelation = ways;
            });
            
            waitsFor(function() {
                return response !== undefined; 
            }, 'should return a status that is not undefined', 1000);
            
            runs(function() {
                expect(response).toEqual('found ways');
                expect(waysInRelation[waysInRelation.length-1]._id).toEqual(testingWay._id); 
            });
        });
    });
    it("remove way from relation", function() {
        runs(function() {
            var response;
            dao.removeWayFromRelation(testingWay._id, testingRelation._id, function(result, relation){
                response = result;
                testingRelation = relation;
            });
            
            waitsFor(function() {
                return response !== undefined; 
            }, 'should return a status that is not undefined', 1000);
            
            runs(function() {
                expect(response).toEqual('removed way');
                expect(testingRelation.ways_[testingRelation.ways_.length-1]).toBeUndefined();
            });
        });
    });
    it("add relation to relation", function() {
        runs(function() {
            var response;
            dao.addRelationToRelation(testingRelationForDeletion._id, testingRelation._id, function(result, relation) {
                response = result;
                testingRelation = relation;
            })
            
            waitsFor(function() {
                return response !== undefined; 
            }, 'should return a status that is not undefined', 1000);
            
            runs(function() {
                expect(response).toEqual('added relation');
                expect(testingRelation.relations_[testingRelation.relations_.length-1]).toEqual(testingRelationForDeletion._id);
            });
        });
    });
    it("get relations in relation", function() {
        runs(function() {
            var response;
            var relationsInRelation;
            dao.getRelationsInRelation(testingRelation._id, function(result, relations) {
                response = result;
                relationsInRelation = relations;
            });
            
            waitsFor(function() {
                return response !== undefined; 
            }, 'should return a status that is not undefined', 1000);
            
            runs(function() {
                expect(response).toEqual('found relations');
                expect(relationsInRelation[relationsInRelation.length-1]._id).toEqual(testingRelationForDeletion._id); 
            });
        });
    });
    it("remove relation from relation", function() {
        runs(function() {
            var response;
            dao.removeRelationFromRelation(testingRelationForDeletion._id, testingRelation._id, function(result, relation){
                response = result;
                testingRelation = relation;
            });
            
            waitsFor(function() {
                return response !== undefined; 
            }, 'should return a status that is not undefined', 1000);
            
            runs(function() {
                expect(response).toEqual('removed relation');
                expect(testingRelation.relations_[testingRelation.relations_.length-1]).toBeUndefined();
            });
        });
    });
    
    // DELETE METHODS - RUN LAST
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
    it("delete relation", function() {
        runs(function() {
            var response;
            dao.deleteRelation(testingRelationForDeletion._id, function(result) {
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
    it("delete all nodes", function() {
        runs(function() {
            var response;
            dao.deleteAllNodes(function(result) {
                response = result;
            });
            
            waitsFor(function() {
                return response !== undefined;
            }, 'should return a status that is not undefined', 1000);
            
            runs(function() {
                //check nodes are empty
                expect(response).toEqual('deleted all nodes');
            });
        });
    });
    it("delete all ways", function() {
        runs(function() {
            var response;
            
            dao.deleteAllWays(function(result) {
                response = result;
            });
            
            waitsFor(function() {
                return response !== undefined;
            }, 'should return a status that is not undefined', 1000);
            
            runs(function() {
                expect(response).toEqual('deleted all ways');
            });  
        });
    });
    it("delete all relations", function() {
        runs(function() {
            var response;
            
            dao.deleteAllRelations(function(result) {
                response = result;
            });
            
            waitsFor(function() {
                return response !== undefined;
            }, 'should return a status that is not undefined', 1000);
            
            runs(function() {
                expect(response).toEqual('deleted all relations');
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