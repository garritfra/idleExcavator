import BaseUpgrade from "./BaseUpgrade";
import BigDouble from "./BigDouble";

export default class ClickerUpgrade extends BaseUpgrade {
  percentage: BigDouble;

  constructor(name: string, cost: BigDouble, percentage: BigDouble) {
    super(name, cost);
    this.percentage = percentage;
  }
}
