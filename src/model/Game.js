import BigDouble from "./BigDouble";
import { AutoUpgrades } from "../model/Upgrades";

let instance = null;

export default class Game {
  constructor(tickRate) {
    this.dirt = new BigDouble(0, 0);
    this.autoPercentage = new BigDouble(0, 0);
    this.clickerPercentage = 1.0;
    this.tickRate = tickRate;
    this.tick = this.tick.bind(this);
    this.upgradesList = AutoUpgrades;
  }

  static getInstance() {
    if (!instance) {
      instance = new this(100);
    }
    return instance;
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
    //console.log( this.autoPercentage.getTimes(1000/Game.getInstance().getTickRate(), 0) );
    this.dirt.add(this.autoPercentage);
  }

  addDirt(amount) {
    this.dirt.addCount(amount, 0);
  }

  applyAutoUpgrade(upgrade) {
    if (this.dirt.subtract(upgrade.cost)) {
      upgrade.buy();
      this.autoPercentage.set(new BigDouble(0,0));
      if (this.upgradesList[0].amountBought > 0)
      this.autoPercentage.add(
        this.upgradesList[0]
          .getPercentage()
          .getTimes(this.upgradesList[0].amountBought, 0)
      );
      if (this.upgradesList[1].amountBought > 0)
      this.autoPercentage.add(
        this.upgradesList[1]
          .getPercentage()
          .getTimes(this.upgradesList[1].amountBought, 0)
      );
      if (this.upgradesList[2].amountBought > 0)
      this.autoPercentage.add(
        this.upgradesList[2]
          .getPercentage()
          .getTimes(this.upgradesList[2].amountBought, 0)
      );
    }
  }
}
