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
              <h4><b>Winston Maxwell</b></h4>
              <p>Coffee Connoisseur</p>
            </div>
          </div>

          <div className="card">
            <div className="container-card">
              <h4><b>Lilah Brennings</b></h4>
              <p>Bougie Weekly</p>
            </div>
          </div>

          <div className="card">
            <div className="container-card">
              <h4><b>Bryton Scarwell</b></h4>
              <p>The Grind Magazine</p>
            </div>
          </div>

          <div className="card">
            <div className="container-card">
              <h4><b>Henry VII</b></h4>
              <p>He's a King</p>
            </div>
        </div>
        </div>
      </div>
    );
  }
}

export default References;
