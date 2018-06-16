import React, { Component } from "react";
import { Container, Button } from "reactstrap";
import Game from "../Game";
import UpgradeComponent from "./upgradeComponent/UpgradeComponent";

export default class UpgradesListComponent extends Component {
  handleClick(worker) {
    Game.getInstance().applyAutoUpgrade(worker);
  }

  render() {
    const upgradeComponents = Game.getInstance()
      .getUpgradeList()
      .map(upgrade => {
        return <UpgradeComponent upgrade={upgrade} />;
      });

    return (
      <Container>
        <h1>Upgrades</h1>
        <div>{upgradeComponents}</div>
      </Container>
    );
  }
}
