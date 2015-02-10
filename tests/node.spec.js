var node = require("../model/node");

describe("Constructing a node object", function() {
    it("Node Object Construction", function() {
        runs(function(){
            var myNode = new node(0.0, 1.4, 4.5);
            expect(myNode._lat).toEqual(0.0);
            expect(myNode._lon).toEqual(1.4);
            expect(myNode._alt).toEqual(4.5);
        });
    });
});