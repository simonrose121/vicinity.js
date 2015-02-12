var DAO = require("../DAO");

describe("DAO unit tests", function() {
    it("If singleton is instantiated correctly", function() {
        runs(function(){
            var DAO1 = DAO.getInstance();
            var DAO2 = DAO.getInstance();
            expect(DAO1).toEqual(DAO2);
        });
    });
    it("Connection to database", function() {
        runs(function(){
            expect(DAO.getInstance().connect()).toBeDefined();
        });
    });
});