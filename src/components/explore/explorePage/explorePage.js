import React, {useState} from 'react';
import EmotionChecker from '../emotionChecker/emotionChecker';
import Packages from '../package/package';
const ExploreComponent = () => {
    const [showNextComponent, setShowNextComponent] = useState(false);
  
    const handleAnimationEnd = () => {
      setShowNextComponent(true);
    };
  
    return (
      <>
        {showNextComponent ? <Packages /> : <EmotionChecker onAnimationEnd={handleAnimationEnd} />}
      </>
    );
  };
  
  export default ExploreComponent;