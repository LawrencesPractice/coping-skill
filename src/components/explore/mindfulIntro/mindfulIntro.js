import React, { useEffect, useState } from "react";
import styled from "styled-components";
import mindful from "../../../assets/mindful.png";

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
  color: #77dd77;
`;

const Description = styled.p`
  font-size: 18px;
  color: #aec6cf;
`;

const TypingAnimation = ({ fullText }) => {
  const [text, setText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const type = () => {
      setText(fullText.slice(0, charIndex));
      setCharIndex((prevCharIndex) => prevCharIndex + 1);
    };

    if (charIndex <= fullText.length) {
      const typingTimeout = setTimeout(type, 100);
      return () => clearTimeout(typingTimeout);
    }
  }, [charIndex, fullText]);

  return <Title>{text}</Title>;
};

const MindfulIntroComponent = () => {
  const [showDescription, setShowDescription] = useState(false);
  const fullText = "Welcome to Mindful";
  const descriptionText = "Discover inner peace and tranquility";

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowDescription(true);
    }, fullText.length * 100 + 500); // Wait for fullText typing animation to finish and add a delay of 500 milliseconds

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <ImageContainer>
        <TextContainer>
          <TypingAnimation fullText={fullText} />
          {showDescription && (
            <Description>
              <TypingAnimation fullText={descriptionText} />
            </Description>
          )}
        </TextContainer>
      </ImageContainer>
    </>
  );
};

export default MindfulIntroComponent;