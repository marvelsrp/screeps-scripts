'use strict';

var Registry = require('Registry');

var CreepHarvester = require('Creep').extend({
    doWork: function() {
       
        var creep = this._creep;
        console.log('CreepHarvester doWork '+creep.name+' = '+creep.carry.energy+'/'+creep.carryCapacity);

        if(creep.carry.energy < creep.carryCapacity) {
            var source = Game.spawns.Spawn1.pos.findClosest(FIND_SOURCES);
            //var source = creep.pos.findClosest(Game.SOURCES);

            creep.moveTo(source);
            creep.harvest(source);
        } else {
            var target = Game.spawns.Spawn1;
            if (Registry.getRoleCount(creep.memory.role) > 4)
                 target = creep.room.controller;
            
            creep.moveTo(target);
            creep.transferEnergy(target);
            
        }
    }
});

module.exports = CreepHarvester;