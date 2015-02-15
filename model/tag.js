// class constructor
var tag = function(key, value) {
    // deal with null values?
    this.key_ = key;
    this.value_ = value;
}

// class methods

// a tag is closed if the last node is also the first node
tag.prototype.isClosed = function()
{
    
}

// getters

// setters

module.exports = tag;