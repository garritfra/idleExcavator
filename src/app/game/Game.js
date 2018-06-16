import BigDouble from "../../model/BigDouble";
import AutoUpgrade from "../../model/AutoUpgrade";

let instance = null;

export default class Game {
  constructor(tickRate) {
    this.dirt = new BigDouble(1, 0);
    this.autoPercentage = 0;
    this.clickerPercentage = 1.0;
    this.tickRate = tickRate;
    this.tick = this.tick.bind(this);
    this.upgradesList = [
      new AutoUpgrade("worker", new BigDouble(1, 1), 0.1),
      new AutoUpgrade("wheelbarrow", new BigDouble(1, 2), 0.5)
    ];
  }

  static getInstance() {
    if (!instance) {
      instance = new this(100);
    }
    return instance;
  }

  loadGame(newGame) {
    for (var property in instance) {
      instance[property] = newGame[property];
    }
    console.log(instance);
  }

  getUpgradeList() {
    return this.upgradesList;
  }

  getTickRate() {
    return this.tickRate;
  }

  getDirt() {
    return this.dirt;
  }

  click() {
    this.addDirt(this.clickerPercentage);
  }

  tick() {
    this.dirt.addCount(this.autoPercentage, 0);
  }

  addDirt(amount) {
    this.dirt.addCount(amount, 0);
  }

  applyAutoUpgrade(upgrade) {
    if (this.dirt.subtract(upgrade.cost)) {
      upgrade.buy();
      this.autoPercentage += upgrade.getPercentage();
    }
  }
}
