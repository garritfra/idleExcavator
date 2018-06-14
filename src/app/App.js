import React, { Component } from "react";
import { Button } from "reactstrap";
import BigDouble from "../model/BigDouble";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = { dirt: new BigDouble(2, 0) };
    console.log(this.state);
  }

  handleClick() {
    this.setState({ dirt: this.state.dirt.add(1) });
  }

  render() {
    return (
      <div>
        <span>
          <Button onClick={this.handleClick.bind(this)}>Click Me!</Button>
          <h1>{this.state.dirt.toString()}</h1>
        </span>
      </div>
    );
  }
}
