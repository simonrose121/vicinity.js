var relation = require("../objects/relation");
var node = require("../objects/node");
var tag = require("../objects/tag");
var way = require("../objects/way");

describe("relation unit tests", function() {
    it("object construction", function() {
        runs(function() {
            // create new relation
            var relation0 = new relation();
            
            // assert if it isn't defined
            expect(relation0).toBeDefined();
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
            expect(relation2.tags_[1]).toEqual(tag2);
        });
    });
    it("storing ways", function() {
        runs(function() {
            // create new tags
            var way1 = new way();
            var way2 = new way();

            // create new way
            var relation3 = new relation();
            
            // add tags to way
            relation3.addWay(way1);
            relation3.addWay(way2);
            
            // assert if way's tags are not equal to created tags
            expect(relation3.ways_[0]).toEqual(way1);
            expect(relation3.ways_[1]).toEqual(way2);
        });
    });
    it("storing relations", function() {
        runs(function() {
            // create new relation
            var relation4 = new relation();
            
            // create a second new relation
            var relation5 = new relation();
            
            // add relation to relation
            relation4.addRelation(relation5);
            
            // assert if relation does not exist inside relation
            expect(relation4.relations_[0]).toEqual(relation5);
        });
    });
    it("removing nodes", function() {
        runs(function() {
             // create new node
            var node1 = new node(0.0, 1.4, 4.5);
            
            // create new way
            var relation6 = new relation();
            
            // add node to way
            relation6.addNode(node1);
            
            // check node is in way
            expect(relation6.nodeExists(node1)).toEqual(true);
            
            // remove node from way
            relation6.removeNode(node1);
            
            // check node has been removed
            expect(relation6.nodeExists(node1)).toEqual(false);
        });
    });
    it("removing tags", function(){
        runs(function() {
            // create new tag
            var tag1 = new tag("name", "a place");
            
            // create new way
            var relation7 = new relation();
            
            // add tag to way
            relation7.addTag(tag1);
            
            // check tag is in way
            expect(relation7.tagExists(tag1)).toEqual(true);
            
            // remove tag from way
            relation7.removeTag(tag1);
            
            // check tag has been removed
            expect(relation7.tagExists(tag1)).toEqual(false);
        }) 
    });
    it("removing ways", function() {
        runs(function() {
            // create new way
            var way1 = new way();
            
            // create new relation
            var relation8 = new relation()
            
            // add way to relation
            relation8.addWay(way1);
            
            // check if way is in relation
            expect(relation8.wayExists(way1)).toEqual(true);
            
            // remove way from relation
            relation8.removeWay(way1);
            
            // check way has been removed
            expect(relation8.wayExists(way1)).toEqual(false);
        });
    });
    it("removing relations", function() {
        runs(function() {
            // create new relation
            var relation9 = new relation();
            
            // create another new relation
            var relation10 = new relation();
            
            // add relation to relation
            relation9.addRelation(relation10);
            
            // check if relation is in relation
            expect(relation9.relationExists(relation10)).toEqual(true);
            
            // remove relation from relation
            relation9.removeRelation(relation10);
            
            // check relation has been removed
            expect(relation9.relationExists(relation10)).toEqual(false);
        });
    });
});