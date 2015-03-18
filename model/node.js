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
    var R = 6371000; // earths radius in metres
    
    // convert points to radians
    var lat1 = this.lat_.toRad();
    var lat2 = otherNode.lat_.toRad();
    var deltaLat = (otherNode.lat_-this.lat_).toRad();
    var deltaLon = (otherNode.lon_-this.lon_).toRad();
    
    // haversine formula
    var a = Math.sin(deltaLat/2) * Math.sin(deltaLat/2) +
            Math.cos(lat1) * Math.cos(lat2) *
            Math.sin(deltaLon/2) * Math.sin(deltaLon/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c;
    return Math.round(d);   //round to metres
};

node.prototype.midpoint = function(otherNode) {
    // convert points to radians
    var lat1 = this.lat_.toRad();
    var lat2 = otherNode.lat_.toRad();
    var lon1 = this.lon_.toRad();
    var lon2 = otherNode.lon_.toRad();
    
    var bx = Math.cos(lat2) * Math.cos(lon2 - lon2);
    var by = Math.cos(lat2) * Math.sin(lon2 - lon1);
    var lat3 = Math.atan2(Math.sin(lat1) + Math.sin(lat2),
                        Math.sqrt((Math.cos(lat1)+bx)*(Math.cos(lat1)+bx) + by*by));
    var lon3 = lon1 + Math.atan2(by, Math.cos(lat1) + bx);
    return new node(parseFloat(lat3.toDeg().toFixed(6)), parseFloat(lon3.toDeg().toFixed(6)));
};

// number conversion methods
Number.prototype.toRad = function() {
    return this * Math.PI / 180;
};

Number.prototype.toDeg = function() {
    return this * 180 / Math.PI;
};

module.exports = node;

