import React from "react";

import logo from "../assets/main-logo.svg";
import ast1 from "../assets/ast/1.png";
import ast2 from "../assets/ast/2.png";
import ast3 from "../assets/ast/3.png";

export default function Header() {
  return (
    <header>
      <div className="container " id="container-custom-nav">
        <nav className="navbar  navbar-expand-lg navbar-light  " id="navbar">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item ">
                <a className="nav-link nav-link-ltr" href="#Features">
                  Features <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#stake">
                  Staking
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#portfolio"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link "
                  href="#staking"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  FAQs
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link "
                  href="#contact"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Contact
                </a>
              </li>
            </ul>
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
          </div>
        </nav>
      </div>
    </header>
  );
}
