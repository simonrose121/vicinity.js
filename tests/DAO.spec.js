var DAO = require("../DAO");

describe("DAO unit tests", function() {
    it("Singleton", function() {
        runs(function(){
            var DAO1 = DAO.getInstance();
            var DAO2 = DAO.getInstance();
            expect(DAO1).toEqual(DAO2);
        });
    });
});