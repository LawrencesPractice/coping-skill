import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const InnerCalmContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  width: 80%;
  margin: 0 auto;
  padding: 56px 10%;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  animation: fadeIn 0.3s ease-in-out;
  text-align: center;
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;
const Title = styled.h2`
font-size: 1.5em;
color: #333;
text-align: center;
margin-bottom: 1em;
`;
const Instruction = styled.p`
font-size: 1em;
color: #666;
line-height: 1.6;
margin-bottom: 1em;
`;
const BulletPoint = styled.li`
  font-size: 0.9em;
  color: #666;
  line-height: 1.4;
`;
const TimeRemaining = styled.p`
  font-size: 1.2em;
  color: #007bff;
  font-weight: bold;
  margin-bottom: 2em;
`;
const InnerCalmExercise = () => {
  const [calmState, setCalmState] = useState(false);
  let exerciseDuration = 300;
  const [timer, setTimer] = useState(exerciseDuration);
  const [completed, setCompleted] = useState(false);
  const [expandedSections, setExpandedSections] = useState([]);

  useEffect(() => {
    let interval;
    if (calmState && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer === 0) {
      setCompleted(true);
    }

    return () => {
      clearInterval(interval);
    };
  }, [calmState, timer]);

  const handleStartExercise = () => {
    setCalmState(true);
  };

  const handleStopExercise = () => {
    setCalmState(false);
    setTimer(exerciseDuration);
    setCompleted(false);
    setExpandedSections([]);
  };

  const handleToggleSection = (sectionId) => {
    if (expandedSections.includes(sectionId)) {
      setExpandedSections((prevSections) => prevSections.filter((id) => id !== sectionId));
    } else {
      setExpandedSections((prevSections) => [...prevSections, sectionId]);
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <InnerCalmContainer>
      {!calmState ? (
         <div>
        <Button onClick={handleStartExercise}>Start Inner Calm Exercise</Button>  </div>    ) : (
        <div>
          {completed ? (
            <div>
              <h2>Inner Calm Exercise Completed!</h2>
              <button onClick={handleStopExercise}>Start Again</button>
            </div>
          ) : (
            <div>
<Title>Inner Calm Exercise</Title>
              <Instruction>Find a quiet and comfortable space where you won't be disturbed.</Instruction>
              <Instruction>Sit in a relaxed position with your back straight and your body supported.</Instruction>
              <Instruction>Close your eyes and take a few slow, deep breaths.</Instruction>
              <p>
                <span onClick={() => handleToggleSection(1)} style={{ cursor: 'pointer', fontWeight: 'bold' }}>
                  {expandedSections.includes(1) ? '▼' : '►'} Focus your attention on your breath:
                </span>
              </p>
              {expandedSections.includes(1) && (
                <ul>
<BulletPoint>Notice the sensation as you inhale and exhale.</BulletPoint>
<BulletPoint>Feel the rise and fall of your chest or the breath at your nostrils.</BulletPoint>
                </ul>
              )}
              <p>
                <span onClick={() => handleToggleSection(2)} style={{ cursor: 'pointer', fontWeight: 'bold' }}>
                  {expandedSections.includes(2) ? '▼' : '►'} Let go of thoughts and distractions:
                </span>
              </p>
              {expandedSections.includes(2) && (
                <ul>
                  <BulletPoint>Acknowledge any thoughts or distractions without judgment.</BulletPoint>
                  <BulletPoint>Gently let go of them and bring your attention back to your breath.</BulletPoint>
                </ul>
              )}
              <p>
                <span onClick={() => handleToggleSection(3)} style={{ cursor: 'pointer', fontWeight: 'bold' }}>
                  {expandedSections.includes(3) ? '▼' : '►'} Be present in the moment:
                </span>
              </p>
              {expandedSections.includes(3) && (
                <ul>
                 <BulletPoint>Let go of worries, concerns, or thoughts about the past or future.</BulletPoint>
                 <BulletPoint>Be fully present with each breath, focusing on the here and now.</BulletPoint>
                </ul>
              )}
<TimeRemaining>Continue this practice for {formatTime(timer)}.</TimeRemaining>              <Button onClick={handleStopExercise}>Stop Inner Calm Exercise</Button>
            </div>
          )}
        </div>
      )}
    </InnerCalmContainer>
  );
};

export default InnerCalmExercise;