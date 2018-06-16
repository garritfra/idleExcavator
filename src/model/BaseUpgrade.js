export default class BaseUpgrade {
  constructor(name, cost) {
    this.name = name;
    this.cost = cost;
    this.bought = false;
    this.amountBought = 0;
  }

  buy() {
    this.cost.times(1.5);
    this.amountBought++;
  }
}
