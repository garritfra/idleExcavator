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
    if ( this.amountBought % 10 == 0 && this.amountBought != 0)
    {
      this.percentage.log();
      this.percentage.times(1.2,0);
      this.percentage.log();
    }
    this.cost.times(1.2,0);
  }
}
