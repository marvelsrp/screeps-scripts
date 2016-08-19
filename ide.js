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