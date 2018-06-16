import React, { Component } from "react";
import BigDouble from "../model/BigDouble";
import GameComponent from "../app/game/GameComponent";
import Header from "../app/header/Header";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.d1 = new BigDouble(1, 0);
    this.state = { dirt: new BigDouble(2, 0) };
  }

  handleClick() {
    this.d1.addCount(2.32, 0);
    this.d1.log();
    this.forceUpdate();
  }

  render() {
    return (
      <div>
        <Header />
        <GameComponent />
      </div>
    );
  }
}
