// class constructor
var tag = function(key, value) {
    this.key = key;
    this.value = value;
}

// class methods

// a tag is closed if the last node is also the first node
tag.prototype.isClosed = function()
{
    
}

// getters

// setters

module.exports = tag;