import React, { Component } from "react";

import Header from "./Header";
import { Link } from "react-router-dom";

class BaseLayout extends Component {
  render() {
    return (

      <div className="container-fluid">
        <Header />
        <div>{this.props.children}</div>

      </div>
    );
  }
}

export default BaseLayout;
