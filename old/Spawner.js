'use strict';

var MAX_PARTS = 5; // max creep parts, that can be assembled by default spawn point

var Memory = require('Memory');
var Registry = require('Registry');

Memory.Spawner = Memory.Spawner || {
  registry:{
    harvesters: {},
    guards: {},
    builders: {}
  }
};

module.exports = {
  createCarrier: function(spawn) {
    console.log('Spawner.createCarrier');
    this._createCreep(spawn, [MOVE, WORK, CARRY, CARRY], {
      role: 'harvester',
      spawn: spawn.name
    });
  },

  createHarvester: function(spawn) {
    console.log('Spawner.createHarvester');
    this._createCreep(spawn, [MOVE, WORK, WORK, CARRY], {
      role: 'harvester',
      spawn: spawn.name
    });
  },

  createBuilder: function(spawn) {
    console.log('Spawner.createBuilder');
    this._createCreep(spawn, [WORK, CARRY, CARRY, MOVE, MOVE], {
      role: 'builder',
      spawn: spawn.name
    });
  },

  createGuard: function(spawn) {
    console.log('Spawner.createGuard');
    this._createCreep(spawn, [TOUGH, ATTACK, ATTACK, MOVE, MOVE], {
      role: 'guard',
      spawn: spawn.name
    });
  },

  createHealer: function(spawn) {
    },

  _createCreep: function(spawn, body, memory) {

    var name = this.getCreepName(memory.role);

    console.log('_createCreep', body, name, memory.role);
    var result = spawn.createCreep(body, name, memory);

    switch (result) {
      case -1:
        throw new Error('[Spawner]: You are not the owner of this spawn.');
      case -3:
        throw new Error('[Spawner]: There is a creep with the same name already.');
      case -4:
        throw new Error('[Spawner]: The spawn is already in process of spawning another creep.');
      case -6:
        throw new Error('[Spawner]: The spawn contains not enough energy to create a creep with the given body.');
      case -10:
        throw new Error('[Spawner]: Body is not properly described.');
    }
    Registry.addCreep(Game.creeps[name]);
  },

  getCreepName: function(role) {
    var id = Registry.getRoleCount(role) + 1000;
    console.log('getCreepName', role + id);
    return role + id;
  },

  killAll: function(role) {
    for (var i in Game.creeps) {
      if (role == undefined || Game.creeps[i].memory.role == role)
          Game.creeps[i].suicide();
    }
  }
};
