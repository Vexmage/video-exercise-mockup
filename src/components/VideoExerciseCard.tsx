import React, { useState } from 'react';
import VideoEmbed from './VideoEmbed';
import Question from './Question';
import AnswerOptions from './AnswerOptions';
import Feedback from './Feedback';
import { questions } from '../data/questions';

const VideoExerciseCard: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const q = questions[currentIndex];

  const handleSelect = (index: number) => {
    setSelected(index);
    setIsCorrect(index === q.correctIndex);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % questions.length;
    setCurrentIndex(nextIndex);
    setSelected(null);
    setIsCorrect(null);
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
      <VideoEmbed videoId={q.videoId} timestamp={q.timestamp} />
      <Question text={q.question} />
      <AnswerOptions
        options={q.options}
        selected={selected}
        onSelect={handleSelect}
      />
      {selected !== null && <Feedback isCorrect={isCorrect!} />}
      {isCorrect && (
        <p style={{ marginTop: '0.75rem', fontSize: '0.9rem', color: '#333' }}>
          {q.explanation}
        </p>
      )}

      {/* Show next button after answering */}
      {selected !== null && (
        <button
          onClick={handleNext}
          style={{
            marginTop: '1rem',
            padding: '0.5rem 1rem',
            fontSize: '1rem',
            backgroundColor: '#4f46e5',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Next Question
        </button>
      )}
    </div>
  );
};

export default VideoExerciseCard;
