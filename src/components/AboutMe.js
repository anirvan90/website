import React from "react";
import styled from "styled-components";
import mouse from "../images/mouse.svg";

const Wrapper = styled.div`
  background-image: url(https://s3-us-west-1.amazonaws.com/anirvan90-images/anirvan_bw.png);
  background-size: cover;
  width: 100%;
  height: 100%;
  position: relative;
  float: left;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.h2`
  font-family: 'Pacifico', serif;
  color: #ffffff;
  font-size: 50px;
`;

const Resume = styled.button`
  width: 100px;
  background-color: #4cb781;
  font-family: 'Indie Flower', cursive;
  color: #ffffff;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: none;
  border-radius: 10px;
  :hover {
    transform: scale(1.02);
    background-color: lighten(#4cb781, 30%);
  }
`;
const BaseLogo = styled.img`
  height: 2em;
  width: 2em;
  color: #fff;
`;

const Email = styled.a`
  width: 100px;
  background-color: #4cb781;
  font-family: 'Indie Flower', cursive;
  color: #ffffff;
  font-size: 1em;
  text-align: center;
  text-decoration: none;
  margin: 1em;
  padding: 0.25em 1em;
  border: none;
  border-radius: 10px;
  :hover {
    transform: scale(1.02);
    background-color: lighten(#4cb781, 30%);
  }
`;

const AboutMe = () => {
  return (
    <Wrapper>
      <Label>About Me</Label>
      <Resume>Resumé</Resume>
      <Email href={"mailto:anirvan.awatramani@gmail.com"}>Email Me</Email>
      <BaseLogo src={mouse} alt="mouse logo" />
    </Wrapper>
  );
};

export default AboutMe;
