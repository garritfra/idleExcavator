import React, { Component } from "react";
import { Container, Button } from "reactstrap";
import Game from "../Game";

export default class UpgradesListComponent extends Component {
  handleClick(worker) {
    Game.getInstance().applyAutoUpgrade(worker);
  }

  render() {
    return (
      <Container>
        <h1>Upgrades</h1>
        <Button onClick={() => this.handleClick(Game.getInstance().upgradesList.worker)}>Buy Worker</Button>
        <Button onClick={() => this.handleClick(Game.getInstance().upgradesList.wheelbarrow)}>Buy Wheelbarrow</Button>
      </Container>
    );
  }
}
