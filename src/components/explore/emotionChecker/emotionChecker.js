import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { useEffect  } from 'react';
const HomeWrapper = styled.div`
  padding: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fcfcfc;
`;

const EmotionCheckDiv = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  margin-bottom: 30px;

`;
const EmotionCover = styled.div`
  position: absolute;
  top: 90px;
  left:0px;
  width: ${({ progress }) => `${progress}%`};
  height: 37%;
  background-color: ${({ color }) => color};
  transition: ${({ animate }) => animate ? 'width 1s ease' : 'none'};
`;
const EmotionInput = styled.input`
  margin-right: 10px;
  flex-grow: 1;
  padding: 8px;
`;

const EmotionButton = styled.button`
  padding: 8px 12px;
  background-color: #333;
  color: white;
  border: none;
  cursor: pointer;
`;

const EncouragingPhrase = styled.p`
  margin-top: 10px;
  font-weight: bold;
`;
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;


const AnimatedHeading = styled.h1`
  animation: ${fadeIn} 1s ease-in-out;
`

const EmotionInputHighlight = styled.span`

  width: 100%;
  height: 100%;
  background-color: ${({ emotion }) => getEmotionColor(emotion)};
  opacity: 0.2;
  pointer-events: none;
`;

const getEmotionColor = (emotion) => {
  const emotionColorMap = {
    happy: '#FDD835',
    sad: '#536DFE',
    angry: '#D32F2F',
    calm: '#4CAF50',
  };

  return emotionColorMap[emotion.toLowerCase()] || '#333';
};


const EmotionChecker = ({ onAnimationEnd }) => {
    const [enteredEmotion, setEnteredEmotion] = useState('');
  const [encouragingPhrase, setEncouragingPhrase] = useState('');
  const [progress, setProgress] = useState(0);
  const [animateCover, setAnimateCover] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      if (animateCover) {  // Only update progress if animateCover is true
        setProgress((prevProgress) => {
          if (prevProgress >= 100) {
            if (typeof onAnimationEnd === 'function') {
              onAnimationEnd();
            }
            return 0;
          } else {
            return prevProgress + 10;
          }
        });
      }
    }, 400);
  
    return () => clearInterval(interval);
  }, [animateCover, onAnimationEnd]);
  const handleEmotionChange = (event) => {
    setEnteredEmotion(event.target.value);
  };

  const handleEmotionCheck = () => {
    const enteredWord = enteredEmotion.trim().toLowerCase();

    const encouragingPhrases = {
        happy: 'You radiate happiness!',
        sad: 'Remember that brighter days are ahead!',
        anxious: 'Take a deep breath and know that you can handle it!',
        stressed: 'Take a break and give yourself some self-care!',
        angry: 'Take a moment to cool down and find your inner peace!',
        excited: 'Embrace the excitement and let it fuel your motivation!',
        grateful: 'Count your blessings and let gratitude guide your day!',
        peaceful: 'Find solace in tranquility and let it rejuvenate your spirit!',
        motivated: 'You have the power to achieve great things. Stay motivated!',
        loved: 'You are loved more than you know. Embrace the love around you!',
        proud: 'Be proud of your accomplishments and keep aiming higher!',
        confident: 'Believe in yourself, for you have all it takes to succeed!',
        content: 'Savor the present moment and find contentment in simplicity!',
        inspired: 'Let inspiration guide your journey and unlock your creativity!',
        determined: 'Stay determined and overcome any obstacle in your path!',
        hopeful: 'Keep hope alive, for it holds the key to a brighter future!',
        patient: 'Practice patience and trust that everything will fall into place!',
        brave: 'Be brave and step out of your comfort zone. Great things await!',
        kind: 'Kindness is a superpower. Spread it wherever you go!',
        curious: 'Embrace your curiosity and let it lead you to new discoveries!',
        resilient: 'You are stronger than you think. Bounce back and persevere!',
      };

    const foundPhrase = encouragingPhrases[enteredWord];

    if (foundPhrase) {
      setEncouragingPhrase(foundPhrase);
    } else {
      setEncouragingPhrase('Keep going and stay positive!');
    }
    setAnimateCover(true);
  };

  return (
    <HomeWrapper>
<AnimatedHeading>Unpack and explore</AnimatedHeading>
      <p>Type in your emotion to get exploring!</p>

      <EmotionCheckDiv>
      <EmotionCover progress={progress} color="#4CAF50" animate={animateCover} />

        <EmotionInput
          type="text"
          placeholder="Enter your emotion"
          value={enteredEmotion}
          onChange={handleEmotionChange}
        />
        <EmotionButton onClick={handleEmotionCheck}>Start Exploring!</EmotionButton>
      </EmotionCheckDiv>
      {enteredEmotion && <EmotionInputHighlight emotion={enteredEmotion} />}
      {encouragingPhrase && <EncouragingPhrase>{encouragingPhrase}</EncouragingPhrase>}
    </HomeWrapper>
  );
};

export default EmotionChecker;