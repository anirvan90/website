import React from "react";
import styled from "styled-components";
import backdrop from "../images/anirvan_bw.png";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`;

const ImgContain = styled.img`
  max-width: auto;
  max-height: auto;
  opacity: 0.85;
  @media only screen and (max-width: 400px) {
    width: 40px;
    height: max;
    position: center;
  }
`;

const AboutMe = () => {
  return (
    <Wrapper>
      <ImgContain src={backdrop} alt="Anirvan Zio" />
    </Wrapper>
  );
};

export default AboutMe;
