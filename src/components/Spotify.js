import React from "react";
import styled from "styled-components";
import config from "../config.js";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #282828;
  padding-top: 50px;
`;

const SpotifyHeader = styled.div`
  font-family: "Pacifico", serif;
  color: #ffffff;
  font-size: 50px;
`;

const SpotifyPlayer = styled.iframe`
  padding-top: 30px;
  width: 60%;
  height: 50%;
  padding-botton: 30px;
`;
const Spotify = () => (
  <Wrapper>
    <SpotifyHeader>What I'm Listening To</SpotifyHeader>
    <SpotifyPlayer
      src="https://open.spotify.com/embed/user/12133543362/playlist/0cZtbr6LtQpSlbvEolF9P4"
      frameBorder="0"
      allowTransparency="true"
    />
    <iframe
      src="https://open.spotify.com/follow/1/?uri=spotify:user:12133543362&size=detail&theme=dark"
      width="300"
      height="56"
      scrolling="no"
      frameBorder="0"
      allowTransparency="true"
    />
  </Wrapper>
);

export default Spotify;
