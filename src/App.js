import React, { Component } from "react";
import logo from "./logo.svg";
import Landing from "./components/Landing";
import AboutMe from "./components/AboutMe";
import GetInTouch from "./components/GetInTouch";
import InstaSpot from "./components/InstaSpot";
import { Fullpage, Slide } from "fullpage-react";

import "./App.css";

const fullPageOptions = {
  scrollSensitivity: 7,
  touchSensitivity: 7,
  hideScrollBars: true,
  enableArrowKeys: true
};

const slides = [
  <Slide>
    <Landing />
  </Slide>,
  <Slide>
    <AboutMe />
  </Slide>,
  <Slide>
    <GetInTouch />
  </Slide>,
  <Slide>
    <InstaSpot />
  </Slide>
];

fullPageOptions.slides = slides;

class App extends Component {
  render() {
    return (
      <div>
        <Fullpage {...fullPageOptions} />
      </div>
    );
  }
}

export default App;
