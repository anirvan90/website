import React from "react";
import styled from "styled-components";
import profile from "../images/profile.png";

const Wrapper = styled.div`
  background-image: url(https://s3-us-west-1.amazonaws.com/anirvan90-images/anirvan_bw.png);
  background-size: cover;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 20% 60% 20%;
  grid-template-columns: 100%;
`;

const Label = styled.h2`
  grid-row: 1/2;
  font-family: 'Pacifico', serif;
  color: #ffffff;
  font-size: 50px;
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  grid-row: 2/3;
  display: grid;
  grid-template-column: 1fr 2fr 1fr;
  grid-template-row: auto;
`;

const About = styled.p`
  padding: 50x;
  margin-left: 30px;
  margin-right: 100px;
  overflow: scroll;
  grid-column: 2/3;
  font-family: 'Quicksand', sans-serif;
  color: #f6f6ef;
  font-size: 16px;
  font-weight: bold;
  background: rgba(0, 0, 0, .65);
`;

const Profile = styled.img`
  grid-column: 1/2;
  width: 180px;
  height: 200x;
  padding-top: 10px;
  padding-left: 100px;
`;
const Footer = styled.div`
  grid-row: 3/4;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-top: 40px;
`;

const Button = styled.a`
  width: 100px;
  height: 20px;
  background-color: #4cb781;
  font-family: 'Indie Flower', cursive;
  color: #ffffff;
  font-size: 1em;
  line-height: 24px;
  text-align: center;
  text-decoration: none;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 20px;
  :hover {
    transform: scale(1.02);
    background-color: lighten(#4cb781, 30%);
  }
`;

const AboutMe = () => {
  return (
    <Wrapper>
      <Label>About Me</Label>
      <Content>
        <Profile src={profile} />
        <About>
          <p style={{ fontSize: "20x" }}>Change Is Constant...</p>
          I'm a full-stack JS developer. My intersts include music, photography
          and food. When I'm not inside writing promises you can find me riding
          a bike or climbing some rocks, diving around exotic reefs or imparting
          wisdom.
          <p>
            In the last 7 years I've moved around from Lancaster, Madrid,
            Shanghai, New York City, New Orleans, Mumbai & San Francisco.
          </p>
          <p>
            My educational background is Finance and I've worked across Finance,
            Strategy, Operations and Product Development.
          </p>
          <p>Technologies I Love: React/Redux, NodeJS, Go, and AWS</p>
          <p>
            I'm always building a side project, to see what I've worked on most
            recently check Grouper below.
          </p>
          <p>
            Feel free to download my Resumé, checkout my GitHub or send me an
            email below...
          </p>
        </About>
      </Content>
      <Footer>
        <Button
          href={
            "https://s3-us-west-1.amazonaws.com/anirvan90-images/AnirvanAwatramani.pdf"
          }
          download={"anirvan_awatramani_resume.pdf"}
        >
          Resumé
        </Button>
        <Button href={"mailto:anirvan.awatramani@gmail.com"}>Email Me</Button>
        <Button href={"http://bit.ly/2qGruper"} target="_blank">
          Grouper
        </Button>
      </Footer>
    </Wrapper>
  );
};

export default AboutMe;
