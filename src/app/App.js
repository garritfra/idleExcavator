import React, { Component } from "react";
import { Button } from "reactstrap";
import BigDouble from "../model/BigDouble";

export default class App extends Component {

  constructor(props) {
    super(props);
    this.d1 = new BigDouble(1,0);
    this.props = props;
    this.state = { dirt: new BigDouble(2, 0) };
    console.log(this.state);
  }

  handleClick() {
    this.d1.addCount(2.32,0);
    this.d1.log();
    this.setState({ dirt: 1 });
  }

  render() {
    return (
      <div>
        <span>
          <Button onClick={this.handleClick.bind(this)}>Click Me!</Button>
          <h1>{this.d1.toString()}</h1>
        </span>
      </div>
    );
  }
}
