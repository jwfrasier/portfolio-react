import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

class References extends Component {
  render() {
    return (
      <div className="page-div">
        <h1>References</h1>
        <div className="card-div">

          <div className="card">
            <div className="container-card">
              <h4><b>John Doe</b></h4>
              <p>Architect & Engineer</p>
            </div>
          </div>

          <div className="card">
            <div className="container-card">
              <h4><b>John Doe</b></h4>
              <p>Architect & Engineer</p>
            </div>
          </div>

          <div className="card">
            <div className="container-card">
              <h4><b>John Doe</b></h4>
              <p>Architect & Engineer</p>
            </div>
          </div>

          <div className="card">
            <div className="container-card">
              <h4><b>John Doe</b></h4>
              <p>Architect & Engineer</p>
            </div>
        </div>
        </div>
      </div>
    );
  }
}

export default References;
