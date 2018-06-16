import BigDouble from "./BigDouble";

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
    console.log(this);
    this.amountBought++;
    if ( this.amountBought == 1) return;
    this.cost.times(1.5,0);
  }
}
