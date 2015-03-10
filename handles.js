var node = require('./handlers/node');
var way = require('./handlers/way');
var relation = require('./handlers/relation');

exports.handle = {
    '/node/create' : node.create,
	'/node/update' : node.update,
	'/node/list' : node.list,
	'/node/get' : node.get,
	'/node/delete' : node.delete,
	'/node/tag/add' : node.addTag,
	'/node/tag/remove' : node.removeTag,
	
	'/way/create' : way.create,
	'/way/get' : way.get,
	'/way/list' : way.list,
	'/way/delete' : way.delete,
	'/way/node/add' : way.addNode,
	'/way/node/remove' : way.removeNode,
	'/way/tag/add' : way.addTag,
	'/way/tag/remove' : way.removeTag
};