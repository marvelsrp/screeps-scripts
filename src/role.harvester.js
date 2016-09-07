'use strict';

export default class RoleHarvester{
  static body = [MOVE, WORK, WORK, CARRY];
  static cost = 300;
  static doWork(creep) {

    if (creep.carry.energy < creep.carryCapacity) {
      RoleHarvester._goToSource(creep);
    } else {
      RoleHarvester._goToSpawn(creep);
    }
  }
  static _goToSpawn(creep) {

    var spawn = Game.spawns[creep.memory.spawn];

    let action = creep.transfer(spawn, RESOURCE_ENERGY);

    if (action == ERR_NOT_IN_RANGE) {
      creep.moveTo(spawn);
    }
  }

  static _goToSource(creep) {
    if (!creep.memory.nearestSourceId) {
      creep.memory.nearestSourceId = creep.pos.findClosestByRange(FIND_SOURCES).id;
    }
    var target = Game.getObjectById(creep.memory.nearestSourceId);

    if (creep.harvest(target) == ERR_NOT_IN_RANGE) {
      creep.moveTo(target);
    }
  }
}
