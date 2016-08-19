'use strict';

export default class RoleUpgrader{
  static body = [MOVE, WORK, CARRY];
  static cost = 200;
  static doWork(creep) {
    if (creep.memory.upgrading && creep.carry.energy == 0) {
      creep.memory.upgrading = false;
      creep.say('transport');
    }
    if (!creep.memory.upgrading && creep.carry.energy == creep.carryCapacity) {
      creep.memory.upgrading = true;
      creep.say('upgrading');
    }

    if (creep.memory.upgrading) {
      if (creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
        creep.moveTo(creep.room.controller);
      }
    } else {
      let spawn = Game.spawns[creep.memory.spawn];
      creep.moveTo(spawn);
      spawn.transferEnergy(creep);
    }
  }
}
