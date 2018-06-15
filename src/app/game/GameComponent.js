import React, { Component } from "react";
import { Button, Container } from "reactstrap";
import BigDouble from "../../model/BigDouble";
import Game from "./Game";
import DirtComponent from "./dirtComponent/DirtComponent";

export default class GameComponent extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.game = Game.getInstance();
  }

  render() {
    return (
      <Container>
        <DirtComponent />
      </Container>
    );
  }
}
