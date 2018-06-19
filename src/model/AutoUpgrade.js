import BaseUpgrade from "./BaseUpgrade";
import BigDouble from "./BigDouble";

export default class AutoUpgrade extends BaseUpgrade {
  constructor(name, cost, percentage) {
    super(name, cost);
    this.percentage = percentage;
  }

  getPercentage() {
    return this.percentage;
  }
}
