import React, { Component } from "react";
import styled from "styled-components";
import Instafeed from "react-instafeed";
import config from "../config";

const instafeedTarget = "instafeed";

const Wrapper = styled.div`
  background-image: url(https://s3-us-west-1.amazonaws.com/anirvan90-images/IMG_1969.png);
  background-size: cover;
  width: 100%;
  height: 100%;
  position: relative;
  float: left;
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  width: 100%;
  font-family: "Pacifico", serif;
  color: #fffafa;
  font-size: 50px;
`;

const Text = styled.div`
  display: flex;
  font-family: "Quicksand", sans-serif;
  font-size: 30px;
  color: #fffafa;
  justify-content: center;
`;

class Instagram extends Component {
  render() {
    return (
      <Wrapper>
        <Title>Instagram Feed</Title>
        <Text>Coming Soon</Text>
        <div id={instafeedTarget}>
          <Instafeed
            limit="5"
            ref="instafeed"
            resolution="standard_resolution"
            sortBy="most-recent"
            target={instafeedTarget}
            template=""
            userId="anirvan90"
            clientId={config.client_id}
            accessToken={config.access_token}
          />
        </div>
      </Wrapper>
    );
  }
}

export default Instagram;
