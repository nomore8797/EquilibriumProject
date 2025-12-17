export default class Core {
  constructor(name = 'CoreModule') {
    this.name = name;
    this.state = 'init';
  }

  getStatus() {
    return this.state;
  }

  setStatus(newState) {
    this.state = newState;
  }
}