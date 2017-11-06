import React, { Component } from "react";
import logo from "./logo.svg";
import Landing from "./components/Landing";
import AboutMe from "./components/AboutMe";
import Instagram from "./components/Instagram";
import Spotify from "./components/Spotify";
import { Fullpage, Slide } from "fullpage-react";

import "./App.css";

const fullPageOptions = {
  scrollSensitivity: 7,
  touchSensitivity: 7,
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
    <Instagram />
  </Slide>,
  <Slide>
    <Spotify />
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
