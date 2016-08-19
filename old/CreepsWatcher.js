/**
 * Watches that we have sufficient amount of creeps
 */

'use strict';
var _ = require('lodash');
var Spawner = require('Spawner');
var Registry = require('Registry');
var creepsManager = require('CreepsManager');

module.exports = {
  watch: function() {
    console.log('watch');
    // this.checkForUnits();
    for (var id in Game.creeps) {

      var creep = creepsManager.getCreep(id);
      console.log('watch', creep);
      creep.doWork();
    }
  }

  // checkForUnits: function() {
  //   if (Game.spawns.Spawn1.energy != Game.spawns.Spawn1.energyCapacity)
  //       return;
  //
  //   var roomName = Game.spawns.Spawn1.pos.roomName;
  //   if (Game.rooms[roomName].controller.level == 1) {
  //     Spawner.createHarvester(Game.spawns.Spawn1);
  //   } else {
  //     if (!Registry.getRole('harvester')) {
  //       Spawner.createHarvester(Game.spawns.Spawn1);
  //     } else if (!Registry.getRole('builder')) {
  //       Spawner.createBuilder(Game.spawns.Spawn1);
  //     } else if (!Registry.getRole('guard')) {
  //       Spawner.createGuard(Game.spawns.Spawn1);
  //     }
  //   }
  // }
};
