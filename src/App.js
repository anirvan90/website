import React, { Component } from "react";
import ReactGA from "react-ga";
import logo from "./logo.svg";
import Landing from "./components/Landing";
import AboutMe from "./components/AboutMe";
import Instagram from "./components/Instagram";
import Spotify from "./components/Spotify";
import { Fullpage, Slide } from "fullpage-react";

import "./App.css";

const fullPageOptions = {
  scrollSensitivity: 7,
  touchSensitivity: 2,
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
  constructor() {
    super();
    ReactGA.initialize("UA-109666476-1");
    ReactGA.pageview(window.location.pathname);
  }
  render() {
    return (
      <div>
        <Fullpage
          onSlideChangeStart={() => {
            ReactGA.event({
              category: "Page Scroll",
              action: "Page Scrolled"
            });
          }}
          {...fullPageOptions}
        />
      </div>
    );
  }
}

export default App;
