import BaseUpgrade from "./BaseUpgrade";

export default class ClickerUpgrade extends BaseUpgrade {
  constructor(cost, percentage) {
    super(cost);
    this.percentge = percentage;
  }
}
