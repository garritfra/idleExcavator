import BaseUpgrade from "./BaseUpgrade";
import BigDouble from "./BigDouble";

export default class AutoUpgrade extends BaseUpgrade {
  constructor(name, cost, percentage) {
    super(name, cost);
    this.percentage = percentage;
  }

  getPercentage() {
    if ( this.amountBought % 10 == 0 && this.amountBought != 0)
    {
      this.percentage.times(2,0);
    }
    return this.percentage;
  }
}
