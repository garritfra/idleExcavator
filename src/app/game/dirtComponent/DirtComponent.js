import React, { Component } from "react";
import { Container, Button } from "reactstrap";
import Game from "../Game";

export default class DirtComponent extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  componentDidMount() {
    const tickRate = Game.getInstance().getTickRate();
    setInterval(Game.getInstance().tick, tickRate);
    setInterval(this.forceUpdate.bind(this), tickRate);
  }

  handleClick() {
    Game.getInstance().click();
    this.forceUpdate();
  }

  updateDirt() {
    this.d1.addCount(1, 0);
    this.forceUpdate();
  }

  render() {
    return (
      <Container>
        <Button onClick={this.handleClick.bind(this)}>Click Me!</Button>
        <h1>
          {Game.getInstance()
            .getDirt()
            .toString()}
        </h1>
      </Container>
    );
  }
}
