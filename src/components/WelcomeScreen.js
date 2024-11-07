import React from 'react';
import './WelcomeScreen.css'; // Import the CSS file for styling

const WelcomeScreen = ({ onStart }) => {
  return (
    <div className="welcome-screen">
      <h1>Welcome to the Survey</h1>
      <p>Please click the button below to start the survey.</p>
      <button className="start-button" onClick={onStart}>
        Start Survey
      </button>
    </div>
  );
};

export default WelcomeScreen;
