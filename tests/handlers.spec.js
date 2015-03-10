var app = require('../app');
var nodeHandler = require('../handlers/node');
var wayHandler = require('../handlers/way');
var querystring = require('querystring');

//CAN'T RUN THESE TESTS WHILST SERVER IS RUN
describe("handler tests", function() {
    var testingWay;
    var testingNode;
    app.createApp(process.env.PORT);
    
    it("create node", function() {
        runs(function() {
            var qs = "lon=20&lat=10";
            var query = querystring.parse(qs);
            var response;
            nodeHandler.create(query, function(res) {
                response = res;
                testingNode = JSON.parse(res.content);
            })
            
            waitsFor(function() {
                return response !== undefined;
            }, 'should return a status that is not undefined', 1000);
        
            runs(function() {
                console.log(response.content);
                expect(testingNode._id).toBeDefined();
            }); 
        });
    });
    
    it("create way", function() {
        runs(function() {
            var qs = "";
            var query = querystring.parse(qs);
            var response;
            wayHandler.create(query, function(res) {
                response = res;
                testingWay = JSON.parse(res.content);
            })
            
            waitsFor(function() {
                return response !== undefined;
            }, 'should return a status that is not undefined', 1000);
        
            runs(function() {
                console.log(response.content);
                expect(testingWay._id).toBeDefined();
            });
        }); 
    });
    it("get way", function() {
        runs(function() {
            var qs = "id=" + testingWay._id;
            var query = querystring.parse(qs);
            var response;
            wayHandler.get(query, function(res) {
                response = res;
            })
            
            waitsFor(function() {
                return response !== undefined;
            }, 'should return a status that is not undefined', 1000);
        
            runs(function() {
                console.log(response.content);
                expect(JSON.parse(response.content)).toEqual(testingWay);
            });
        });
    })
    it("list ways", function() {
        runs(function() {
            var qs = ""; 
            var query = querystring.parse(qs);
            var response;
            wayHandler.list(query, function(res) {
                response = res;
            })
            
            waitsFor(function() {
                return response !== undefined;
            }, 'should return a status that is not undefined', 1000);
        
            runs(function() {
                console.log(response.content);
                var list = JSON.parse(response.content);
                expect(list[list.length-1]).toEqual(testingWay);
            });
        });
    }); 
    it("add node to way", function() {
        runs(function() {
            var qs = "nodeId=" + testingNode._id + "&" + "wayId=" + testingWay._id;
            var query = querystring.parse(qs);
            var response;
            wayHandler.addNode(query, function(res) {
                response = res;
                testingWay = JSON.parse(res.content);
            });
             
            waitsFor(function() {
                return response !== undefined;
            }, 'should return a status that is not undefined', 1000);
        
            runs(function() {
                console.log(testingWay.nodes_);
                expect(testingWay.nodes_[testingWay.nodes_.length-1]).toEqual(testingNode._id);
            });
        });
    });
    it("remove node from way", function() {
        runs(function() {
            var qs = "nodeId=" + testingNode._id + "&" + "wayId=" + testingWay._id;
            var query = querystring.parse(qs);
            var response;
            wayHandler.removeNode(query, function(res) {
                response = res;
                testingWay = JSON.parse(res.content);
            });
             
            waitsFor(function() {
                return response !== undefined;
            }, 'should return a status that is not undefined', 1000);
        
            runs(function() {
                console.log(testingWay.nodes_);
                expect(testingWay.nodes_[testingWay.nodes_.length-1]).toBeUndefined();
            });
        });
    });
    it("delete way", function() {
        runs(function() {
            var qs = "id=" + testingWay._id;
            var query = querystring.parse(qs);
            var response;
            wayHandler.delete(query, function(res) {
                response = res;
            });
             
            waitsFor(function() {
                return response !== undefined;
            }, 'should return a status that is not undefined', 1000);
        
            runs(function() {
                console.log(response.content);
                expect(response.content).toEqual(testingWay._id + " has been deleted");
            });
        });
    });
    
    // Override the finishCallback so we can add some cleanup methods.
    // This is run after all tests have been completed.
    // Reference: https://github.com/mhevery/jasmine-node/issues/241
    var _finishCallback = jasmine.Runner.prototype.finishCallback;
    jasmine.Runner.prototype.finishCallback = function () {
        // Run the old finishCallback
        _finishCallback.bind(this)();
    
        // cleanup db
        dao.close();
    };
});