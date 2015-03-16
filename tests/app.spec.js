var querystring = require('querystring');
var url = require('url');

var app = require('../app');
var handles = require('../handles');
var router = require('../router');

var nodeHandler = require('../handlers/node');
var wayHandler = require('../handlers/way');


// n.b. these tests will only run alone
describe("app tests", function() {
    var testingWay;
    var testingNode;
    var testingRelation;
    var testingRelation2;
    var route = router.route;
    app.start(process.env.PORT);
    
    it("create node", function() {
        runs(function() {
            var req = "/node/create?lat=53.378491&lon=-1.472634";
            var result;
            
            // mimic start function without writing to page
            var url_parse = url.parse(req);
            route(handles.handle, url_parse.pathname, querystring.parse(url_parse.query), function(response) {
                result = response;
                testingNode = JSON.parse(response.content);
            });
           
            waitsFor(function() {
                return result !== undefined;
            }, 'should return a status that is not undefined', 1000);
        
            runs(function() {
                console.log(result.content);
                expect(testingNode._id).toBeDefined();
            }); 
        });
    });
    it("create way", function() {
        runs(function() {
            var req = "/way/create";
            var result;
            
            // mimic start function without writing to page
            var url_parse = url.parse(req);
            route(handles.handle, url_parse.pathname, querystring.parse(url_parse.query), function(response) {
                result = response;
                testingWay = JSON.parse(response.content);
            });
            
            waitsFor(function() {
                return result !== undefined;
            }, 'should return a status that is not undefined', 1000);
        
            runs(function() {
                console.log(result.content);
                expect(testingWay._id).toBeDefined();
            });
        }); 
    });
    it("create relation", function() {
        runs(function() {
            var req = "/relation/create"; 
            var result;
            
            // mimic start function without writing to page
            var url_parse = url.parse(req);
            route(handles.handle, url_parse.pathname, querystring.parse(url_parse.query), function(response) {
                result = response;
                testingRelation = JSON.parse(response.content);
            });
            
            route(handles.handle, url_parse.pathname, querystring.parse(url_parse.query), function(response) {
                result = response;
                testingRelation2 = JSON.parse(response.content);
            });
            
            waitsFor(function() {
                return result !== undefined;
            }, 'should return a status that is not undefined', 1000);
        
            runs(function() {
                console.log(result.content);
                expect(testingRelation._id).toBeDefined();
            });
        });
    });
    it("get way", function() {
        runs(function() {
            var req = "/way/get?id=" + testingWay._id;
            var result;
            
            // mimic start function without writing to page
            var url_parse = url.parse(req);
            route(handles.handle, url_parse.pathname, querystring.parse(url_parse.query), function(response) {
                result = response;
            });
            
            waitsFor(function() {
                return result !== undefined;
            }, 'should return a status that is not undefined', 1000);
        
            runs(function() {
                console.log(result.content);
                expect(JSON.parse(result.content)).toEqual(testingWay);
            });
        });
    })
    it("list ways", function() {
        runs(function() {
            var req = "/way/list";
            var result;
            
            // mimic start function without writing to page
            var url_parse = url.parse(req);
            route(handles.handle, url_parse.pathname, querystring.parse(url_parse.query), function(response) {
                result = response;
            });
            
            waitsFor(function() {
                return result !== undefined;
            }, 'should return a status that is not undefined', 1000);
        
            runs(function() {
                console.log(result.content);
                var list = JSON.parse(result.content);
                expect(list[list.length-1]).toEqual(testingWay);
            });
        });
    }); 
    it("add tag to way", function() {
        runs(function() {
            var key = "oneway";
            var value = "yes";
            var req = "/way/tag/add?id=" + testingWay._id + "&key=" + key + "&value=" + value;
            var result;
            
            // mimic start function without writing to page
            var url_parse = url.parse(req);
            route(handles.handle, url_parse.pathname, querystring.parse(url_parse.query), function(response) {
                result = response;
                testingWay = JSON.parse(response.content);
            });
             
            waitsFor(function() {
                return result !== undefined;
            }, 'should return a status that is not undefined', 1000);
        
            runs(function() {
                console.log(testingWay.tags_);
                expect(testingWay.tags_[testingWay.tags_.length-1].key_).toEqual(key);
            });
        });
    });
    it("remove tag to way", function() {
        runs(function() {
            var key = "oneway";
            var value = "yes";
            var req = "/way/tag/remove?id=" + testingWay._id + "&key=" + key + "&value=" + value;
            var result;
            
            // mimic start function without writing to page
            var url_parse = url.parse(req);
            route(handles.handle, url_parse.pathname, querystring.parse(url_parse.query), function(response) {
                result = response;
                testingWay = JSON.parse(response.content);
            });
             
            waitsFor(function() {
                return result !== undefined;
            }, 'should return a status that is not undefined', 1000);
        
            runs(function() {
                console.log(testingWay.tags_);
                expect(testingWay.tags_[0]).toBeUndefined();
            });
        });
    });
    it("add node to way", function() {
        runs(function() {
            var req = "/way/node/add?nodeId=" + testingNode._id + "&" + "wayId=" + testingWay._id;
            var result;
            
            // mimic start function without writing to page
            var url_parse = url.parse(req);
            route(handles.handle, url_parse.pathname, querystring.parse(url_parse.query), function(response) {
                result = response;
                testingWay = JSON.parse(response.content);
            });
             
            waitsFor(function() {
                return result !== undefined;
            }, 'should return a status that is not undefined', 1000);
        
            runs(function() {
                console.log(testingWay.nodes_);
                expect(testingWay.nodes_[testingWay.nodes_.length-1]).toEqual(testingNode._id);
            });
        });
    });
    it("remove node from way", function() {
        runs(function() {
            var req = "/way/node/remove?nodeId=" + testingNode._id + "&" + "wayId=" + testingWay._id;
            var result;
            
            // mimic start function without writing to page
            var url_parse = url.parse(req);
            route(handles.handle, url_parse.pathname, querystring.parse(url_parse.query), function(response) {
                result = response;
                testingWay = JSON.parse(response.content);
            });
             
            waitsFor(function() {
                return result !== undefined;
            }, 'should return a status that is not undefined', 1000);
        
            runs(function() {
                console.log(testingWay.nodes_);
                expect(testingWay.nodes_[testingWay.nodes_.length-1]).toBeUndefined();
            });
        });
    });
    it("add node to relation", function() {
        runs(function() {
            var req = "/relation/node/add?nodeId=" + testingNode._id + "&" + "relationId=" + testingRelation._id;
            var result;
            
            // mimic start function without writing to page
            var url_parse = url.parse(req);
            route(handles.handle, url_parse.pathname, querystring.parse(url_parse.query), function(response) {
                result = response;
                testingRelation = JSON.parse(response.content);
            });
             
            waitsFor(function() {
                return result !== undefined;
            }, 'should return a status that is not undefined', 1000);
        
            runs(function() {
                console.log(testingRelation.nodes_);
                expect(testingRelation.nodes_[testingRelation.nodes_.length-1]).toEqual(testingNode._id);
            });
        });
    });
    it("remove node from relation", function() {
        runs(function() {
            var req = "/relation/node/remove?nodeId=" + testingNode._id + "&" + "relationId=" + testingRelation._id;
            var result;
            
            // mimic start function without writing to page
            var url_parse = url.parse(req);
            route(handles.handle, url_parse.pathname, querystring.parse(url_parse.query), function(response) {
                result = response;
                testingRelation = JSON.parse(response.content);
            });
             
            waitsFor(function() {
                return result !== undefined;
            }, 'should return a status that is not undefined', 1000);
        
            runs(function() {
                console.log(testingRelation.nodes_);
                expect(testingRelation.nodes_[testingRelation.nodes_.length-1]).toBeUndefined();
            });
        });
    });
    it("add tag to relation", function() {
        runs(function() {
            runs(function() {
                var key = "name";
                var value = "london road";
                var req = "/relation/tag/add?id=" + testingRelation._id + "&key=" + key + "&value=" + value;
                var result;
                
                // mimic start function without writing to page
                var url_parse = url.parse(req);
                route(handles.handle, url_parse.pathname, querystring.parse(url_parse.query), function(response) {
                    result = response;
                    testingRelation = JSON.parse(response.content);
                });
                 
                waitsFor(function() {
                    return result !== undefined;
                }, 'should return a status that is not undefined', 1000);
            
                runs(function() {
                    console.log(testingRelation.tags_);
                    expect(testingRelation.tags_[testingRelation.tags_.length-1].key_).toEqual(key);
                });
            });
        });
    });
    it("remove tag from relation", function() {
        runs(function() {
            var key = "road";
            var value = "london road";
            var req = "/relation/tag/remove?id=" + testingRelation._id + "&key=" + key + "&value=" + value;
            var result;
            
            // mimic start function without writing to page
            var url_parse = url.parse(req);
            route(handles.handle, url_parse.pathname, querystring.parse(url_parse.query), function(response) {
                result = response;
                testingRelation = JSON.parse(response.content);
            });
             
            waitsFor(function() {
                return result !== undefined;
            }, 'should return a status that is not undefined', 1000);
        
            runs(function() {
                console.log(testingRelation.tags_);
                expect(testingRelation.tags_[0]).toBeUndefined();
            });
        });
    });
    it("add way to relation", function() {
        runs(function() {
            runs(function() {
                var req = "/relation/way/add?wayId=" + testingWay._id + "&" + "relationId=" + testingRelation._id;
                var result;
                
                // mimic start function without writing to page
                var url_parse = url.parse(req);
                route(handles.handle, url_parse.pathname, querystring.parse(url_parse.query), function(response) {
                    result = response;
                    testingRelation = JSON.parse(response.content);
                });
                 
                waitsFor(function() {
                    return result !== undefined;
                }, 'should return a status that is not undefined', 1000);
            
                runs(function() {
                    console.log(testingRelation.ways_);
                    expect(testingRelation.ways_[testingRelation.ways_.length-1]).toEqual(testingWay._id);
                });
            });
        });
    });
    it("remove way from relation", function() {
        runs(function() {
            var req = "/relation/way/remove?wayId=" + testingWay._id + "&" + "relationId=" + testingRelation._id;
            var result;
            
            // mimic start function without writing to page
            var url_parse = url.parse(req);
            route(handles.handle, url_parse.pathname, querystring.parse(url_parse.query), function(response) {
                result = response;
                testingRelation = JSON.parse(response.content);
            });
             
            waitsFor(function() {
                return result !== undefined;
            }, 'should return a status that is not undefined', 1000);
        
            runs(function() {
                console.log(testingRelation.ways_);
                expect(testingRelation.ways_[testingRelation.ways_.length-1]).toBeUndefined();
            });
        });
    });
    it("add relation to relation", function() {
        runs(function() {
            // create other relation
            var req = "/relation/relation/add?otherRelationId=" + testingRelation2._id + "&" + "relationId=" + testingRelation._id;
            var result;
            
            // mimic start function without writing to page
            var url_parse = url.parse(req);
            route(handles.handle, url_parse.pathname, querystring.parse(url_parse.query), function(response) {
                result = response;
                testingRelation = JSON.parse(response.content);
            });
             
            waitsFor(function() {
                return result !== undefined;
            }, 'should return a status that is not undefined', 1000);
        
            runs(function() {
                console.log(testingRelation.relations_);
                expect(testingRelation.relations_[testingRelation.relations_.length-1]).toEqual(testingRelation2._id);
            });
        });
    });
    it("remove relation from relation", function() {
        runs(function() {
            var req = "/relation/relation/remove?otherRelationId=" + testingRelation2._id + "&" + "relationId=" + testingRelation._id;
            var result;
            
            // mimic start function without writing to page
            var url_parse = url.parse(req);
            route(handles.handle, url_parse.pathname, querystring.parse(url_parse.query), function(response) {
                result = response;
                testingRelation = JSON.parse(response.content);
            });
             
            waitsFor(function() {
                return result !== undefined;
            }, 'should return a status that is not undefined', 1000);
        
            runs(function() {
                console.log(testingRelation.relations_);
                expect(testingRelation.relations_[testingRelation.relations_.length-1]).toBeUndefined();
            });
        });
    });
    it("get relation", function() {
        runs(function() {
            var req = "/relation/get?id=" + testingRelation._id;
            var result;
            
            // mimic start function without writing to page
            var url_parse = url.parse(req);
            route(handles.handle, url_parse.pathname, querystring.parse(url_parse.query), function(response) {
                result = response;
            });
            
            waitsFor(function() {
                return result !== undefined;
            }, 'should return a status that is not undefined', 1000);
        
            runs(function() {
                console.log(result.content);
                expect(JSON.parse(result.content)).toEqual(testingRelation);
            });
        });
    });
    it("list relation", function() {
        runs(function() {
            var req = "/relation/list";
            var result;
            
            // mimic start function without writing to page
            var url_parse = url.parse(req);
            route(handles.handle, url_parse.pathname, querystring.parse(url_parse.query), function(response) {
                result = response;
            });
            
            waitsFor(function() {
                return result !== undefined;
            }, 'should return a status that is not undefined', 1000);
        
            runs(function() {
                console.log(result.content);
                var list = JSON.parse(result.content);
                expect(list[list.length-1]).toEqual(testingRelation2);
            });
        });
    });
    it("delete relation", function() {
        runs(function() {
            var req = "/relation/delete?id=" + testingRelation._id;
            var result;
            
            // mimic start function without writing to page
            var url_parse = url.parse(req);
            route(handles.handle, url_parse.pathname, querystring.parse(url_parse.query), function(response) {
                result = response;
            });
             
            waitsFor(function() {
                return result !== undefined;
            }, 'should return a status that is not undefined', 1000);
        
            runs(function() {
                console.log(result.content);
                expect(result.content).toEqual(testingRelation._id + " has been deleted");
            });
        });
    });
    it("delete way", function() {
        runs(function() {
            var req = "/way/delete?id=" + testingWay._id;
            var result;
            
            // mimic start function without writing to page
            var url_parse = url.parse(req);
            route(handles.handle, url_parse.pathname, querystring.parse(url_parse.query), function(response) {
                result = response;
            });
             
            waitsFor(function() {
                return result !== undefined;
            }, 'should return a status that is not undefined', 1000);
        
            runs(function() {
                console.log(result.content);
                expect(result.content).toEqual(testingWay._id + " has been deleted");
            });
        });
    });
    it("add tag to node", function() {
        runs(function() {
            var key = "name";
            var value = "london road";
            var req = "/node/tag/add?id=" + testingNode._id + "&key=" + key + "&value=" + value;
            var result;
            
            // mimic start function without writing to page
            var url_parse = url.parse(req);
            route(handles.handle, url_parse.pathname, querystring.parse(url_parse.query), function(response) {
                result = response;
                testingNode = JSON.parse(response.content);
            });
             
            waitsFor(function() {
                return result !== undefined;
            }, 'should return a status that is not undefined', 1000);
        
            runs(function() {
                console.log(testingNode.tags_);
                expect(testingNode.tags_[testingNode.tags_.length-1].key_).toEqual(key);
            });
        });
    });
    it("remove tag from node", function() {
        runs(function() {
            var key = "road";
            var value = "london road";
            var req = "/node/tag/remove?id=" + testingNode._id + "&key=" + key + "&value=" + value;
            var result;
            
            // mimic start function without writing to page
            var url_parse = url.parse(req);
            route(handles.handle, url_parse.pathname, querystring.parse(url_parse.query), function(response) {
                result = response;
                testingNode = JSON.parse(response.content);
            });
             
            waitsFor(function() {
                return result !== undefined;
            }, 'should return a status that is not undefined', 1000);
        
            runs(function() {
                console.log(testingNode.tags_);
                expect(testingNode.tags_[0]).toBeUndefined();
            });
        });
    });
    it("get node", function() {
        runs(function() {
            var req = "/node/get?id=" + testingNode._id;
            var result;
            
            // mimic start function without writing to page
            var url_parse = url.parse(req);
            route(handles.handle, url_parse.pathname, querystring.parse(url_parse.query), function(response) {
                result = response;
            });
             
            waitsFor(function() {
                return result !== undefined;
            }, 'should return a status that is not undefined', 1000);
        
            runs(function() {
                console.log(result.content);
                expect(JSON.parse(result.content)).toEqual(testingNode);
            }); 
        });
    });
    it("list ways", function() {
        runs(function() {
            var req = "/node/list";
            var result;
            
            // mimic start function without writing to page
            var url_parse = url.parse(req);
            route(handles.handle, url_parse.pathname, querystring.parse(url_parse.query), function(response) {
                result = response;
            });
            
            waitsFor(function() {
                return result !== undefined;
            }, 'should return a status that is not undefined', 1000);
        
            runs(function() {
                console.log(result.content);
                var list = JSON.parse(result.content);
                expect(list[list.length-1]).toEqual(testingNode);
            });
        });
    }); 
    it("delete node", function() {
        runs(function() {
            var req = "/node/delete?id=" + testingNode._id;
            var result;
            
            // mimic start function without writing to page
            var url_parse = url.parse(req);
            route(handles.handle, url_parse.pathname, querystring.parse(url_parse.query), function(response) {
                result = response;
            });
            
            waitsFor(function() {
                return result !== undefined;
            }, 'should return a status that is not undefined', 1000);
        
            runs(function() {
                console.log(result.content);
                expect(result.content).toEqual(testingNode._id + " has been deleted");
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