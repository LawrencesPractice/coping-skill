import React from 'react';
import styled from 'styled-components';
import mindful from '../../../assets/mindful.png';

const ImageContainer = styled.div`
  width: 80%;
  margin: 0 auto;  // center the component horizontally
  padding: 0 50px;

  height: 800px;
  background-image: url(${mindful});
  background-size: cover;
  background-position: center top -90px; /* Cut off top part by 100px */
`;

const MindfulIntroComponent = () => {
  return (
    <>
      <ImageContainer />
    </>
  );
};

export default MindfulIntroComponent;