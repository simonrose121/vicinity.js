{"filter":false,"title":"relation.js","tooltip":"/handlers/relation.js","undoManager":{"mark":59,"position":59,"stack":[[{"group":"doc","deltas":[{"start":{"row":100,"column":2},"end":{"row":101,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":101,"column":0},"end":{"row":102,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":102,"column":0},"end":{"row":115,"column":2},"action":"insert","lines":["exports.listNodes = function(query, respond) {","    // validate query","    if (!query.id) {","        respond(new response(200, \"id not defined\"));","    } else {","        app.dao.getNodesInWay(query.id, function(result, nodes) {","            if (nodes) {","                respond(new response(200, JSON.stringify(nodes)));","            } else {","                respond(new response(200, \"no nodes found\"));","            }","        });","    }","};"]}]}],[{"group":"doc","deltas":[{"start":{"row":107,"column":16},"end":{"row":107,"column":29},"action":"remove","lines":["getNodesInWay"]},{"start":{"row":107,"column":16},"end":{"row":107,"column":17},"action":"insert","lines":["g"]}]}],[{"group":"doc","deltas":[{"start":{"row":107,"column":17},"end":{"row":107,"column":18},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":107,"column":18},"end":{"row":107,"column":19},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":107,"column":19},"end":{"row":107,"column":20},"action":"insert","lines":["N"]}]}],[{"group":"doc","deltas":[{"start":{"row":107,"column":20},"end":{"row":107,"column":21},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":107,"column":21},"end":{"row":107,"column":22},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":107,"column":22},"end":{"row":107,"column":23},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":107,"column":23},"end":{"row":107,"column":24},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":107,"column":16},"end":{"row":107,"column":24},"action":"remove","lines":["getNodes"]},{"start":{"row":107,"column":16},"end":{"row":107,"column":34},"action":"insert","lines":["getNodesInRelation"]}]}],[{"group":"doc","deltas":[{"start":{"row":191,"column":2},"end":{"row":192,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":192,"column":0},"end":{"row":193,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":193,"column":0},"end":{"row":206,"column":2},"action":"insert","lines":["exports.listNodes = function(query, respond) {","    // validate query","    if (!query.id) {","        respond(new response(200, \"id not defined\"));","    } else {","        app.dao.getNodesInRelation(query.id, function(result, nodes) {","            if (nodes) {","                respond(new response(200, JSON.stringify(nodes)));","            } else {","                respond(new response(200, \"no nodes found\"));","            }","        });","    }","};"]}]}],[{"group":"doc","deltas":[{"start":{"row":193,"column":12},"end":{"row":193,"column":17},"action":"remove","lines":["Nodes"]},{"start":{"row":193,"column":12},"end":{"row":193,"column":13},"action":"insert","lines":["W"]}]}],[{"group":"doc","deltas":[{"start":{"row":193,"column":13},"end":{"row":193,"column":14},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":193,"column":14},"end":{"row":193,"column":15},"action":"insert","lines":["y"]}]}],[{"group":"doc","deltas":[{"start":{"row":193,"column":15},"end":{"row":193,"column":16},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":198,"column":19},"end":{"row":198,"column":24},"action":"remove","lines":["Nodes"]},{"start":{"row":198,"column":19},"end":{"row":198,"column":20},"action":"insert","lines":["W"]}]}],[{"group":"doc","deltas":[{"start":{"row":198,"column":20},"end":{"row":198,"column":21},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":198,"column":21},"end":{"row":198,"column":22},"action":"insert","lines":["y"]}]}],[{"group":"doc","deltas":[{"start":{"row":198,"column":22},"end":{"row":198,"column":23},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":198,"column":61},"end":{"row":198,"column":66},"action":"remove","lines":["nodes"]},{"start":{"row":198,"column":61},"end":{"row":198,"column":62},"action":"insert","lines":["w"]}]}],[{"group":"doc","deltas":[{"start":{"row":198,"column":62},"end":{"row":198,"column":63},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":198,"column":63},"end":{"row":198,"column":64},"action":"insert","lines":["y"]}]}],[{"group":"doc","deltas":[{"start":{"row":198,"column":64},"end":{"row":198,"column":65},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":200,"column":57},"end":{"row":200,"column":62},"action":"remove","lines":["nodes"]},{"start":{"row":200,"column":57},"end":{"row":200,"column":61},"action":"insert","lines":["ways"]}]}],[{"group":"doc","deltas":[{"start":{"row":199,"column":16},"end":{"row":199,"column":21},"action":"remove","lines":["nodes"]},{"start":{"row":199,"column":16},"end":{"row":199,"column":20},"action":"insert","lines":["ways"]}]}],[{"group":"doc","deltas":[{"start":{"row":202,"column":46},"end":{"row":202,"column":51},"action":"remove","lines":["nodes"]},{"start":{"row":202,"column":46},"end":{"row":202,"column":50},"action":"insert","lines":["ways"]}]}],[{"group":"doc","deltas":[{"start":{"row":240,"column":2},"end":{"row":241,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":241,"column":0},"end":{"row":242,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":242,"column":0},"end":{"row":255,"column":2},"action":"insert","lines":["exports.listWays = function(query, respond) {","    // validate query","    if (!query.id) {","        respond(new response(200, \"id not defined\"));","    } else {","        app.dao.getWaysInRelation(query.id, function(result, ways) {","            if (ways) {","                respond(new response(200, JSON.stringify(ways)));","            } else {","                respond(new response(200, \"no ways found\"));","            }","        });","    }","};"]}]}],[{"group":"doc","deltas":[{"start":{"row":242,"column":12},"end":{"row":242,"column":17},"action":"remove","lines":["Ways "]},{"start":{"row":242,"column":12},"end":{"row":242,"column":13},"action":"insert","lines":["R"]}]}],[{"group":"doc","deltas":[{"start":{"row":242,"column":13},"end":{"row":242,"column":14},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":242,"column":14},"end":{"row":242,"column":15},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":242,"column":15},"end":{"row":242,"column":16},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":242,"column":16},"end":{"row":242,"column":17},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":242,"column":17},"end":{"row":242,"column":18},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":242,"column":18},"end":{"row":242,"column":19},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":242,"column":19},"end":{"row":242,"column":20},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":242,"column":20},"end":{"row":242,"column":21},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":242,"column":21},"end":{"row":242,"column":22},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":247,"column":61},"end":{"row":247,"column":65},"action":"remove","lines":["ways"]},{"start":{"row":247,"column":61},"end":{"row":247,"column":62},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":247,"column":62},"end":{"row":247,"column":63},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":247,"column":63},"end":{"row":247,"column":64},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":247,"column":64},"end":{"row":247,"column":65},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":247,"column":65},"end":{"row":247,"column":66},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":247,"column":66},"end":{"row":247,"column":67},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":247,"column":67},"end":{"row":247,"column":68},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":247,"column":68},"end":{"row":247,"column":69},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":247,"column":69},"end":{"row":247,"column":70},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":248,"column":16},"end":{"row":248,"column":20},"action":"remove","lines":["ways"]},{"start":{"row":248,"column":16},"end":{"row":248,"column":25},"action":"insert","lines":["relations"]}]}],[{"group":"doc","deltas":[{"start":{"row":249,"column":57},"end":{"row":249,"column":61},"action":"remove","lines":["ways"]},{"start":{"row":249,"column":57},"end":{"row":249,"column":66},"action":"insert","lines":["relations"]}]}],[{"group":"doc","deltas":[{"start":{"row":251,"column":46},"end":{"row":251,"column":50},"action":"remove","lines":["ways"]},{"start":{"row":251,"column":46},"end":{"row":251,"column":55},"action":"insert","lines":["relations"]}]}],[{"group":"doc","deltas":[{"start":{"row":247,"column":19},"end":{"row":247,"column":23},"action":"remove","lines":["Ways"]},{"start":{"row":247,"column":19},"end":{"row":247,"column":20},"action":"insert","lines":["R"]}]}],[{"group":"doc","deltas":[{"start":{"row":247,"column":20},"end":{"row":247,"column":21},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":247,"column":16},"end":{"row":247,"column":31},"action":"remove","lines":["getReInRelation"]},{"start":{"row":247,"column":16},"end":{"row":247,"column":27},"action":"insert","lines":["getRelation"]}]}],[{"group":"doc","deltas":[{"start":{"row":247,"column":27},"end":{"row":247,"column":28},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":247,"column":16},"end":{"row":247,"column":28},"action":"remove","lines":["getRelations"]},{"start":{"row":247,"column":16},"end":{"row":247,"column":38},"action":"insert","lines":["getRelationsInRelation"]}]}]]},"ace":{"folds":[],"scrolltop":3049,"scrollleft":0,"selection":{"start":{"row":242,"column":50},"end":{"row":242,"column":50},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":46,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1426611617906,"hash":"bb690966d4acb6714f44f0ae8c9e40e0c19cbcb8"}