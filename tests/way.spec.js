var way = require("../model/way");
var node = require("../model/node");
var tag = require("../model/tag");

describe("way unit tests", function() {
    it("object construction", function() {
        runs(function() {
            var node1 = new node(0.0, 1.4, 4.5);
            var node2 = new node(1.0, 1.4, 4.5);
            expect(node1).toBeDefined();
            expect(node2).toBeDefined();
            var nodes = [node1, node2];
            var myWay = new way(nodes);
            expect(myWay.nodes[0]).toEqual(node1);
            expect(myWay.nodes[1]).toEqual(node2);
        });
    });
    it("storing tags", function() {
        runs(function() {
            var node1 = new node(0.0, 1.4, 4.5);
            var node2 = new node(1.0, 1.4, 4.5);
            
            var key = "name";
            var value = "a place";
            var tag1 = new tag(key, value);
            
            expect(node1).toBeDefined();
            expect(node2).toBeDefined();
            expect(tag1).toBeDefined();
            
            var nodes = [node1, node2];
            var tags = [tag1];
            var myWay = new way(nodes, tags);
            
            expect(myWay.nodes[0]).toEqual(node1);
            expect(myWay.nodes[1]).toEqual(node2);
            expect(myWay.tags[0]).toEqual(tag1);
        });
    });
});