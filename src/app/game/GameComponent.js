import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import DirtComponent from "./dirtComponent/DirtComponent";
import UpgradesListComponent from "./upgradesComponent/UpgradesListComponent";
import Game from "./Game";

export default class GameComponent extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  handleSave() {
    document.cookie = "game= " + JSON.stringify(Game.getInstance());
    alert("Game has been saved");
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Button onClick={this.handleSave}>Save</Button>
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
