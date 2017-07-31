import React from "react";
import { Slide } from "fullpage-react";
import styled from "styled-components";
import git from "../images/github.svg";
import linkedin from "../images/linkedin.svg";
import twitter from "../images/twitter.svg";
import insta from "../images/instagram.svg";
import mouse from "../images/mouse.svg";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #454545;
`;

const Title = styled.div`
  font-family: 'Indie Flower', cursive;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 80px;
  color: white;
`;

const LogoTray = styled.div``;

const Logo = styled.img`
  height: 1.5em;
  width: 1.5em;
`;

const Landing = () => {
  return (
    <Wrap>
      <Title>Anirvan Awatramani</Title>
      <Title>Full Stack Engineer</Title>
      <LogoTray>
        <Logo src={git} alt="social-logo" />
        <Logo src={linkedin} alt="social-logo" />
        <Logo src={twitter} alt="social-logo" />
        <Logo src={insta} alt="social-logo" />
      </LogoTray>
      <Logo src={mouse} alt="mouse logo" />
    </Wrap>
  );
};

export default Landing;
