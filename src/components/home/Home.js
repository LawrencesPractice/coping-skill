import React, { useState } from 'react';
import styled from 'styled-components';

const HomeWrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EmotionChecker = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
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

const Home = () => {
  const [enteredEmotion, setEnteredEmotion] = useState('');
  const [encouragingPhrase, setEncouragingPhrase] = useState('');

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
        // Add more words and corresponding encouraging phrases here
      };

    const foundPhrase = encouragingPhrases[enteredWord];

    if (foundPhrase) {
      setEncouragingPhrase(foundPhrase);
    } else {
      setEncouragingPhrase('Keep going and stay positive!');
    }
  };

  return (
    <HomeWrapper>
      <h1>Welcome to the Coping Skills App</h1>
      <p>This app provides techniques that can help you manage your emotions. Select a technique from the navigation menu to get started.</p>

      <EmotionChecker>
        <EmotionInput
          type="text"
          placeholder="Enter your emotion"
          value={enteredEmotion}
          onChange={handleEmotionChange}
        />
        <EmotionButton onClick={handleEmotionCheck}>Check</EmotionButton>
      </EmotionChecker>

      {encouragingPhrase && <EncouragingPhrase>{encouragingPhrase}</EncouragingPhrase>}
    </HomeWrapper>
  );
};

export default Home;