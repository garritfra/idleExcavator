import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import DirtComponent from "./dirtComponent/DirtComponent";
import UpgradesListComponent from "./upgradesComponent/UpgradesListComponent";

export default class GameComponent extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <DirtComponent />
          </Col>
          <Col>
            <UpgradesListComponent />
          </Col>
        </Row>
      </Container>
    );
  }
}
