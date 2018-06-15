export default class BaseUpgrade {
  constructor(cost) {
    this.cost = cost;
    this.bought = false;
  }

  getCost() {
    return this.cost;
  }
}
