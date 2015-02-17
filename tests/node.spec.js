var node = require("../model/node");

describe("node unit tests", function() {
    it("object construction", function() {
        runs(function(){
            var myNode = new node(0.0, 1.4, 4.5);
            expect(myNode.lat_).toEqual(0.0);
            expect(myNode.lon_).toEqual(1.4);
            expect(myNode.alt_).toEqual(4.5);
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