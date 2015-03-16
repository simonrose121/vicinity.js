/*
OPEN STREET MAP API v0.6
A Tag consists of 'Key' and a 'Value'. Each tag describes a specific feature of 
a data element (nodes, ways and relations) or changesets. Both the key and value 
are free format text fields. In practice, however, there are agreed conventions
of how tags are used for most common purposes.
*/

// class constructor
var tag = function(key, value) {
    // deal with null values?
    this.key_ = key;
    this.value_ = value;
};

module.exports = tag;