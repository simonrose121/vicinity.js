// class constructor
function node(lat, lon, alt) {
    this.lat_ = lat;
    this.lon_ = lon;
    this.alt_ = alt;
}

node.prototype.distance = function(otherNode) {
    var R = 6371000; // earths radius in metres
    var φ1 = this._lat.toRad();
    var φ2 = otherNode._lat.toRad();
    var Δφ = (otherNode._lat-this._lat).toRad();
    var Δλ = (otherNode._lon-this._lon).toRad();
    
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