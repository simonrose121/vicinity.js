var node = require("../model/node");

describe("node tests", function() {
    it("object construction", function() {
        runs(function(){
            var myNode = new node(0.0, 1.4, 4.5);
            expect(myNode._lat).toEqual(0.0);
            expect(myNode._lon).toEqual(1.4);
            expect(myNode._alt).toEqual(4.5);
        });
    });
    it("distance calculation", function() {
        runs(function(){
            var myNode = new node(53.378491, -1.472634, 4.5);
            var otherNode = new node(53.379720, -1.445426, 0);
            expect(myNode.distance(otherNode)).toEqual(1810);
        });
    });
});