import React from "react";
import ReactGA from "react-ga";
import styled from "styled-components";
import Particles from "react-particles-js";
import git from "../images/github.svg";
import linkedin from "../images/linkedin.svg";
import twitter from "../images/twitter.svg";
import insta from "../images/instagram.svg";
import mouse from "../images/mouse.svg";

const ComponentWrap = styled.div`
  width: 100%;
  height: 100%;
  background-color: #282828;
  position: relative;
`;

const ParticleWrap = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
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
  font-family: "Quicksand", sans-serif;
  font-size: 80px;
  color: white;
`;

const Title = styled.div`
  font-family: "Indie Flower", cursive;
  font-size: 45px;
  color: white;
`;

const LogoTray = styled.div`
  position: relative;
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
      <ParticleWrap>
        <Particles
          params={{
            particles: {
              number: {
                value: 30,
                density: {
                  enable: true,
                  value_area: 1104.8066982851817
                }
              },
              color: {
                value: "#4cb781"
              },
              shape: {
                type: "circle",
                stroke: {
                  width: 0,
                  color: "#4cb781"
                },
                polygon: {
                  nb_sides: 8
                }
              },
              opacity: {
                value: 0.5,
                random: false,
                anim: {
                  enable: true,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: false
                }
              },
              size: {
                value: 3,
                random: true,
                anim: {
                  enable: false,
                  speed: 30,
                  size_min: 0.1,
                  sync: false
                }
              },
              line_linked: {
                enable: true,
                distance: 150,
                color: "#4cb781",
                opacity: 0.4,
                width: 1
              },
              move: {
                enable: true,
                speed: 6,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200
                }
              }
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse"
                },
                onclick: {
                  enable: true,
                  mode: "push"
                },
                resize: true
              },
              modes: {
                grab: {
                  distance: 400,
                  line_linked: {
                    opacity: 1
                  }
                },
                bubble: {
                  distance: 400,
                  size: 40,
                  duration: 2,
                  opacity: 8,
                  speed: 3
                },
                repulse: {
                  distance: 200,
                  duration: 0.4
                },
                push: {
                  particles_nb: 4
                },
                remove: {
                  particles_nb: 2
                }
              }
            },
            retina_detected: true
          }}
        />
      </ParticleWrap>
      <TextWrap>
        <Name>Anirvan Awatramani</Name>
        <Title>Software Engineer</Title>
      </TextWrap>
      <LogoTray>
        <a
          onClick={() => {
            ReactGA.event({
              category: "Social Link Clicked",
              action: "Github profile visited"
            });
          }}
          href={urls.gitHub}
          target={urls.open}
        >
          <Logo src={git} alt="social-logo" href={urls.gitHub} />
        </a>
        <a
          onClick={() => {
            ReactGA.event({
              category: "Social Link Clicked",
              action: "LinkedIn profile visited"
            });
          }}
          href={urls.linkedIn}
          target={urls.open}
        >
          <Logo src={linkedin} alt="social-logo" />
        </a>
        <a
          onClick={() => {
            ReactGA.event({
              category: "Social Link Clicked",
              action: "Twitter profile visited"
            });
          }}
          href={urls.twitter}
          target={urls.open}
        >
          <Logo src={twitter} alt="social-logo" />
        </a>
        <a
          onClick={() => {
            ReactGA.event({
              category: "Social Link Clicked",
              action: "Instagram profile visited"
            });
          }}
          href={urls.instagram}
          target={urls.open}
        >
          <Logo src={insta} alt="social-logo" />
        </a>
      </LogoTray>
      <BaseLogo src={mouse} alt="mouse logo" />
    </ComponentWrap>
  );
};

export default Landing;
