import React, { Component } from "react";
import Game from "../../Game";
import {
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
  Button
} from "reactstrap";

export default class UpgradeComponent extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.upgrade = this.props.upgrade;
  }

  handleBuy() {
    Game.getInstance().applyAutoUpgrade(this.upgrade);
    this.forceUpdate();
  }

  render() {
    return (
      <ListGroupItem>
        <ListGroupItemHeading>{this.props.upgrade.name + " x" + this.props.upgrade.amountBought}</ListGroupItemHeading>
        <ListGroupItemText>
          {this.upgrade.cost.toString()} dirt
        </ListGroupItemText>
        <Button color="primary" onClick={this.handleBuy.bind(this)}>
          Buy
        </Button>
      </ListGroupItem>
    );
  }
}
