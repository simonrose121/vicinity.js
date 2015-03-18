var response = require("../../model/response");

describe("response unit tests", function() {
    it("object construction", function() {
        runs(function() {
            // create new response
            var resp = new response(200, "node not found");
            var notFoundResp = new response(404, "page not found");
            
            // check if content is correct
            expect(resp.code).toEqual(200);
            expect(notFoundResp.content).toEqual("page not found");
        });
    });
});