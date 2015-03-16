/*
OPEN STREET MAP API v0.6
A relation is one of the core data elements that consists of one or more tags 
and also an ordered list of one or more nodes, ways and/or relations as members 
which is used to define logical or geographic relationships between other 
elements. A member of a relation can optionally have a role which describe the 
part that a particular feature plays within a relation.
*/

// as this is a collection class i've decided not to initialise values on construction

// class constructor
var relation = function() {
    this.nodes_ = [];
    this.tags_ = [];
    this.ways_ = [];
    this.relations_ = [];
};

// class methods

// node methods
relation.prototype.nodeExists = function(node) {
    var index = this.nodes_.indexOf(node);
    if(index > -1) {
        return true;
    }
    return false;
};

// tags methods
relation.prototype.addTag = function(tag) {
    this.tags_.push(tag);
};

relation.prototype.removeTag = function(tag) {
    var index = this.tags_.indexOf(tag);
    this.tags_.splice(index);
};

relation.prototype.tagExists = function(tag) {
    var index = this.tags_.indexOf(tag);
    if(index > -1) {
        return true;
    }
    return false;
};

// way methods
relation.prototype.addWay = function(way) {
    this.ways_.push(way);
};

relation.prototype.removeWay = function(way) {
    var index = this.ways_.indexOf(way);
    this.ways_.splice(index);
};

relation.prototype.wayExists = function(way) {
    var index = this.ways_.indexOf(way);
    if(index > -1) {
        return true;
    }
    return false;
};

// relation methods
relation.prototype.addRelation = function(relation) {
    this.relations_.push(relation);
};

relation.prototype.removeRelation = function(relation) {
    var index = this.relations_.indexOf(relation);
    this.relations_.splice(index);
};

relation.prototype.relationExists = function(relation) {
    var index = this.relations_.indexOf(relation);
    if(index > -1) {
        return true;
    }
    return false;
};

module.exports = relation;