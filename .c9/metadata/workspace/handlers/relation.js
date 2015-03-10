{"filter":false,"title":"relation.js","tooltip":"/handlers/relation.js","undoManager":{"mark":100,"position":100,"stack":[[{"group":"doc","deltas":[{"start":{"row":74,"column":26},"end":{"row":74,"column":27},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":74,"column":27},"end":{"row":74,"column":28},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":105,"column":4},"end":{"row":111,"column":7},"action":"insert","lines":[" app.dao.addNodeToRelation(query.nodeId, query.relationId, function(result, relation) {","        if(relation) {","            respond(new response(200, JSON.stringify(relation)));","        } else {","            respond(new response(200, \"way not found\"));","        }","    });"]}]}],[{"group":"doc","deltas":[{"start":{"row":105,"column":4},"end":{"row":105,"column":5},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":95,"column":0},"end":{"row":101,"column":7},"action":"remove","lines":["    app.dao.addWayToRelation(query.wayId, query.relationId, function(result, relation) {","        if(relation) {","            respond(new response(200, JSON.stringify(relation)));","        } else {","            respond(new response(200, \"way not found\"));","        }","    });"]}]}],[{"group":"doc","deltas":[{"start":{"row":95,"column":0},"end":{"row":95,"column":4},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":95,"column":4},"end":{"row":101,"column":7},"action":"insert","lines":[" app.dao.removeNodeFromRelation(query.nodeId, query.relationId, function(result, relation) {","        if(relation) {","            respond(new response(200, JSON.stringify(relation)));","        } else {","            respond(new response(200, \"way not found\"));","        }","    });"]}]}],[{"group":"doc","deltas":[{"start":{"row":95,"column":4},"end":{"row":95,"column":5},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":95,"column":21},"end":{"row":95,"column":22},"action":"remove","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":95,"column":20},"end":{"row":95,"column":21},"action":"remove","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":95,"column":19},"end":{"row":95,"column":20},"action":"remove","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":95,"column":18},"end":{"row":95,"column":19},"action":"remove","lines":["N"]}]}],[{"group":"doc","deltas":[{"start":{"row":95,"column":18},"end":{"row":95,"column":19},"action":"insert","lines":["W"]}]}],[{"group":"doc","deltas":[{"start":{"row":95,"column":19},"end":{"row":95,"column":20},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":95,"column":20},"end":{"row":95,"column":21},"action":"insert","lines":["y"]}]}],[{"group":"doc","deltas":[{"start":{"row":95,"column":40},"end":{"row":95,"column":46},"action":"remove","lines":["nodeId"]},{"start":{"row":95,"column":40},"end":{"row":95,"column":41},"action":"insert","lines":["w"]}]}],[{"group":"doc","deltas":[{"start":{"row":95,"column":41},"end":{"row":95,"column":42},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":95,"column":42},"end":{"row":95,"column":43},"action":"insert","lines":["y"]}]}],[{"group":"doc","deltas":[{"start":{"row":95,"column":43},"end":{"row":95,"column":44},"action":"insert","lines":["I"]}]}],[{"group":"doc","deltas":[{"start":{"row":95,"column":44},"end":{"row":95,"column":45},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":95,"column":17},"end":{"row":95,"column":18},"action":"remove","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":95,"column":16},"end":{"row":95,"column":17},"action":"remove","lines":["v"]}]}],[{"group":"doc","deltas":[{"start":{"row":95,"column":15},"end":{"row":95,"column":16},"action":"remove","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":95,"column":14},"end":{"row":95,"column":15},"action":"remove","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":95,"column":13},"end":{"row":95,"column":14},"action":"remove","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":95,"column":12},"end":{"row":95,"column":13},"action":"remove","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":95,"column":12},"end":{"row":95,"column":13},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":95,"column":13},"end":{"row":95,"column":14},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":95,"column":14},"end":{"row":95,"column":15},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":105,"column":14},"end":{"row":105,"column":15},"action":"remove","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":105,"column":13},"end":{"row":105,"column":14},"action":"remove","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":105,"column":12},"end":{"row":105,"column":13},"action":"remove","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":105,"column":12},"end":{"row":105,"column":13},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":105,"column":13},"end":{"row":105,"column":14},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":105,"column":14},"end":{"row":105,"column":15},"action":"insert","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":105,"column":15},"end":{"row":105,"column":16},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":105,"column":16},"end":{"row":105,"column":17},"action":"insert","lines":["v"]}]}],[{"group":"doc","deltas":[{"start":{"row":105,"column":17},"end":{"row":105,"column":18},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":125,"column":4},"end":{"row":131,"column":7},"action":"insert","lines":["app.dao.removeNodeToRelation(query.nodeId, query.relationId, function(result, relation) {","        if(relation) {","            respond(new response(200, JSON.stringify(relation)));","        } else {","            respond(new response(200, \"way not found\"));","        }","    });"]}]}],[{"group":"doc","deltas":[{"start":{"row":125,"column":21},"end":{"row":125,"column":22},"action":"remove","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":125,"column":20},"end":{"row":125,"column":21},"action":"remove","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":125,"column":19},"end":{"row":125,"column":20},"action":"remove","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":125,"column":18},"end":{"row":125,"column":19},"action":"remove","lines":["N"]}]}],[{"group":"doc","deltas":[{"start":{"row":125,"column":18},"end":{"row":125,"column":19},"action":"insert","lines":["r"]},{"start":{"row":125,"column":19},"end":{"row":125,"column":20},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":125,"column":20},"end":{"row":125,"column":21},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":125,"column":20},"end":{"row":125,"column":21},"action":"remove","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":125,"column":19},"end":{"row":125,"column":20},"action":"remove","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":125,"column":18},"end":{"row":125,"column":19},"action":"remove","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":125,"column":18},"end":{"row":125,"column":19},"action":"insert","lines":["R"]}]}],[{"group":"doc","deltas":[{"start":{"row":125,"column":19},"end":{"row":125,"column":20},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":125,"column":20},"end":{"row":125,"column":21},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":125,"column":21},"end":{"row":125,"column":22},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":125,"column":22},"end":{"row":125,"column":23},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":125,"column":23},"end":{"row":125,"column":24},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":125,"column":24},"end":{"row":125,"column":25},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":125,"column":25},"end":{"row":125,"column":26},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":125,"column":27},"end":{"row":125,"column":28},"action":"remove","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":125,"column":27},"end":{"row":125,"column":28},"action":"insert","lines":["F"]}]}],[{"group":"doc","deltas":[{"start":{"row":125,"column":28},"end":{"row":125,"column":29},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":125,"column":28},"end":{"row":125,"column":29},"action":"remove","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":125,"column":27},"end":{"row":125,"column":28},"action":"remove","lines":["F"]}]}],[{"group":"doc","deltas":[{"start":{"row":125,"column":26},"end":{"row":125,"column":27},"action":"remove","lines":["T"]}]}],[{"group":"doc","deltas":[{"start":{"row":125,"column":26},"end":{"row":125,"column":27},"action":"insert","lines":["F"]}]}],[{"group":"doc","deltas":[{"start":{"row":125,"column":27},"end":{"row":125,"column":28},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":125,"column":28},"end":{"row":125,"column":29},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":125,"column":29},"end":{"row":125,"column":30},"action":"insert","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":105,"column":23},"end":{"row":105,"column":24},"action":"remove","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":105,"column":22},"end":{"row":105,"column":23},"action":"remove","lines":["T"]}]}],[{"group":"doc","deltas":[{"start":{"row":105,"column":22},"end":{"row":105,"column":23},"action":"insert","lines":["F"]}]}],[{"group":"doc","deltas":[{"start":{"row":105,"column":23},"end":{"row":105,"column":24},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":105,"column":24},"end":{"row":105,"column":25},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":105,"column":25},"end":{"row":105,"column":26},"action":"insert","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":125,"column":45},"end":{"row":125,"column":51},"action":"remove","lines":["nodeId"]},{"start":{"row":125,"column":45},"end":{"row":125,"column":46},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":125,"column":46},"end":{"row":125,"column":47},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":125,"column":47},"end":{"row":125,"column":48},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":125,"column":48},"end":{"row":125,"column":49},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":125,"column":49},"end":{"row":125,"column":50},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":125,"column":50},"end":{"row":125,"column":51},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":125,"column":51},"end":{"row":125,"column":52},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":125,"column":52},"end":{"row":125,"column":53},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":125,"column":53},"end":{"row":125,"column":54},"action":"insert","lines":["I"]}]}],[{"group":"doc","deltas":[{"start":{"row":125,"column":54},"end":{"row":125,"column":55},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":125,"column":45},"end":{"row":125,"column":55},"action":"remove","lines":["relationId"]},{"start":{"row":125,"column":45},"end":{"row":125,"column":60},"action":"insert","lines":["otherRelationId"]}]}],[{"group":"doc","deltas":[{"start":{"row":105,"column":41},"end":{"row":105,"column":47},"action":"remove","lines":["nodeId"]},{"start":{"row":105,"column":41},"end":{"row":105,"column":42},"action":"insert","lines":["w"]}]}],[{"group":"doc","deltas":[{"start":{"row":105,"column":42},"end":{"row":105,"column":43},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":105,"column":43},"end":{"row":105,"column":44},"action":"insert","lines":["y"]}]}],[{"group":"doc","deltas":[{"start":{"row":105,"column":44},"end":{"row":105,"column":45},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":105,"column":45},"end":{"row":105,"column":46},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":105,"column":45},"end":{"row":105,"column":46},"action":"remove","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":105,"column":44},"end":{"row":105,"column":45},"action":"remove","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":105,"column":44},"end":{"row":105,"column":45},"action":"insert","lines":["I"]}]}],[{"group":"doc","deltas":[{"start":{"row":105,"column":45},"end":{"row":105,"column":46},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":95,"column":21},"end":{"row":95,"column":22},"action":"remove","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":95,"column":20},"end":{"row":95,"column":21},"action":"remove","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":95,"column":19},"end":{"row":95,"column":20},"action":"remove","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":95,"column":18},"end":{"row":95,"column":19},"action":"remove","lines":["F"]}]}],[{"group":"doc","deltas":[{"start":{"row":95,"column":18},"end":{"row":95,"column":19},"action":"insert","lines":["T"]}]}],[{"group":"doc","deltas":[{"start":{"row":95,"column":19},"end":{"row":95,"column":20},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":105,"column":18},"end":{"row":105,"column":22},"action":"remove","lines":["Node"]},{"start":{"row":105,"column":18},"end":{"row":105,"column":19},"action":"insert","lines":["W"]}]}],[{"group":"doc","deltas":[{"start":{"row":105,"column":19},"end":{"row":105,"column":20},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":105,"column":20},"end":{"row":105,"column":21},"action":"insert","lines":["y"]}]}]]},"ace":{"folds":[],"scrolltop":1307.5,"scrollleft":0,"selection":{"start":{"row":110,"column":9},"end":{"row":110,"column":9},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":92,"state":"no_regex","mode":"ace/mode/javascript"}},"timestamp":1426028115919,"hash":"bcf64951e6634a2da1c16fe3ab4402fa3acfb0ae"}