import BigDouble from "./BigDouble";
import AutoUpgrade from "./AutoUpgrade";

exports.AutoUpgrades = [
  new AutoUpgrade("Worker", new BigDouble(1, 1), new BigDouble(1, -1)),
  new AutoUpgrade("Vacuum Cleaner", new BigDouble(1.5, 2), new BigDouble(1, 0)),
  new AutoUpgrade("Wheelbarrow", new BigDouble(2, 3), new BigDouble(1.5, 1))
];
