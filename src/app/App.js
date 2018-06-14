import React, { Component } from "react";
import { Button } from "reactstrap";
import BigDouble from "../model/BigDouble";
import Game from "../app/game/Game";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.d1 = new BigDouble(1, 0);
    this.state = { dirt: new BigDouble(2, 0) };
    console.log(this.state);
  }

  handleClick() {
    this.d1.addCount(2.32, 0);
    this.d1.log();
    this.forceUpdate();
  }

  render() {
    return (
      <div>
        <Game />
      </div>
    );
  }
}
