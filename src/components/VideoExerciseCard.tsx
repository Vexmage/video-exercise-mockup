import React, { useState } from 'react';
import VideoEmbed from './VideoEmbed';
import Question from './Question';
import AnswerOptions from './AnswerOptions';
import Feedback from './Feedback';

const VideoExerciseCard: React.FC = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  // Correct answer: index 2 ('const [count, setCount] = useState(0);')
  const correctIndex = 2;

  const handleSelect = (index: number) => {
    setSelected(index);
    setIsCorrect(index === correctIndex);
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
      {/* Updated video and timestamp */}
      <VideoEmbed videoId="O6P86uwfdR0" timestamp="3:00" />

      {/* Updated question */}
      <Question text="What is the correct way to initialize a state variable in React using useState?" />

      {/* Updated answer options */}
      <AnswerOptions
        options={[
          'const count = useState(0);',
          'let [count] = useState(0);',
          'const [count, setCount] = useState(0);',
          'useState(count, setCount, 0);',
        ]}
        selected={selected}
        onSelect={handleSelect}
      />

      {/* Show feedback only after selection */}
      {selected !== null && <Feedback isCorrect={isCorrect!} />}
    </div>
  );
};

export default VideoExerciseCard;
