'use strict';

module.exports = {
    getRole: function(role) {
        return Memory.Spawner.registry[role];
    },
     getRoleCount: function(role) {
        return Object.keys(Memory.Spawner.registry[role]).length;
    },

    addCreep: function (creep) {
        Memory.Spawner.registry[creep.memory.role][creep.name] = creep;
    },

    hasCreep: function(creep) {
           console.log('hasCreep',creep);
        if (typeof creep == 'string') {
            creep = Game.creeps[creep];
        } 
        
       
            
        var name = creep.name;
        var role = creep.memory.role;

        return Boolean(Memory.Spawner.registry[role][name]);
    }
};