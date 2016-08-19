export class Manager{
  static state = {};
  static get(id) {

    if (typeof id != 'string') {
      id = id.name;
    }

    if (Game.getObjectById(id)) {
      return Manager.state[id];
    } else {
      throw new Error('The state with "' + id + '" doesn\'t exist');
    }
  }
  static set(id) {

    if (typeof id != 'string') {
      id = id.name;
    }

    if (Manager.state.hasOwnProperty(id)) {
      return Manager.state[id];
    } else {
      throw new Error('The state with "' + id + '" doesn\'t exist');
    }
  }
}
