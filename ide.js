export class Game{
  static constructionSitesobject = {};
  static cpu = {
    getUsed: () => {}
  };
  static creeps = {};
  static flags = {};
  static gcl = {};
  static map = {};
  static market = {};
  static rooms = {};
  static spawns = [Spawn];
  static structures = {
    1: Spawn
  };
  static time = 1;
  static getObjectById = (id) => {};
  static notify = (message) => {};
  static MOVE = 50;
  static WORK = 100;
  static CARRY = 50;
  static ATTACK = 80;
  static RANGED_ATTACK = 150;
  static HEAL = 250;
  static CLAIM = 600;
  static TOUGH = 10;
}

export class Spawn {
  static energy = 1;
  static energyCapacity = 100;
  static memory = {};
  static name = 'test';
  static spawning = {};
  static canCreateCreep = (body, name) => {};
  static createCreep = (body, name, memory) => {};
  static recycleCreep = (target) => {};
  static renewCreep = (target) => {};
  static transferEnergy = (target, amount) => {}
}

export class Room {
  static controller = {};
  static energyAvailable = {};
  static energyCapacityAvailable = {};
  static memory = {};
  static mode = '';
  static storage = {};
  static terminal = {};
  static serializePath = (path) => {};
  static deserializePath = (path) => {};
  static createConstructionSite = (x, y, structureType)=> {};
  static createFlag = (x,y, name,color, seconaryColor) => {};
  static find = (type, opts) => {};
  static findExitTo = (room) => {};
  static findPath = (fromPos, toPos, opts) => {};
  static getPositionAt = (x,y) => {};
  static lookAt = (x,y) => {};
  static lookAtArea = (top, left, bottom, right, asArray) => {};
  static lookForAt = (type, x, y) => {};
  static lookForAtArea = (type, top, left, bottom, right, asArray) => {};
}

export class Memory{};
export class RawMemory {
  static get() {};
}
export class Creep{
  body = [];
  carry = {};
  carryCapacity = 1;
  fatigue = 1;
  hits = 1;
  hitsMax = 10;
  id = 'id';
  memory = {};
  my = true;
  name = 'Creep1';
  owner = {};
  saying = true;
  spawning = true;
  tickToLive = 1000;
  attack(target) {}
  attackController(target){}
  build(target){}
  cancelOrder(methodName){}
  claimController(target){}
  dismantle(target){}
  drop(resourceType, amount){}
  getActiveBodyparts(type){}
  harvest(target){}
  heal(target){}
  move(direction){}
  moveByPath(path){}
  moveTo(x,y){}
  notifyWhenAttacked(enabled){}
  pickup(target){}
  rangedAttack(target){}
  rangedHeal(target){}
  rangedMassAttack(){}
  repair(target){}
  reserveController(target){}
  say(message, public){}
  suicide(){}
  transfer(target, resourceType, amount){}
  upgradeController(target){}
  withdraw(target, resourceType, amount){}
};
export const FIND_SOURCES = 105;
export const ERR_NOT_IN_RANGE = -9;
export const RESOURCE_ENERGY = 'energy';
export const MOVE = 50;
export const WORK = 100;
export const CARRY = 50;
export const ATTACK = 80;
export const RANGED_ATTACK = 150;
export const HEAL = 250;
export const CLAIM = 600;
export const TOUGH = 10;
export const FIND_STRUCTURES = 0;
export const STRUCTURE_EXTENSION = 0;
export const STRUCTURE_SPAWN = 0;
export const STRUCTURE_TOWER = 0;
export const FIND_CONSTRUCTION_SITES = 0;
export const FIND_MY_STRUCTURES = 0;