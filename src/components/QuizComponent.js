import React, { useState } from 'react';

function QuizComponent({ questions }) {
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleChange = (e, index) => {
    setAnswers({
      ...answers,
      [index]: e.target.value
    });
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  return (
    <div className="quiz-component">
      {questions.map((question, index) => (
        <div key={index}>
          <h3>{question.question}</h3>
          {question.options.map((option, i) => (
            <label key={i}>
              <input
                type="radio"
                name={`question-${index}`}
                value={option}
                onChange={(e) => handleChange(e, index)}
              />
              {option}
            </label>
          ))}
        </div>
      ))}
      <button onClick={handleSubmit}>Submit</button>
      {showResults && (
        <div className="results">
          {questions.map((question, index) => (
            <div key={index}>
              <h4>{question.question}</h4>
              <p>Your answer: {answers[index]}</p>
              <p>Correct answer: {question.correctAnswer}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default QuizComponent;