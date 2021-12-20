import React, { useEffect, useState } from "react";
import Headroom from "headroom.js";

import logo from "../assets/main-logo.svg";
import ast1 from "../assets/ast/1.png";
import ast2 from "../assets/ast/2.png";
import ast3 from "../assets/ast/3.png";
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from "reactstrap";

export default function Header() {
  useEffect(() => {
    var header = document.querySelector("#navbar");
    var headroom = new Headroom(header, {
      offset: 80,
      classes: { notTop: "bg-white bg-opacity-60 backdrop-blur-sm shadow-sm" },
    });
    headroom.init();
  }, []);

  const [open, setOpen] = useState(false);

  return (
    <header className="container-xxl sticky top-0 z-40">
      <Navbar
        className="rounded-b-lg duration-[400ms] transition-colors ease-in-out p-0"
        expand="lg"
        light
        id="navbar"
      >
        <NavbarBrand href="#top">
          <img alt="..." className="w-44" src={logo} />
        </NavbarBrand>
        <NavbarToggler onClick={() => setOpen(!open)} />
        <Collapse navbar isOpen={open}>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink
                className="inline-block text-primary-dark text-center px-4 font-medium"
                href="#features"
              >
                Features
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="inline-block text-primary-dark text-center px-4 font-medium"
                href="#staking"
              >
                Staking
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="inline-block text-primary-dark text-center px-4 font-medium"
                href="#portfolio"
              >
                Portfolio
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="inline-block text-primary-dark text-center px-4 font-medium"
                href="#faq"
              >
                FAQs
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="inline-block text-primary-dark text-center px-4 font-medium"
                href="#contact"
              >
                Contact
              </NavLink>
            </NavItem>
          </Nav>
          <div className="inline-flex my-2 lg:my-0 items-center">
            <div className="flex items-center mr-4">
              <div className="mx-2 w-6">
                <img alt="..." src={ast1} />
              </div>
              <div className="mx-2 w-6">
                <img alt="..." src={ast2} />
              </div>
              <div className="mx-2 w-6">
                <img alt="..." src={ast3} />
              </div>
            </div>
            <div className="btn is-primary">Dashboard</div>
          </div>
        </Collapse>
      </Navbar>
    </header>
  );
}
