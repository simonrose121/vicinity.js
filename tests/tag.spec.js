var tag = require("../model/tag");

describe("tag unit tests", function() {
    it("object construction", function() {
        runs(function() {
            // create new tag
            var tag0 = new tag("name", "test");
            
            // assert if not defined
            expect(tag0).toBeDefined();
            
            // check if key is correct
            expect(tag0.key_).toEqual("name");
            
            // check if value is correct;
            expect(tag0.value_).toEqual("test");
        });
    }); 
});