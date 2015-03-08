/*
OPEN STREET MAP API v0.6
A node is one of the core elements in the OpenStreetMap data model. It consists 
of a single point in space defined by its latitude, longitude and node id.
*/

// class constructor
function node(lat, lon) {
    this.lat_ = lat;
    this.lon_ = lon;
    this.tags_ = [];
}

// mathmatical methods
node.prototype.distance = function(otherNode) {
    //TODO: remove unicode characters
    var R = 6371000; // earths radius in metres
    var φ1 = this.lat_.toRad();
    var φ2 = otherNode.lat_.toRad();
    var Δφ = (otherNode.lat_-this.lat_).toRad();
    var Δλ = (otherNode.lon_-this.lon_).toRad();
    
    var a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
            Math.cos(φ1) * Math.cos(φ2) *
            Math.sin(Δλ/2) * Math.sin(Δλ/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c;
    return Math.round(d);   //round to metres
};

// convert number to radians
Number.prototype.toRad = function() {
    return this * Math.PI / 180;
};

// tag methods
node.prototype.addTag = function(tag) {
    this.tags_.push(tag);
};

node.prototype.removeTag = function(tag) {
    var index = this.tags_.indexOf(tag);
    this.tags_.splice(index);
};

node.prototype.tagExists = function(tag) {
    var index = this.tags_.indexOf(tag);
    if(index > -1) {
        return true;
    }
    return false;
};

module.exports = node;

