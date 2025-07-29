import React from 'react';

interface FeedbackProps {
  isCorrect: boolean;
}

const Feedback: React.FC<FeedbackProps> = ({ isCorrect }) => (
  <div style={{ fontWeight: 'bold', color: isCorrect ? 'green' : 'red' }}>
    {isCorrect ? 'Correct!' : 'Incorrect. Try again.'}
  </div>
);

export default Feedback;
