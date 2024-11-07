import React, { useState } from 'react';
import './Survey.css';

const questions = [
  { id: 1, text: 'How satisfied are you with our products?', options: [1, 2, 3, 4, 5] },
  { id: 2, text: 'How fair are the prices compared to similar retailers?', options: [1, 2, 3, 4, 5] },
  { id: 3, text: 'How satisfied are you with the value for money of your purchase?', options: [1, 2, 3, 4, 5] },
  { id: 4, text: 'How likely are you to recommend us to friends and family?', options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
  { id: 5, text: 'What could we do to improve our service?', options: [] } // Text input question
];

function Survey({ onSurveyComplete }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [textAnswer, setTextAnswer] = useState('');
  const [isAnswered, setIsAnswered] = useState(false); // Track if current question is answered

  // Handle answer for radio buttons
  const handleAnswer = (rating) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questions[currentQuestionIndex].id]: rating, // Save answer for the current question
    }));
    setIsAnswered(true); // Mark question as answered
  };

  // Handle text input for the "improvement" question
  const handleTextAnswer = (event) => {
    setTextAnswer(event.target.value); // Save text input answer
    setIsAnswered(event.target.value.trim() !== ''); // Mark question as answered if not empty
  };

  // Move to the next question
  const nextQuestion = () => {
    if (questions[currentQuestionIndex].options.length === 0) {
      setAnswers((prevAnswers) => ({
        ...prevAnswers,
        [questions[currentQuestionIndex].id]: textAnswer,
      }));
    }
    
    // Clear the textAnswer state when moving to the next question
    setTextAnswer('');

    // Move to the next question
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setIsAnswered(false); // Reset answered state for next question
    } else {
      onSurveyComplete(); // If it's the last question, submit the survey
    }
  };

  // Move to the previous question
  const previousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setIsAnswered(false); // Reset answered state when going back to previous question
    }
  };

  return (
    <div className="survey-container">
      <h2>{`Question ${currentQuestionIndex + 1} / ${questions.length}`}</h2>
      <div className="question">
        <p>{questions[currentQuestionIndex].text}</p>
        {questions[currentQuestionIndex].options.length > 0 ? (
          <div className="options">
            {questions[currentQuestionIndex].options.map((value) => (
              <label key={value}>
                <input
                  type="radio"
                  name={questions[currentQuestionIndex].id}
                  value={value}
                  onChange={() => handleAnswer(value)}
                  checked={answers[questions[currentQuestionIndex].id] === value}
                />
                {value}
              </label>
            ))}
          </div>
        ) : (
          <textarea
            value={textAnswer}
            onChange={handleTextAnswer}
            placeholder="Please type your answer here"
            required
          />
        )}
      </div>
      <div className="buttons">
        {currentQuestionIndex > 0 && <button onClick={previousQuestion}>Previous</button>}
        <button onClick={nextQuestion} disabled={!isAnswered}>
          {currentQuestionIndex === questions.length - 1 ? 'Submit' : 'Next'}
        </button>
      </div>
    </div>
  );
}

export default Survey;
