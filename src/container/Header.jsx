import React, { useEffect, useState } from "react";
import Headroom from "headroom.js";

import logo from "../assets/main-logo.svg";
import ast1 from "../assets/ast/1.png";
import ast2 from "../assets/ast/2.png";
import ast3 from "../assets/ast/3.png";
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from "reactstrap";

export default function Header() {
  useEffect(() => {
    var header = document.querySelector("#navbar");
    var headroom = new Headroom(header, {
      classes: { notTop: "bg-white" },
    });
    headroom.init();
  }, []);

  const [open, setOpen] = useState(false);

  return (
    <Navbar
      className="container-lg sticky top-0 z-40 rounded-b-lg"
      expand="lg"
      light
      id="navbar"
    >
      <NavbarBrand href="/">
        <img src={logo} alt="" />
      </NavbarBrand>
      <NavbarToggler onClick={() => setOpen(!open)} />
      <Collapse navbar isOpen={open}>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href="#Features">Features</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#stage">Staking</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#portfolio">Portfolio</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#staking">FAQs</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#contact">Contact</NavLink>
          </NavItem>
        </Nav>
        <div className="nav-icons my-2 my-lg-0">
          <ul>
            <li>
              <img src={ast1} />
            </li>
            <li>
              <img src={ast2} />
            </li>
            <li>
              <img src={ast3} />
            </li>
          </ul>
          <div className="btn">Dashboard</div>
        </div>
      </Collapse>
    </Navbar>
  );
}
