import React, { Component } from "react";
import { Container, Button } from "reactstrap";
import Game from "../Game";

export default class UpgradesListComponent extends Component {
  handleClick() {
    Game.getInstance().applyAutoUpgrade(Game.getInstance().upgradesList.worker);
  }

  render() {
    return (
      <Container>
        <h1>Upgrades</h1>
        <Button onClick={this.handleClick}>Buy Worker</Button>
      </Container>
    );
  }
}
