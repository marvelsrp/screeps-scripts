'use strict';

var _ = require('lodash');
var Game = require('Game');

var creeps = {};

function ucFirst(str) {
    return str.length ? str[0].toUpperCase() + str.slice(1) : str;
}

function CreepsManager() {}

_.extend(CreepsManager.prototype, {
    getCreep: function(id) {
       
        if (typeof id != 'string') {
            id = id.name;
        }

        if (creeps[id]) {
            return creeps[id];
        } else {
            var creep = Game.creeps[id];
            if (!creep) {
                throw new Error('The creep with name "' + id + '" doesn\'t exist');
            }

            var Creep = require('Creep'+ucFirst(creep.memory.role));

            return new Creep(creep);
        }
    }
});

module.exports = new CreepsManager();