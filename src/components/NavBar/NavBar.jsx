import React from "react";
import logo from "../../images/logo.svg";
import navbar from "./navbar.css";

const NavBar = function () {
  return (
    <nav>
      <img src={logo} className="App-logo" alt="logo" />
      <ul className="nav__list">
        <li>
          <a href="#">Features</a>
        </li>
        <li>
          <a href="#">Team</a>
        </li>
        <li>
          <a href="#">Sign In</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
