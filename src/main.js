import Spawner from './spawner';

for(var name in Memory.creeps) {
  if(!Game.creeps[name]) {
    delete Memory.creeps[name];
    console.log('Clearing non-existing creep memory:', name);
  }
}

var Spawn1 = new Spawner('Spawn1');
Spawn1.watch();
