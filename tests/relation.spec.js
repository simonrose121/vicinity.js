var relation = require("../model/relation");
var node = require("../model/node");
var tag = require("../model/tag");

describe("relation unit tests", function() {
    it("object construction", function() {
        runs(function() {
            // create new relation
            var relation0 = new relation();
            
            // assert if it isn't defined
            expect(relation1).toBeDefined();
        });
    });
    it("storing nodes", function() {
        runs(function() {
            // create new nodes
            var node1 = new node(0.0, 1.4, 4.5);
            var node2 = new node(1.0, 1.4, 4.5);

            // create new way
            var relation1 = new relation();
            
            // add nodes to way 
            relation1.addNode(node1);
            relation1.addNode(node2);
            
            // assert if way's nodes are not equal to created created nodes
            expect(relation1.nodes_[0]).toEqual(node1);
            expect(relation1.nodes_[1]).toEqual(node2);
        });
    });
    it("storing tags", function() {
        runs(function() {
            // create new tags
            var tag1 = new tag("name", "a place");
            var tag2 = new tag("_id", "2841098241");

            // create new way
            var relation2 = new relation();
            
            // add tags to way
            relation2.addTag(tag1);
            relation2.addTag(tag2);
            
            // assert if way's tags are not equal to created tags
            expect(relation2.tags_[0]).toEqual(tag1);
        });
    });
    it("storing ways", function() {
        runs(function() {
            // create new tags
            var tag1 = new tag("name", "a place");
            var tag2 = new tag("_id", "2841098241");

            // create new way
            var relation3 = new relation();
            
            // add tags to way
            relation3.addTag(tag1);
            relation3.addTag(tag2);
            
            // assert if way's tags are not equal to created tags
            expect(relation3.tags_[0]).toEqual(tag1);
        });
    });
});