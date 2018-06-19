import BigDouble from "./BigDouble";
import { AutoUpgrades } from "../model/Upgrades";
import BaseUpgrade from "./BaseUpgrade";
import AutoUpgrade from "./AutoUpgrade";

let instance: Game = null;

export default class Game {
  dirt: BigDouble;
  autoPercentage: BigDouble;
  clickerPercentage: number;
  tickRate: number;
  autoUpgradesList: Array<AutoUpgrade>;

  constructor(tickRate: number) {
    this.dirt = new BigDouble(0, 0);
    this.autoPercentage = new BigDouble(0, 0);
    this.clickerPercentage = 1.0;
    this.tickRate = tickRate;
    this.tick = this.tick.bind(this);
    this.autoUpgradesList = AutoUpgrades;
  }

  static getInstance(): Game {
    if (!instance) {
      instance = new this(100);
    }
    return instance;
  }

  getUpgradeList() {
    return this.autoUpgradesList;
  }

  getTickRate() {
    return this.tickRate;
  }

  getDirt(): BigDouble {
    return this.dirt;
  }

  click() {
    this.addDirt(this.clickerPercentage);
  }

  tick() {
    //console.log( this.autoPercentage.getTimes(1000/Game.getInstance().getTickRate(), 0) );
    this.dirt.add(this.autoPercentage);
  }

  addDirt(amount: number) {
    this.dirt.addCount(amount, 0);
  }

  applyAutoUpgrade(upgrade: BaseUpgrade) {
    if (this.dirt.subtract(upgrade.cost)) {
      upgrade.buy();
      this.autoPercentage.set(new BigDouble(0, 0));
      if (this.autoUpgradesList[0].amountBought > 0)
        this.autoPercentage.add(
          this.autoUpgradesList[0]
            .getPercentage()
            .getTimes(this.autoUpgradesList[0].amountBought, 0)
        );
      if (this.autoUpgradesList[1].amountBought > 0)
        this.autoPercentage.add(
          this.autoUpgradesList[1]
            .getPercentage()
            .getTimes(this.autoUpgradesList[1].amountBought, 0)
        );
      if (this.autoUpgradesList[2].amountBought > 0)
        this.autoPercentage.add(
          this.autoUpgradesList[2]
            .getPercentage()
            .getTimes(this.autoUpgradesList[2].amountBought, 0)
        );
    }
  }
}
