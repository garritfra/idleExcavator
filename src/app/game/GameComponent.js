import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import BigDouble from "../../model/BigDouble";
import Game from "./Game";
import DirtComponent from "./dirtComponent/DirtComponent";
import UpgradesComponent from "./upgradesComponent/UpgradesComponent";

export default class GameComponent extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.game = Game.getInstance();
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <DirtComponent />
          </Col>
          <Col>
            <UpgradesComponent />
          </Col>
        </Row>
      </Container>
    );
  }
}
