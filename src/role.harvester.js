'use strict';

export default class RoleHarvester{
  static body = [MOVE, WORK, WORK, CARRY];
  static cost = 300;
  static doWork(creep) {

    if (creep.carry.energy < creep.carryCapacity) {
      RoleHarvester._goToSource(creep);
    } else {
      var targets = RoleHarvester._findTargets(creep);
      if (targets.length > 0) {
        RoleHarvester.goToTarget(creep, targets);
      } else {
        creep.say('No targets!');
        creep.moveTo(Game.spawns[creep.memory.spawn]);
      }
    }
  }
  static goToTarget(creep, targets, i = 0) {

    let action = creep.transfer(targets[i], RESOURCE_ENERGY);
    if (creep.name == 'harvester1') {
      console.log('goToTarget', action);
    }

    if (action == ERR_NOT_IN_RANGE) {
      creep.moveTo(targets[i]);
    }
  }

  static _goToSource(creep) {
    var sources = creep.room.find(FIND_SOURCES);
    if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
      creep.moveTo(sources[0]);
    }
  }
  static _findTargets(creep) {
    return creep.room.find(FIND_STRUCTURES, {
      filter: (structure) => {
        return (structure.structureType == STRUCTURE_EXTENSION ||
          structure.structureType == STRUCTURE_SPAWN ||
          structure.structureType == STRUCTURE_TOWER) && structure.energy < structure.energyCapacity;
      }
    });
  }
}
