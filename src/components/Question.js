import React, { useState, useEffect } from 'react';

function Question({ question, onAnswer, onTextChange }) {
  const [selectedRating, setSelectedRating] = useState(null);

  useEffect(() => {
    // Reset selection when changing the question
    setSelectedRating(null);
  }, [question]);

  const handleRatingChange = (event) => {
    const rating = event.target.value;
    setSelectedRating(rating);
    onAnswer(rating); // Pass the selected rating back to the parent component (Survey.js)
  };

  return (
    <div className="question-container">
      <h2>{question.text}</h2>
      {question.options.length > 0 ? (
        <div className="rating-options">
          {question.options.map((value) => (
            <label key={value}>
              <input
                type="radio"
                name={question.id}
                value={value}
                checked={selectedRating === value.toString()}
                onChange={handleRatingChange}
              />
              {value}
            </label>
          ))}
        </div>
      ) : (
        <div className="text-area-container">
          <textarea
            placeholder="Type your response here"
            onChange={onTextChange} // Handle text input change for the last question
          />
        </div>
      )}
    </div>
  );
}

export default Question;
