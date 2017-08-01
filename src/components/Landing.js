import React from "react";
import styled from "styled-components";
import git from "../images/github.svg";
import linkedin from "../images/linkedin.svg";
import twitter from "../images/twitter.svg";
import insta from "../images/instagram.svg";
import mouse from "../images/mouse.svg";

const ComponentWrap = styled.div`
  width: 100%;
  height: 100%;
  background-color: #282828;
`;

const TextWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  padding-top: 30px;
  height: 70%;
  width: 100%;
`;

const Name = styled.div`
  font-family: 'Quicksand', sans-serif;
  font-size: 80px;
  color: white;
`;

const Title = styled.div`
  font-family: 'Indie Flower', cursive;
  font-size: 50px;
  color: white;
`;

const LogoTray = styled.div`
  display: flex;
  justify-content: center;
  height: 20%;
`;

const Logo = styled.img`
  height: 1.5em;
  width: 1.5em;
  padding: 10px;
  :hover {
    transform: scale(1.1);
    opacity: 0.5;
  }
`;

const BaseLogo = styled.img`
  height: 1em;
  width: 1em;
  display: block;
  margin: auto;
`;

const urls = {
  linkedIn: "https://www.linkedin.com/in/anirvanawatramani/",
  gitHub: "https://github.com/anirvan90",
  instagram: "https://instagram.com/anirvan90",
  twitter: "https://twitter.com/anirvan90",
  open: "_blank"
};

const Landing = () => {
  return (
    <ComponentWrap>
      <TextWrap>
        <Name>Anirvan Awatramani</Name>
        <Title>Full Stack Engineer</Title>
      </TextWrap>
      <LogoTray>
        <a href={urls.gitHub} target={urls.open}>
          <Logo src={git} alt="social-logo" href={urls.gitHub} />
        </a>
        <a href={urls.linkedIn} target={urls.open}>
          <Logo src={linkedin} alt="social-logo" />
        </a>
        <a href={urls.twitter} target={urls.open}>
          <Logo src={twitter} alt="social-logo" />
        </a>
        <a href={urls.instagram} target={urls.open}>
          <Logo src={insta} alt="social-logo" />
        </a>
      </LogoTray>
      <BaseLogo src={mouse} alt="mouse logo" />
    </ComponentWrap>
  );
};

export default Landing;
