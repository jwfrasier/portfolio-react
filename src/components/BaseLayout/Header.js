import React, { Component } from "react";
import { Link, BrowserRouter, Route, NavLink } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div>
        <header>
        <h1 className="header-title">Peace Of Cake</h1>
          <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/Menu">Menu</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/references">References</NavLink>
          </nav>
        </header>
      </div>
    );
  }
}

export default Header;
