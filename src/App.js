import React, { useState } from 'react';
import Survey from './components/Survey';
import WelcomeScreen from './components/WelcomeScreen';
import ThankYouScreen from './components/ThankYouScreen'; // Import ThankYouScreen

function App() {
  const [surveyStarted, setSurveyStarted] = useState(false); // Flag to track if the survey is started
  const [surveyCompleted, setSurveyCompleted] = useState(false);
  
  // Starts the survey when "Start Survey" is clicked
  const startSurvey = () => {
    setSurveyStarted(true); // Mark survey as started
  };

  // Marks the survey as completed and shows the Thank You screen
  const handleSurveyComplete = () => {
    setSurveyCompleted(true);
    // After 5 seconds, we reset everything to show the Welcome screen again.
    setTimeout(() => {
      setSurveyCompleted(false);
      setSurveyStarted(false);
    }, 5000);
  };

  return (
    <div className="app-container">
      {!surveyStarted ? (
        // Show the Welcome Screen if survey has not started
        <WelcomeScreen onStart={startSurvey} />
      ) : surveyCompleted ? (
        // Show the Thank You Screen when survey is completed
        <ThankYouScreen />
      ) : (
        // Show the Survey if it's in progress
        <Survey onSurveyComplete={handleSurveyComplete} />
        
      )}
    </div>
  );
}

export default App;
