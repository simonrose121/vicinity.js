/*
OPEN STREET MAP API v0.6
A node is one of the core elements in the OpenStreetMap data model. It consists 
of a single point in space defined by its latitude, longitude and node id.
*/

// class constructor
function node(lat, lon, alt) {
    this.lat_ = lat;
    this.lon_ = lon;
    this.alt_ = alt;
    this.tags_ = [];
}

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
}

module.exports = node;

// convert number to radians
Number.prototype.toRad = function() {
    return this * Math.PI / 180;
}