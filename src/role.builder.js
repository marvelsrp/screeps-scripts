'use strict';

export default class RoleBuilder{
  static body = [MOVE, WORK, CARRY, CARRY, CARRY];
  static cost = 300;

  static doWork(creep) {
    if (creep.memory.building && creep.carry.energy == 0) {
      creep.memory.building = false;
      creep.say('transport');
    }
    if (!creep.memory.building && creep.carry.energy == creep.carryCapacity) {
      creep.memory.building = true;
      creep.say('building');
    }

    if (creep.memory.building) {
      var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
      if (targets.length) {
        creep.moveTo(targets[0]);
        creep.build(targets[0]);
      }
    } else {
      let spawn = Game.spawns[creep.memory.spawn];
      creep.moveTo(spawn);
      spawn.transferEnergy(creep);
    }
  }
}
