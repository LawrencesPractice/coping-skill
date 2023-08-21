import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const DeepBreathingWrapper = styled.div`
  padding: 20px;
`;

const ParkScene = styled.svg`
  width: 400px;
  height: auto;
`;

const PathAnimation = keyframes`
  0% {
    stroke-dashoffset: 1000;
  }
  100% {
    stroke-dashoffset: 0;
  }
`;

const Path = styled.path`
  fill: none;
  stroke: green;
  stroke-width: 2;
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: ${PathAnimation} 5s linear forwards;
`;



const EyeWrapper = styled.svg`
  width: 400px;
  height: auto;
  animation: breathe 10s infinite alternate;
  transform-origin: center;
`;



const Eye = styled.path`
  fill: #A9A9A9;
  stroke: none;
`;

const DeepBreathing = () => {
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    setIsDrawing(true);
  }, []);

  return (
    <DeepBreathingWrapper>
      <h1>Deep Breathing</h1>
      <p>Deep breathing is a simple technique that’s excellent for managing emotions. Not only is deep breathing effective, it’s also discreet and easy to use at any time or place.</p>
      <p>Sit comfortably and place one hand on your abdomen. Breathe in through your nose, deeply enough that the hand on your abdomen rises. Hold the air in your lungs, and then exhale slowly through your mouth, with your lips puckered as if you are blowing through a straw. The secret is to go slow: Time the inhalation (4s), pause (4s), and exhalation (6s). Practice for 3 to 5 minutes.</p>

      {isDrawing && (
        <ParkScene xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
          <Path d="M50 200 Q 200 50 350 200" />
          <Path d="M50 200 Q 200 350 350 200" />
          <EyeWrapper xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
            <Eye d="M170 200 L 230 200 Q 200 220 170 200" />
            <Eye d="M230 200 L 170 200 Q 200 180 230 200" />
            <Eye d="M200 180 Q 220 200 200 220 Q 180 200 200 180" />
          </EyeWrapper>
        </ParkScene>
      )}
    </DeepBreathingWrapper>
  );
};

export default DeepBreathing;