var querystring = require('querystring');
var url = require('url');

var app = require('../../app');
var handles = require('../../handles');
var router = require('../../router');

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
            var req = "/node/create?lat=48.860593&lon=2.337698";
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
                console.log("created node = " + result.content);
                expect(testingNode._id).toBeDefined();
                expect(testingNode.lat_).toEqual(48.860593);
                expect(testingNode.lon_).toEqual(2.337698);
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
                console.log("created way = " + result.content);
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
                console.log("created relation = " + result.content);
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
                console.log("returned way = " + result.content);
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
                console.log("list of ways = " + result.content);
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
                console.log("way after tag added = " + result.content);
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
                console.log("way after tag removed = " + result.content);
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
                console.log("way after node added = " + result.content);
                expect(testingWay.nodes_[testingWay.nodes_.length-1]).toEqual(testingNode._id);
            });
        });
    });
    it("list nodes in way", function() {
        runs(function() {
            var req = "/way/node/list?id=" + testingWay._id;
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
                console.log("nodes in way = " + result.content);
                var nodes = JSON.parse(result.content);
                expect(nodes[nodes.length-1]).toEqual(testingNode);
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
                console.log("way after node removed = " + result.content);
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
                console.log("relation after node added = " + result.content);
                expect(testingRelation.nodes_[testingRelation.nodes_.length-1]).toEqual(testingNode._id);
            });
        });
    });
    it("list nodes in relation", function() {
        runs(function() {
            var req = "/relation/node/list?id=" + testingRelation._id;
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
                console.log("nodes in relation = " + result.content);
                var nodes = JSON.parse(result.content);
                expect(nodes[nodes.length-1]).toEqual(testingNode);
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
                console.log("relation after node removed = " + result.content);
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
                    console.log("relation after tag added = " + result.content);
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
                console.log("relation after tag removed = " + result.content);
                expect(testingRelation.tags_[2]).toBeUndefined();
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
                    console.log("relation after way added = " + result.content);
                    expect(testingRelation.ways_[testingRelation.ways_.length-1]).toEqual(testingWay._id);
                });
            });
        });
    });
    it("list ways in relation", function() {
        runs(function() {
            var req = "/relation/way/list?id=" + testingRelation._id;
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
                console.log("ways in relation = " + result.content);
                var ways = JSON.parse(result.content);
                expect(ways[ways.length-1]).toEqual(testingWay);
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
                console.log("relation after way removed = " + result.content);
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
                console.log("relation after relation added = " + result.content);
                expect(testingRelation.relations_[testingRelation.relations_.length-1]).toEqual(testingRelation2._id);
            });
        });
    });
    it("list relations in relation", function() {
        runs(function() {
            var req = "/relation/relation/list?id=" + testingRelation._id;
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
                console.log("relations in relation = " + result.content);
                var relations = JSON.parse(result.content);
                expect(relations[relations.length-1]).toEqual(testingRelation2);
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
                console.log("relation after relation removed = " + result.content);
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
                console.log("returned relation = " + result.content);
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
                console.log("list of relations = " + result.content);
                var list = JSON.parse(result.content);
                expect(list[list.length-1]).toEqual(testingRelation);
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
                console.log("relation " + result.content);
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
                console.log("way " + result.content);
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
                console.log("node after tag added = " + result.content);
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
                console.log("node after tag removed = " + result.content);
                expect(testingNode.tags_[2]).toBeUndefined();
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
                console.log("returned node = " + result.content);
                expect(JSON.parse(result.content)).toEqual(testingNode);
            }); 
        });
    });
    it("update node", function() {
        runs(function() {
            var req = "/node/update?id=" + testingNode._id + "&lat=-22.794701&lon=-43.173398";
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
                console.log("updated node = " + result.content);
                expect(JSON.parse(result.content).lat_).toEqual(-22.794701);
                expect(JSON.parse(result.content).lon_).toEqual(-43.173398);
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
                console.log("node " + result.content);
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