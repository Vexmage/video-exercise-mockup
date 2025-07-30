import React, { useState } from 'react';
import VideoEmbed from './VideoEmbed';
import Question from './Question';
import AnswerOptions from './AnswerOptions';
import Feedback from './Feedback';
import { questions } from '../data/questions';

const q = questions[0];

const VideoExerciseCard: React.FC = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleSelect = (index: number) => {
    setSelected(index);
    setIsCorrect(index === q.correctIndex);
  };

  return (
    <div
      style={{
        border: '1px solid #ccc',
        padding: '1rem',
        maxWidth: '600px',
        margin: '2rem auto',
        borderRadius: '8px',
        backgroundColor: '#fafafa',
      }}
    >
      {/* Embed video at timestamp */}
      <VideoEmbed videoId={q.videoId} timestamp={q.timestamp} />

      {/* Render question text */}
      <Question text={q.question} />

      {/* Render answer options */}
      <AnswerOptions
        options={q.options}
        selected={selected}
        onSelect={handleSelect}
      />

      {/* Show feedback if an answer is selected */}
      {selected !== null && <Feedback isCorrect={isCorrect!} />}

      {/* Show explanation if answer is correct */}
      {isCorrect && (
        <p style={{ marginTop: '0.75rem', fontSize: '0.9rem', color: '#333' }}>
          {q.explanation}
        </p>
      )}
    </div>
  );
};

export default VideoExerciseCard;
