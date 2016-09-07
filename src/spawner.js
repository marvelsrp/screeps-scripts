import RoleHarvester from './role.harvester';
import RoleUpgrader from './role.upgrader';
import RoleBuilder from './role.builder';
import _ from 'lodash';

//noinspection JSUnresolvedVariable
export default class Spawner {
  constructor(name) {
    this.spawn = Game.spawns[name];
  }

  watch() {
    var harvesterCount = (_.filter(Game.creeps, (creep) => creep.memory.role == 'harvester')).length;
    for (var i in Game.creeps) {
      var creep = Game.creeps[i];
      switch (creep.memory.role) {
        case 'harvester':
          RoleHarvester.doWork(creep);
          break;
        case 'upgrader':
          if (harvesterCount >= 3) {//don't grab spawn for create harvester
            RoleUpgrader.doWork(creep);
          }

          break;
        case 'builder':
          if (harvesterCount >= 3) {//don't grab spawn for create harvester
            RoleBuilder.doWork(creep);
          }
          break;
      }
    }

    this._limitRenew(Game.creeps, 'harvester', 3);

    if (harvesterCount >= 3) {//don't grab spawn for create harvester
      this._limitRenew(Game.creeps, 'builder', 1);
      this._limitRenew(Game.creeps, 'upgrader', 1);
    }

  }

  _limitRenew(creeps, type, count) {

    var typeCreeps = _.filter(creeps, (creep) => creep.memory.role == type);

    if (typeCreeps.length < count && this._canCreateCreep(type)) {
      let count = 0;
      if (Memory.Spawner.registry[type]) {
        count += Object.keys(Memory.Spawner.registry[type]).length;
      }

      let name = type + (count  + 1) + '_' + Math.floor(Math.random() * 101);
      this._createCreep(type, name);
    }
  }
  _canCreateCreep(type) {
    let condition = this.spawn.spawning == null || this.spawn.spawning == undefined;
    switch (type) {
      case 'harvester':
        condition &= this.spawn.energy >= RoleHarvester.cost;
        break;
      case 'upgrader':
        condition &= this.spawn.energy >= RoleUpgrader.cost;
        break;
      case 'builder':
        condition &= this.spawn.energy >= RoleBuilder.cost;
        break;
    }
    return condition;
  }

  _createCreep(type, name) {
    console.log('_createCreep', type, name);
    switch (type) {
      case 'harvester':
        console.log('_createCreep', this.spawn.createCreep(RoleHarvester.body, name, {role: 'harvester', spawn: this.spawn.name}));
        break;
      case 'upgrader':
        this.spawn.createCreep(RoleUpgrader.body, name, {role: 'upgrader', spawn: this.spawn.name});
        break;
      case 'builder':
        this.spawn.createCreep(RoleBuilder.body, name, {role: 'builder', spawn: this.spawn.name});
        break;
    }
  }

  static killAll(role) {
    for (var i in Game.creeps) {
      if (role == undefined || Game.creeps[i].memory.role == role) {
        Game.creeps[i].suicide();
      }
    }
  }
}
