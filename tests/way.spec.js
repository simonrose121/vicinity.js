var way = require("../model/way");
var node = require("../model/node");
var tag = require("../model/tag");

describe("way unit tests", function() {
    it("object construction", function() {
        runs(function() {
            // create new way
            var way0 = new way();
            
            // assert if it isn't defined
            expect(way0).toBeDefined();
        });
    });
    it("storing nodes", function() {
        runs(function() {
            // create new nodes
            var node1 = new node(0.0, 1.4, 4.5);
            var node2 = new node(1.0, 1.4, 4.5);

            // create new way
            way1 = new way();
            
            // add nodes to way 
            way1.addNode(node1);
            way1.addNode(node2);
            
            // assert if way's nodes are not equal to created created nodes
            expect(way1.nodes_[0]).toEqual(node1);
            expect(way1.nodes_[1]).toEqual(node2);
        });
    });
    it("storing tags", function() {
        runs(function() {
            // create new tags
            var tag1 = new tag("name", "a place");
            var tag2 = new tag("_id", "2841098241");

            // create new way
            var way2 = new way();
            
            // add tags to way
            way2.addTag(tag1);
            way2.addTag(tag2);
            
            // assert if way's tags are not equal to created tags
            expect(way2.tags_[0]).toEqual(tag1);
        });
    });
    it("removing nodes", function(){
        runs(function() {
            // create new node
            var node1 = new node(0.0, 1.4, 4.5);
            
            // create new way
            way3 = new way();
            
            // add node to way
            way3.addNode(node1);
            
            // check node is in way
            expect(way3.nodeExists(node1)).toEqual(true);
            
            // remove node from way
            way3.removeNode(node1);
            
            // check node has been removed
            expect(way3.nodeExists(node1)).toEqual(false);
        }) 
    });
    it("removing tags", function(){
        runs(function() {
            // create new tag
            var tag1 = new tag("name", "a place");
            
            // create new way
            way4 = new way();
            
            // add tag to way
            way4.addTag(tag1);
            
            // check tag is in way
            expect(way4.tagExists(tag1)).toEqual(true);
            
            // remove tag from way
            way4.removeTag(tag1);
            
            // check tag has been removed
            expect(way4.tagExists(tag1)).toEqual(false);
        }) 
    });
});