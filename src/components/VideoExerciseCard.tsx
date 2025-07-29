import React, { useState } from 'react';
import VideoEmbed from './VideoEmbed';
import Question from './Question';
import AnswerOptions from './AnswerOptions';
import Feedback from './Feedback';

const VideoExerciseCard: React.FC = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const correctIndex = 2;

  const handleSelect = (index: number) => {
    setSelected(index);
    setIsCorrect(index === correctIndex);
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', maxWidth: '600px', margin: '2rem auto' }}>
      <VideoEmbed videoId="dQw4w9WgXcQ" timestamp="0:42" />
      <Question text="What does JSX stand for?" />
      <AnswerOptions
        options={['JavaScript and XML', 'JavaScript Syntax Extension', 'JavaScript XML', 'Java Syntax Extension']}
        selected={selected}
        onSelect={handleSelect}
      />
      {selected !== null && <Feedback isCorrect={isCorrect!} />}
    </div>
  );
};

export default VideoExerciseCard;
