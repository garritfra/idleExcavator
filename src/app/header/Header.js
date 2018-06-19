import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";

export default class Header extends Component {
  render() {
    return (
      <Navbar>
        <NavbarBrand>Idle Excavator</NavbarBrand>
      </Navbar>
    );
  }
}
