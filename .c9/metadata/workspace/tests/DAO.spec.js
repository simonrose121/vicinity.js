{"filter":false,"title":"DAO.spec.js","tooltip":"/tests/DAO.spec.js","undoManager":{"mark":100,"position":100,"stack":[[{"group":"doc","deltas":[{"start":{"row":497,"column":24},"end":{"row":497,"column":25},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":497,"column":25},"end":{"row":497,"column":26},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":497,"column":26},"end":{"row":497,"column":27},"action":"insert","lines":["g"]}]}],[{"group":"doc","deltas":[{"start":{"row":497,"column":27},"end":{"row":497,"column":29},"action":"insert","lines":["()"]}]}],[{"group":"doc","deltas":[{"start":{"row":497,"column":28},"end":{"row":497,"column":67},"action":"insert","lines":["waysInRelation[waysInRelation.length-1]"]}]}],[{"group":"doc","deltas":[{"start":{"row":497,"column":68},"end":{"row":497,"column":69},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":482,"column":4},"end":{"row":482,"column":5},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":482,"column":5},"end":{"row":482,"column":6},"action":"insert","lines":["*"]}]}],[{"group":"doc","deltas":[{"start":{"row":501,"column":7},"end":{"row":501,"column":8},"action":"insert","lines":["*"]}]}],[{"group":"doc","deltas":[{"start":{"row":501,"column":8},"end":{"row":501,"column":9},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":501,"column":8},"end":{"row":501,"column":9},"action":"remove","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":501,"column":7},"end":{"row":501,"column":8},"action":"remove","lines":["*"]}]}],[{"group":"doc","deltas":[{"start":{"row":482,"column":4},"end":{"row":482,"column":5},"action":"remove","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":482,"column":0},"end":{"row":482,"column":4},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":482,"column":0},"end":{"row":482,"column":4},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":482,"column":4},"end":{"row":482,"column":5},"action":"remove","lines":["*"]}]}],[{"group":"doc","deltas":[{"start":{"row":302,"column":0},"end":{"row":318,"column":7},"action":"remove","lines":["    it(\"delete way\", function() {","        runs(function() {","            var response;","            ","            dao.deleteWay(testingWay._id, function(result) {","                response = result;","            })","            ","            waitsFor(function() {","                return response !== undefined;","            }, 'should return a status that is not undefined', 1000);","            ","            runs(function() {","                expect(response).toEqual('deleted');","            });  ","        });","    });"]}]}],[{"group":"doc","deltas":[{"start":{"row":301,"column":7},"end":{"row":302,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":301,"column":7},"end":{"row":302,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":555,"column":14},"end":{"row":555,"column":17},"action":"remove","lines":["ALL"]}]}],[{"group":"doc","deltas":[{"start":{"row":555,"column":13},"end":{"row":555,"column":14},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":555,"column":21},"end":{"row":556,"column":0},"action":"insert","lines":["",""]},{"start":{"row":556,"column":0},"end":{"row":556,"column":4},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":556,"column":4},"end":{"row":572,"column":7},"action":"insert","lines":["    it(\"delete way\", function() {","        runs(function() {","            var response;","            ","            dao.deleteWay(testingWay._id, function(result) {","                response = result;","            })","            ","            waitsFor(function() {","                return response !== undefined;","            }, 'should return a status that is not undefined', 1000);","            ","            runs(function() {","                expect(response).toEqual('deleted');","            });  ","        });","    });"]}]}],[{"group":"doc","deltas":[{"start":{"row":556,"column":4},"end":{"row":556,"column":8},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":538,"column":0},"end":{"row":553,"column":7},"action":"remove","lines":["    it(\"delete relation\", function() {","        runs(function() {","            var response;","            dao.deleteRelation(testingRelationForDeletion._id, function(result) {","                response = result;","            })","            ","            waitsFor(function() {","                return response !== undefined;","            }, 'should return a status that is not undefined', 1000);","            ","            runs(function() {","                expect(response).toEqual('deleted');","            });  ","        });","    });"]}]}],[{"group":"doc","deltas":[{"start":{"row":537,"column":7},"end":{"row":538,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":556,"column":7},"end":{"row":557,"column":0},"action":"insert","lines":["",""]},{"start":{"row":557,"column":0},"end":{"row":557,"column":4},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":557,"column":4},"end":{"row":572,"column":7},"action":"insert","lines":["    it(\"delete relation\", function() {","        runs(function() {","            var response;","            dao.deleteRelation(testingRelationForDeletion._id, function(result) {","                response = result;","            })","            ","            waitsFor(function() {","                return response !== undefined;","            }, 'should return a status that is not undefined', 1000);","            ","            runs(function() {","                expect(response).toEqual('deleted');","            });  ","        });","    });"]}]}],[{"group":"doc","deltas":[{"start":{"row":557,"column":0},"end":{"row":557,"column":4},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":479,"column":0},"end":{"row":479,"column":69},"action":"remove","lines":["                console.log(waysInRelation[waysInRelation.length-1]);"]}]}],[{"group":"doc","deltas":[{"start":{"row":478,"column":55},"end":{"row":479,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":479,"column":62},"end":{"row":479,"column":63},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":479,"column":63},"end":{"row":479,"column":64},"action":"insert","lines":["_"]}]}],[{"group":"doc","deltas":[{"start":{"row":479,"column":64},"end":{"row":479,"column":65},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":479,"column":65},"end":{"row":479,"column":66},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":479,"column":86},"end":{"row":479,"column":87},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":479,"column":87},"end":{"row":479,"column":88},"action":"insert","lines":["_"]}]}],[{"group":"doc","deltas":[{"start":{"row":479,"column":88},"end":{"row":479,"column":89},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":479,"column":89},"end":{"row":479,"column":90},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":518,"column":7},"end":{"row":519,"column":0},"action":"insert","lines":["",""]},{"start":{"row":519,"column":0},"end":{"row":519,"column":4},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":519,"column":4},"end":{"row":537,"column":7},"action":"insert","lines":["it(\"get ways in relation\", function() {","        runs(function() {","            var response;","            var waysInRelation;","            dao.getWaysInRelation(testingRelation._id, function(result, ways) {","                response = result;","                waysInRelation = ways;","            });","            ","            waitsFor(function() {","                return response !== undefined; ","            }, 'should return a status that is not undefined', 1000);","            ","            runs(function() {","                expect(response).toEqual('found ways');","                expect(waysInRelation[waysInRelation.length-1]._id).toEqual(testingWay._id); ","            });","        });","    });"]}]}],[{"group":"doc","deltas":[{"start":{"row":519,"column":12},"end":{"row":519,"column":16},"action":"remove","lines":["ways"]},{"start":{"row":519,"column":12},"end":{"row":519,"column":13},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":519,"column":13},"end":{"row":519,"column":14},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":519,"column":14},"end":{"row":519,"column":15},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":519,"column":15},"end":{"row":519,"column":16},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":519,"column":16},"end":{"row":519,"column":17},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":519,"column":17},"end":{"row":519,"column":18},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":519,"column":18},"end":{"row":519,"column":19},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":519,"column":19},"end":{"row":519,"column":20},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":519,"column":20},"end":{"row":519,"column":21},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":523,"column":19},"end":{"row":523,"column":23},"action":"remove","lines":["Ways"]},{"start":{"row":523,"column":19},"end":{"row":523,"column":20},"action":"insert","lines":["R"]}]}],[{"group":"doc","deltas":[{"start":{"row":523,"column":20},"end":{"row":523,"column":21},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":523,"column":21},"end":{"row":523,"column":22},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":523,"column":22},"end":{"row":523,"column":23},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":523,"column":23},"end":{"row":523,"column":24},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":523,"column":24},"end":{"row":523,"column":25},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":523,"column":25},"end":{"row":523,"column":26},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":523,"column":26},"end":{"row":523,"column":27},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":523,"column":27},"end":{"row":523,"column":28},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":522,"column":16},"end":{"row":522,"column":20},"action":"remove","lines":["ways"]},{"start":{"row":522,"column":16},"end":{"row":522,"column":17},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":522,"column":17},"end":{"row":522,"column":18},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":522,"column":18},"end":{"row":522,"column":19},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":522,"column":19},"end":{"row":522,"column":20},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":522,"column":20},"end":{"row":522,"column":21},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":522,"column":21},"end":{"row":522,"column":22},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":522,"column":22},"end":{"row":522,"column":23},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":522,"column":23},"end":{"row":522,"column":24},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":522,"column":24},"end":{"row":522,"column":25},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":525,"column":16},"end":{"row":525,"column":30},"action":"remove","lines":["waysInRelation"]},{"start":{"row":525,"column":16},"end":{"row":525,"column":35},"action":"insert","lines":["relationsInRelation"]}]}],[{"group":"doc","deltas":[{"start":{"row":534,"column":23},"end":{"row":534,"column":37},"action":"remove","lines":["waysInRelation"]},{"start":{"row":534,"column":23},"end":{"row":534,"column":42},"action":"insert","lines":["relationsInRelation"]}]}],[{"group":"doc","deltas":[{"start":{"row":534,"column":43},"end":{"row":534,"column":57},"action":"remove","lines":["waysInRelation"]},{"start":{"row":534,"column":43},"end":{"row":534,"column":62},"action":"insert","lines":["relationsInRelation"]}]}],[{"group":"doc","deltas":[{"start":{"row":523,"column":77},"end":{"row":523,"column":81},"action":"remove","lines":["ways"]},{"start":{"row":523,"column":77},"end":{"row":523,"column":78},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":523,"column":78},"end":{"row":523,"column":79},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":523,"column":79},"end":{"row":523,"column":80},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":523,"column":80},"end":{"row":523,"column":81},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":523,"column":81},"end":{"row":523,"column":82},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":523,"column":82},"end":{"row":523,"column":83},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":523,"column":83},"end":{"row":523,"column":84},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":523,"column":84},"end":{"row":523,"column":85},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":523,"column":85},"end":{"row":523,"column":86},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":525,"column":38},"end":{"row":525,"column":42},"action":"remove","lines":["ways"]},{"start":{"row":525,"column":38},"end":{"row":525,"column":47},"action":"insert","lines":["relations"]}]}],[{"group":"doc","deltas":[{"start":{"row":534,"column":86},"end":{"row":534,"column":96},"action":"remove","lines":["testingWay"]},{"start":{"row":534,"column":86},"end":{"row":534,"column":87},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":534,"column":87},"end":{"row":534,"column":88},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":534,"column":88},"end":{"row":534,"column":89},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":534,"column":89},"end":{"row":534,"column":90},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":534,"column":90},"end":{"row":534,"column":91},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":534,"column":91},"end":{"row":534,"column":92},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":534,"column":92},"end":{"row":534,"column":93},"action":"insert","lines":["g"]}]}],[{"group":"doc","deltas":[{"start":{"row":534,"column":93},"end":{"row":534,"column":94},"action":"insert","lines":["R"]}]}],[{"group":"doc","deltas":[{"start":{"row":534,"column":94},"end":{"row":534,"column":95},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":534,"column":86},"end":{"row":534,"column":95},"action":"remove","lines":["testingRe"]},{"start":{"row":534,"column":86},"end":{"row":534,"column":101},"action":"insert","lines":["testingRelation"]}]}],[{"group":"doc","deltas":[{"start":{"row":533,"column":48},"end":{"row":533,"column":52},"action":"remove","lines":["ways"]},{"start":{"row":533,"column":48},"end":{"row":533,"column":49},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":533,"column":49},"end":{"row":533,"column":50},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":533,"column":50},"end":{"row":533,"column":51},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":533,"column":51},"end":{"row":533,"column":52},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":533,"column":52},"end":{"row":533,"column":53},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":533,"column":53},"end":{"row":533,"column":54},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":533,"column":54},"end":{"row":533,"column":55},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":533,"column":55},"end":{"row":533,"column":56},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":533,"column":56},"end":{"row":533,"column":57},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":534,"column":86},"end":{"row":534,"column":101},"action":"remove","lines":["testingRelation"]},{"start":{"row":534,"column":86},"end":{"row":534,"column":112},"action":"insert","lines":["testingRelationForDeletion"]}]}]]},"ace":{"folds":[],"customSyntax":"javascript","scrolltop":6993,"scrollleft":0,"selection":{"start":{"row":521,"column":25},"end":{"row":521,"column":25},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":253,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1426611508867,"hash":"dd1a1346383d902998ec26a4cc693e1406127961"}