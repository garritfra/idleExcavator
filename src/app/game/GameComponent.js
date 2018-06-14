import React, { Component } from "react";
import { Button, Container } from "reactstrap";
import BigDouble from "../../model/BigDouble";
import Game from "./Game";

export default class GameComponent extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.game = new Game(1000);
  }

  componentDidMount() {
    const tickRate = this.game.getTickRate();
    setInterval(this.game.tick, tickRate);
    setInterval(this.forceUpdate.bind(this), tickRate);
  }

  handleClick() {
    this.game.click();
    this.forceUpdate();
  }

  updateDirt() {
    this.d1.addCount(1, 0);
    this.forceUpdate();
  }

  render() {
    return (
      <Container>
        <span>
          <Button onClick={this.handleClick.bind(this)}>Click Me!</Button>
        </span>
        <span>
          <h1>{this.game.getDirt().toString()}</h1>
        </span>
      </Container>
    );
  }
}
