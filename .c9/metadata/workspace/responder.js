{"filter":false,"title":"responder.js","tooltip":"/responder.js","undoManager":{"mark":100,"position":100,"stack":[[{"group":"doc","deltas":[{"start":{"row":1,"column":19},"end":{"row":1,"column":20},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":20},"end":{"row":1,"column":21},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":21},"end":{"row":1,"column":22},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":22},"end":{"row":1,"column":23},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":23},"end":{"row":1,"column":24},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":24},"end":{"row":1,"column":25},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":25},"end":{"row":1,"column":26},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":26},"end":{"row":1,"column":27},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":26},"end":{"row":1,"column":27},"action":"remove","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":25},"end":{"row":1,"column":26},"action":"remove","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":25},"end":{"row":1,"column":26},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":26},"end":{"row":1,"column":27},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":27},"end":{"row":1,"column":28},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":2,"column":1},"action":"remove","lines":["exports.respond = function(response, resp) {","    resp.writeHead(response.)","}"]},{"start":{"row":0,"column":0},"end":{"row":10,"column":1},"action":"insert","lines":["exports.respond = function(response, resp) {","\tresp.writeHead(response.respCode, {\"Content-Type\": \"text/plain\"});","\tif(response.respCode === 200) {","\t\tLogger.log(\"DEBUG\", \"Sending successful response\");","\t\tresp.write(JSON.stringify(response.content));","\t} else if (response.respCode === 404) {","\t\tLogger.log(\"DEBUG\", \"Sending page not found response\");","\t\tresp.write(response.respCode + \" Page Not Found\");","\t}","\tresp.end();","}"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":0},"end":{"row":7,"column":57},"action":"remove","lines":["\t\tLogger.log(\"DEBUG\", \"Sending page not found response\");"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":40},"end":{"row":7,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":0},"end":{"row":4,"column":53},"action":"remove","lines":["\t\tLogger.log(\"DEBUG\", \"Sending successful response\");"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":32},"end":{"row":4,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":32},"end":{"row":3,"column":0},"action":"insert","lines":["",""]},{"start":{"row":3,"column":0},"end":{"row":3,"column":5},"action":"insert","lines":["\t    "]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":5},"end":{"row":3,"column":6},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":6},"end":{"row":3,"column":7},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":7},"end":{"row":3,"column":8},"action":"insert","lines":["p"]},{"start":{"row":3,"column":8},"end":{"row":3,"column":9},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":8},"end":{"row":3,"column":9},"action":"remove","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":7},"end":{"row":3,"column":8},"action":"remove","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":7},"end":{"row":3,"column":8},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":8},"end":{"row":3,"column":9},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":9},"end":{"row":3,"column":10},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":10},"end":{"row":3,"column":11},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":11},"end":{"row":3,"column":12},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":12},"end":{"row":3,"column":13},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":13},"end":{"row":3,"column":14},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":14},"end":{"row":3,"column":15},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":15},"end":{"row":3,"column":16},"action":"insert","lines":["g"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":16},"end":{"row":3,"column":18},"action":"insert","lines":["()"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":17},"end":{"row":3,"column":18},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":18},"end":{"row":3,"column":19},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":19},"end":{"row":3,"column":20},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":20},"end":{"row":3,"column":21},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":22},"end":{"row":3,"column":24},"action":"insert","lines":["''"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":23},"end":{"row":3,"column":24},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":23},"end":{"row":3,"column":24},"action":"remove","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":22},"end":{"row":3,"column":24},"action":"remove","lines":["''"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":22},"end":{"row":3,"column":23},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":17},"end":{"row":3,"column":21},"action":"remove","lines":["resp"]},{"start":{"row":3,"column":17},"end":{"row":3,"column":18},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":18},"end":{"row":3,"column":19},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":19},"end":{"row":3,"column":20},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":20},"end":{"row":3,"column":21},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":21},"end":{"row":3,"column":22},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":22},"end":{"row":3,"column":23},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":23},"end":{"row":3,"column":24},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":24},"end":{"row":3,"column":25},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":25},"end":{"row":3,"column":26},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":26},"end":{"row":3,"column":27},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":27},"end":{"row":3,"column":28},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":28},"end":{"row":3,"column":29},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":29},"end":{"row":3,"column":30},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":30},"end":{"row":3,"column":31},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":31},"end":{"row":3,"column":32},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":32},"end":{"row":3,"column":33},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":0},"end":{"row":3,"column":35},"action":"remove","lines":["\t    console.log(response.content);"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":32},"end":{"row":3,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":13},"end":{"row":3,"column":28},"action":"remove","lines":["JSON.stringify("]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":29},"end":{"row":3,"column":30},"action":"remove","lines":[")"]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":53},"end":{"row":1,"column":63},"action":"remove","lines":["text/plain"]},{"start":{"row":1,"column":53},"end":{"row":1,"column":54},"action":"insert","lines":["h"]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":54},"end":{"row":1,"column":55},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":55},"end":{"row":1,"column":56},"action":"insert","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":56},"end":{"row":1,"column":57},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":57},"end":{"row":1,"column":58},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":57},"end":{"row":1,"column":58},"action":"remove","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":54},"end":{"row":1,"column":55},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":54},"end":{"row":1,"column":55},"action":"remove","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":53},"end":{"row":1,"column":54},"action":"remove","lines":["h"]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":52},"end":{"row":1,"column":53},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":53},"end":{"row":1,"column":54},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":53},"end":{"row":1,"column":54},"action":"remove","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":52},"end":{"row":1,"column":53},"action":"remove","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":53},"end":{"row":1,"column":54},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":54},"end":{"row":1,"column":55},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":55},"end":{"row":1,"column":56},"action":"insert","lines":["x"]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":56},"end":{"row":1,"column":57},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":57},"end":{"row":1,"column":58},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":58},"end":{"row":1,"column":59},"action":"insert","lines":["h"]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":58},"end":{"row":1,"column":62},"action":"remove","lines":["html"]},{"start":{"row":1,"column":58},"end":{"row":1,"column":59},"action":"insert","lines":["j"]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":59},"end":{"row":1,"column":60},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":60},"end":{"row":1,"column":61},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":61},"end":{"row":1,"column":62},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":58},"end":{"row":1,"column":62},"action":"remove","lines":["json"]},{"start":{"row":1,"column":58},"end":{"row":1,"column":59},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":59},"end":{"row":1,"column":60},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":60},"end":{"row":1,"column":61},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":61},"end":{"row":1,"column":62},"action":"insert","lines":["i"]},{"start":{"row":1,"column":62},"end":{"row":1,"column":63},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":63},"end":{"row":1,"column":64},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":63},"end":{"row":1,"column":64},"action":"remove","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":62},"end":{"row":1,"column":63},"action":"remove","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":62},"end":{"row":1,"column":63},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":8},"end":{"row":0,"column":15},"action":"remove","lines":["respond"]},{"start":{"row":0,"column":8},"end":{"row":0,"column":9},"action":"insert","lines":["w"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":9},"end":{"row":0,"column":10},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":10},"end":{"row":0,"column":11},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":11},"end":{"row":0,"column":12},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":12},"end":{"row":0,"column":13},"action":"insert","lines":["e"]}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":8,"column":1},"end":{"row":8,"column":1},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":16,"mode":"ace/mode/javascript"}},"timestamp":1425824981000,"hash":"7240c46e7b720baddcd93d7503024afd9ced0370"}