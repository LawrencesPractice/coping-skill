import React from 'react';
import styled from 'styled-components';
import mindful from '../../../assets/mindful.png';

const ImageContainer = styled.div`
  position: relative;
  width: 80%;
  margin: 0 auto; /* center the component horizontally */
  padding: 0 50px;
  height: 800px;
  background-image: url(${mindful});
  background-size: cover;
  background-position: center top -90px; /* Cut off top part by 100px */
`;

const TextContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
`;

const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 18px;
`;

const MindfulIntroComponent = () => {
  return (
    <>
      <ImageContainer>
        <TextContainer>
          <Title>Welcome to Mindful</Title>
          <Description>Discover inner peace and tranquility</Description>
        </TextContainer>
      </ImageContainer>
    </>
  );
};

export default MindfulIntroComponent;