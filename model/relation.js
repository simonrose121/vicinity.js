// as this is a collection class i've decided not to initialise values on construction

// class constructor
var relation = function() {
    this.tags_ = [];
    this.nodes_ = [];
    this.ways_ = [];
    this.relations_ = [];
}

// class methods

// node methods
relation.prototype.addNode = function(node) {
    this.nodes_.push(node);
}

relation.prototype.removeNode = function(node) {
    var index = this.nodes_.indexOf(node);
    this.nodes_.splice(index);
}

relation.prototype.nodeExists = function(node) {
    var index = this.nodes_.indexOf(node);
    if(index > -1) {
        return true;
    }
    return false;
}

// tags methods
relation.prototype.addTag = function(tag) {
    this.tags_.push(tag);
}

relation.prototype.removeTag = function(tag) {
    var index = this.tags_.indexOf(tag);
    this.tags_.splice(index);
}

relation.prototype.tagExists = function(tag) {
    var index = this.tags_.indexOf(tag);
    if(index > -1) {
        return true;
    }
    return false;
}

// way methods
relation.prototype.addWay = function(way) {
    this.ways_.push(way);
}

relation.prototype.removeWay = function(way) {
    var index = this.way_.indexOf(way);
    this.ways_.splice(index);
}

relation.prototype.wayExists = function(way) {
    var index = this.ways_.indexOf(way);
    if(index > -1) {
        return true;
    }
    return false;
}

// relation methods
relation.prototype.addRelation = function(relation) {
    this.relations_.push(relation);
}

relation.prototype.removeRelation = function(relation) {
    var relations_ = this.relations_.indexOf(relation);
    this.ways_.splice(index);
}

relation.prototype.relationExists = function(relation) {
    var index = this.relations_.indexOf(relation);
    if(index > -1) {
        return true;
    }
    return false;
}

module.exports = relation;