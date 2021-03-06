var node = require('./handlers/node');
var way = require('./handlers/way');
var relation = require('./handlers/relation');

exports.apiHandles = {
	// node handles
    '/node/create' : node.create,
	'/node/update' : node.update,
	'/node/list' : node.list,
	'/node/get' : node.get,
	'/node/delete' : node.delete,
	'/node/tag/add' : node.addTag,
	'/node/tag/remove' : node.removeTag,
	
	// way handles
	'/way/create' : way.create,
	'/way/get' : way.get,
	'/way/list' : way.list,
	'/way/delete' : way.delete,
	'/way/node/add' : way.addNode,
	'/way/node/remove' : way.removeNode,
	'/way/node/list' : way.listNodes,
	'/way/tag/add' : way.addTag,
	'/way/tag/remove' : way.removeTag,
	
	// relation handles
	'/relation/create' : relation.create,
	'/relation/get' : relation.get,
	'/relation/list' : relation.list,
	'/relation/delete' : relation.delete,
	'/relation/node/add' : relation.addNode,
	'/relation/node/remove' : relation.removeNode,
	'/relation/node/list' : relation.listNodes,
	'/relation/tag/add' : relation.addTag,
	'/relation/tag/remove' : relation.removeTag,
	'/relation/way/add' : relation.addWay,
	'/relation/way/remove' : relation.removeWay,
	'/relation/way/list' : relation.listWays,
	'/relation/relation/add' : relation.addRelation,
	'/relation/relation/remove' : relation.removeRelation,
	'/relation/relation/list' : relation.listRelations
};