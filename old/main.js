var creepsManager = require('CreepsManager');
console.log('TICK',  Object.keys(Game.creeps));


for (var id in Game.creeps) {
  var creep = creepsManager.getCreep(id);
  console.log('watch', creep);
  creep.doWork();
}