import React, { Component } from "react";
import { Button } from "reactstrap";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = { dirt: 10 };
  }

  handleClick() {
    const newDirt = this.state.dirt + 1;
    this.setState({ dirt: newDirt });
  }

  render() {
    return (
      <div>
        <span>
          <Button onClick={this.handleClick.bind(this)}>Click Me!</Button>
          <h1>{this.state.dirt}</h1>
        </span>
      </div>
    );
  }
}
