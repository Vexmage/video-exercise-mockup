import React from 'react';

interface QuestionProps {
  text: string;
}

const Question: React.FC<QuestionProps> = ({ text }) => (
  <h2 style={{ marginBottom: '1rem' }}>{text}</h2>
);

export default Question;
