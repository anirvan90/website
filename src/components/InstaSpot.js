import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #282828;
`;

const SpotifyHeader = styled.div`
  font-family: 'Indie Flower', cursive;
  color: #ffffff;
  font-size: 50px;
`;

const SpotifyPlayer = styled.iframe`
  width: 60%;
  height: 50%;
`;

const InstaSpot = () =>
  <Wrapper>
    <SpotifyHeader>What I'm Listening To</SpotifyHeader>
    <SpotifyPlayer
      src="https://open.spotify.com/embed/user/12133543362/playlist/0cZtbr6LtQpSlbvEolF9P4"
      frameBorder="0"
      allowTransparency="true"
    />
    <h3>Instagram Feed</h3>
  </Wrapper>;

export default InstaSpot;
