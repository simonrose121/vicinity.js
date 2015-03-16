/*
OPEN STREET MAP API v0.6
A way is an ordered list of nodes which normally also has at least one tag or is
included within a Relation. A way can have between 2 and 2,000 nodes, although 
it's possible that faulty ways with zero or a single node exist. A way can be 
open or closed. A closed way is one whose last node on the way is also the first
on that way. A closed way may be interpreted either as a closed polyline, or an
area, or both.
*/


// as this is a collection class i've decided not to initialise values on construction

// class constructor
function way() {
    this.nodes_ = [];
    this.tags_ = [];
}

// node methods
way.prototype.addNode = function(node) {
    this.nodes_.push(node);
};

way.prototype.removeNode = function(node) {
    var index = this.nodes_.indexOf(node);
    this.nodes_.splice(index);
};

way.prototype.nodeExists = function(node) {
    var index = this.nodes_.indexOf(node);
    if(index > -1) {
        return true;
    }
    return false;
};

// tag methods
way.prototype.addTag = function(tag) {
    this.tags_.push(tag);
};

way.prototype.removeTag = function(tag) {
    var index = this.tags_.indexOf(tag);
    this.tags_.splice(index);
};

way.prototype.tagExists = function(tag) {
    var index = this.tags_.indexOf(tag);
    if(index > -1) {
        return true;
    }
    return false;
};

module.exports = way;