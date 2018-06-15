export default class BaseUpgrade {
  constructor(cost) {
    this.cost = cost;
    this.bought = false;
    this.amountBought = 0;
  }

  getCost() {
    return this.cost;
  }

  buy() {
    this.cost.times(1.5);
    console.log(this.cost);
    this.amountBought++;
  }
}
