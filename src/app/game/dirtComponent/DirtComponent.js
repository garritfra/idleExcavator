import React, { Component } from "react";
import { Container, Button } from "reactstrap";
import Game from "../../../model/Game";
import "./DirtComponent.scss";

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

  dirtPerSecond() {
    return (
      Game.getInstance()
        .autoPercentage.getTimes(1000 / Game.getInstance().getTickRate(), 0)
        .toString() + " dirt/second"
    );
  }

  render() {
    return (
      <Container>
        <h1 className="text-center">
          {Game.getInstance()
            .getDirt()
            .toString()}
        </h1>
        <h4 className="text-center">{this.dirtPerSecond()}</h4>
        <Button
          color="primary"
          size="lg"
          height="100%"
          className="float-left shadow-none"
          onClick={this.handleClick.bind(this)}
        >
          Dig
        </Button>
      </Container>
    );
  }
}
