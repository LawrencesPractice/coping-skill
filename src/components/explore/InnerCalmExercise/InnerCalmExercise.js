import React, { useState, useEffect } from 'react';

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
    <div>
      {!calmState ? (
        <button onClick={handleStartExercise}>Start Inner Calm Exercise</button>
      ) : (
        <div>
          {completed ? (
            <div>
              <h2>Inner Calm Exercise Completed!</h2>
              <button onClick={handleStopExercise}>Start Again</button>
            </div>
          ) : (
            <div>
              <h2>Inner Calm Exercise</h2>
              <p>Find a quiet and comfortable space where you won't be disturbed.</p>
              <p>Sit in a relaxed position with your back straight and your body supported.</p>
              <p>Close your eyes and take a few slow, deep breaths.</p>
              <p>
                <span onClick={() => handleToggleSection(1)} style={{ cursor: 'pointer', fontWeight: 'bold' }}>
                  {expandedSections.includes(1) ? '▼' : '►'} Focus your attention on your breath:
                </span>
              </p>
              {expandedSections.includes(1) && (
                <ul>
                  <li>Notice the sensation as you inhale and exhale.</li>
                  <li>Feel the rise and fall of your chest or the breath at your nostrils.</li>
                </ul>
              )}
              <p>
                <span onClick={() => handleToggleSection(2)} style={{ cursor: 'pointer', fontWeight: 'bold' }}>
                  {expandedSections.includes(2) ? '▼' : '►'} Let go of thoughts and distractions:
                </span>
              </p>
              {expandedSections.includes(2) && (
                <ul>
                  <li>Acknowledge any thoughts or distractions without judgment.</li>
                  <li>Gently let go of them and bring your attention back to your breath.</li>
                </ul>
              )}
              <p>
                <span onClick={() => handleToggleSection(3)} style={{ cursor: 'pointer', fontWeight: 'bold' }}>
                  {expandedSections.includes(3) ? '▼' : '►'} Be present in the moment:
                </span>
              </p>
              {expandedSections.includes(3) && (
                <ul>
                  <li>Let go of worries, concerns, or thoughts about the past or future.</li>
                  <li>Be fully present with each breath, focusing on the here and now.</li>
                </ul>
              )}
              <p>Continue this practice for {formatTime(timer)}.</p>
              <button onClick={handleStopExercise}>Stop Inner Calm Exercise</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default InnerCalmExercise;