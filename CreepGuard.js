'use strict';

var CreepGuard = require('Creep').extend({
    doWork: function() {
        var creep = this._creep;

        var targets = creep.room.find(Game.HOSTILE_CREEPS);
        if(targets.length) {
            creep.moveTo(targets[0]);
            creep.attack(targets[0]);
        }
    }
});

module.exports = CreepGuard;