var node = require("../../model/node");

describe("node unit tests", function() {
    it("object construction", function() {
        runs(function() {
            // create new node
            var node0 = new node(40.689245, -74.044489);    // statue of libertry
            
            // check object values are correct
            expect(node0.lat_).toEqual(40.689245);
            expect(node0.lon_).toEqual(-74.044489);
        });
    });
    it("distance calculation", function() {
        runs(function() {
            // create nodes
            var node0 = new node(48.860593, 2.337698);  // louvre
            var node1 = new node(-22.794701, -43.173398);   // christ the redeemer
            
            // check if distance calculation works
            expect(node0.distance(node1)).toEqual(9156091);
        });
    });
    it("midpoint calculation", function() {
        runs(function() {
            // create nodes
            var node0 = new node(51.500712, -0.124625); // big ben
            var node1 = new node(54.914107, -1.589494); // angel of the north
            
            var node3 = new node(); // mid point
            node3.lat_ = node0.midpoint(node1).lat_;
            node3.lon_ = node0.midpoint(node1).lon_;
            
            // check midpoint
            expect(node3.lat_).toEqual(53.20534);
            expect(node3.lon_).toEqual(-0.827767);
        });
    });
});