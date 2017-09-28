import React, { Component } from "react";
import logo from "../logo.svg";
import "../styles/App.css";
import About from "./About";
import Image from "./Welcome";
import Header from "./BaseLayout/Header";
import Portfolio from "./Portfolio";
import Contact from "./Contact"
import References from "./References"

import BaseLayout from "./BaseLayout/BaseLayout";
import { BrowserRouter, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <BaseLayout>
            <div>
              <Route path="/" exact component={Image} />
              <Route path="/about" component={About} />
              <Route path="/portfolio" component={Portfolio} />
              <Route path="/contact" component={Contact}></Route>
              <Route path="/references" component={References}></Route>

            </div>
          </BaseLayout>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
