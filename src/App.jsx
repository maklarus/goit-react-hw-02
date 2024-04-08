import './App.css';
import { useState, useEffect } from 'react';
import Description from './components/Description/Descriptions';
import Feedback from './components/Feedback/Feedback';
import Options from './components/Options/Options';
import Notification from './components/Notification/Notification';

export default function App() {
  const [feedbacks, setFeedbacks] = useState(() => {
    const savedFeedback = localStorage.getItem('feedbacks');
    if (savedFeedback !== null) {
      return JSON.parse(savedFeedback);
    }

    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  useEffect(() => {
    localStorage.setItem('feedbacks', JSON.stringify(feedbacks));
  }, [feedbacks]);

  const updateFeedback = feedbackType => {
    setFeedbacks({
      ...feedbacks,
      [feedbackType]: feedbacks[feedbackType] + 1,
    });
  };

  const resetFeedback = () => {
    setFeedbacks({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback = feedbacks.good + feedbacks.neutral + feedbacks.bad;

  const goodPercentage = Math.round(
    (feedbacks.good / totalFeedback + feedbacks.neutral / totalFeedback) * 100
  );

  return (
    <>
      <Description></Description>
      <Options
        resetFeedback={resetFeedback}
        feedbacks={feedbacks}
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
      ></Options>
      {totalFeedback === 0 && <Notification></Notification>}
      {totalFeedback > 0 && (
        <Feedback
          goodPercentage={goodPercentage}
          totalFeedback={totalFeedback}
          feedbacks={feedbacks}
        ></Feedback>
      )}
    </>
  );
}
