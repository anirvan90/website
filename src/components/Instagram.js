import React from "react";
import styled from "styled-components";

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
  font-family: 'Pacifico', serif;
  color: #fffafa;
  font-size: 50px;
`;

const Text = styled.div`
  display: flex;
  font-family: 'Quicksand', sans-serif;
  font-size: 30px;
  color: #fffafa;
  justify-content: center;
`;

const Instagram = () => {
  return (
    <Wrapper>
      <Title>Instagram Feed</Title>
      <Text>Coming Soon</Text>
    </Wrapper>
  );
};

export default Instagram;
