var node = require("../model/node");

describe("node unit tests", function() {
    it("object construction", function() {
        runs(function() {
            // create new node
            var node0 = new node(0.0, 1.4);
            
            // check object values are correct
            expect(node0.lat_).toEqual(0.0);
            expect(node0.lon_).toEqual(1.4);
        });
    });
    it("distance calculation", function() {
        runs(function() {
            // create nodes
            var node0 = new node(53.378491, -1.472634);
            var node1 = new node(53.379720, -1.445426);
            
            // check if distance calculation works
            expect(node0.distance(node1)).toEqual(1810);
        });
    });
    it("midpoint calculation", function() {
        runs(function() {
            // create nodes
            var node0 = new node(53.378491, -1.472634);
            var node1 = new node(53.379720, -1.445426);
            
            var node3 = new node();
            node3.lat_ = node0.midpoint(node1).lat_;
            node3.lon_ = node0.midpoint(node1).lon_;
            
            // check midpoint
            expect(node3.lat_).toEqual(53.379105);
            expect(node3.lon_).toEqual(-1.45903);
        });
    });
});