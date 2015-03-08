var node = require('./logic/node');

exports.handle = {
    '/node/create' : node.create,
	'/node/update' : node.update,
	'/node/list' : node.list,
	'/node/get' : node.get,
	'/node/delete' : node.delete
};