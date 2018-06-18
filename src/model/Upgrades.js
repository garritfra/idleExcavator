import BigDouble from "./BigDouble";
import AutoUpgrade from "./AutoUpgrade";

exports.AutoUpgrades = [
  new AutoUpgrade("Worker", new BigDouble(1, 1), new BigDouble(0.1, 0)),
  new AutoUpgrade("Vacuum", new BigDouble(1, 3), new BigDouble(1, 0)),
  new AutoUpgrade("Wheelbarrow", new BigDouble(1, 5), new BigDouble(0.5, 0))
];
