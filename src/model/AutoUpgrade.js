import BaseUpgrade from "./BaseUpgrade";

export default class AutoUpgrade extends BaseUpgrade {
  constructor(cost, percentage) {
    super(cost);
    this.percentage = percentage;
  }

  getPercentage() {
    return this.percentage;
  }
}
