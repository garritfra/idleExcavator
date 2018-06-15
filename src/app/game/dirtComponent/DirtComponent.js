import React, { Component } from "react";
import { Container, Button } from "reactstrap";

export default class DirtComponent extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.game = this.props.game;
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
        <Button onClick={this.handleClick.bind(this)}>Click Me!</Button>
        <h1>{this.game.getDirt().toString()}</h1>
      </Container>
    );
  }
}
