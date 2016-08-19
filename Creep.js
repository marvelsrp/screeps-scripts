'use strict';

var _ = require('lodash');

function Creep(creep) {
    this._creep = creep;
}

Creep.extend = require('extend');

_.extend(Creep.prototype, {
    doWork: function() {}
});

module.exports = Creep;