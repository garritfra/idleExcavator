import React, { Component } from "react";
import { Button } from "reactstrap";
import BigDouble from "../model/BigDouble";
import Game from "../app/game/Game"

export default class App extends Component {

  constructor(props) {
    super(props);
    this.props = props;
    this.d1 = new BigDouble(1,0);
  }

  render() {
    return (
      <div>
        <Game />
      </div>
    );
  }
}
