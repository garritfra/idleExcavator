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
    this.upgradesList = {
      worker: new AutoUpgrade(10, 0.1)
    };
  }

  static getInstance() {
    if (!instance) {
      instance = new this(100);
    }
    return instance;
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
    this.autoPercentage += upgrade.getPercentage();
    this.addDirt(-upgrade.getCost());
  }
}