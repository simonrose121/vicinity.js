// as this is a collection class i've decided not to initialise values on construction

// class constructor
function way() {
    this.nodes_ = [];
    this.tags_ = [];
}

// class methods

// node methods
way.prototype.addNode = function(node) {
    this.nodes_.push(node);
}

way.prototype.removeNode = function(node) {
    var index = this.nodes_.indexOf(node);
    this.nodes_.splice(index);
}

way.prototype.nodeExists = function(node) {
    var index = this.nodes_.indexOf(node);
    if(index > -1) {
        return true;
    }
    return false;
}


// tag methods
way.prototype.addTag = function(tag) {
    this.tags_.push(tag);
}

way.prototype.removeTag = function(tag) {
    var index = this.tags_.indexOf(tag);
    this.tags_.splice(index);
}

way.prototype.tagExists = function(tag) {
    var index = this.tags_.indexOf(tag);
    if(index > -1) {
        return true;
    }
    return false;
}

module.exports = way;