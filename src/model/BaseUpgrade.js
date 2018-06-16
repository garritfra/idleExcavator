import BigDouble from "./BigDouble";

export default class BaseUpgrade {
  constructor(name, cost) {
    this.name = name;
    this.cost = cost;
    this.bought = false;
    this.amountBought = 0;
  }

  buy() {
    this.amountBought++;
    if ( this.amountBought == 1) return;
    this.cost.times(1.5,0);
  }
}
