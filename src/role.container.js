'use strict';

export default class RoleContainer{
  static body = [MOVE, MOVE, CARRY, CARRY, CARRY, CARRY];
  static cost = 300;
  static doWork(creep) {

    if (creep.carry.energy < creep.carryCapacity) {
      RoleContainer._goToContainer(creep);
    } else {
      RoleContainer._goToSpawn(creep);
    }
  }
  static _goToSpawn(creep) {

    var spawn = Game.spawns[creep.memory.spawn];

    let action = creep.transfer(spawn, RESOURCE_ENERGY);

    if (action == ERR_NOT_IN_RANGE) {
      creep.moveTo(spawn);
    }
  }

  static _goToContainer(creep) {
    var target = Game.getObjectById(creep.memory.containerId);
    if (creep.harvest(target) == ERR_NOT_IN_RANGE) {
      creep.moveTo(target);
    }
  }
}
