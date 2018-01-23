import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

class Welcome extends Component {
  render() {
    return (
      <div className="page-div">
        <div className="button-div">
          <NavLink to="/portfolio" className="swag">
              Check Our Menu!
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Welcome;
