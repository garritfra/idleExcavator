import React, { Component } from "react";
import { Button, Container } from "reactstrap";
import BigDouble from "../../model/BigDouble";

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.d1 = new BigDouble(2, 0);
    this.props = props;
    this.state = { dirt: new BigDouble(2, 0) };
    console.log(this.state);
  }

  componentDidMount() {
    setInterval(this.updateDirt.bind(this), 33);
  }

  handleClick() {
    this.d1.addCount(1, 0);
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
          <h1>{this.d1.toString()}</h1>
        </span>
      </Container>
    );
  }
}
