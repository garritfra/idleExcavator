import BaseUpgrade from "./BaseUpgrade";

export default class AutoUpgrade extends BaseUpgrade {
  constructor(cost, percentage) {
    super(cost);
    this.percentage = percentage;
  }

  getPercentage() {
    if ( this.amountBought % 10 == 0 && this.amountBought != 0)
    {
      this.percentage *= 2;
      console.log(this.percentage);
    }
    return this.percentage;
  }
}
