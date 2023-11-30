import React from 'react';
import innerCalmImg from '../../../../assets/innerCalm.jpg'
import { 
  Header1,
  Content,
  SectionTitle, 
  FindYourInnerCalmToday,
  MindspaceSGuidedMeditationsCan,
  Actions,
  Button3,
  GetStarted2,
  Button4,
  LearnMore,
  PlaceholderImage
} from './styles';
const InnerCalmSection = () => {
  return (
    <Header1>
      <Content>
        <SectionTitle>
          <FindYourInnerCalmToday>Find Your Inner Calm Today</FindYourInnerCalmToday>
          <MindspaceSGuidedMeditationsCan>
            Mindspace's guided meditations can help you reduce stress, improve focus, and achieve inner calm in
            just a few minutes a day.
          </MindspaceSGuidedMeditationsCan>
        </SectionTitle>
        <Actions>
          <Button3>
            <GetStarted2>Get started</GetStarted2>
          </Button3>
          <Button4>
            <LearnMore>Learn more</LearnMore>
          </Button4>
        </Actions>
      </Content>
      <PlaceholderImage>

      <img src={innerCalmImg} alt="fireSpot" />

      </PlaceholderImage>
    </Header1>
  );
};

export default InnerCalmSection;