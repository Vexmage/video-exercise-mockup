import React from 'react';

interface AnswerOptionsProps {
  options: string[];
  selected: number | null;
  onSelect: (index: number) => void;
}

const AnswerOptions: React.FC<AnswerOptionsProps> = ({ options, selected, onSelect }) => (
  <div style={{ marginBottom: '1rem' }}>
    {options.map((option, idx) => (
      <button
        key={idx}
        onClick={() => onSelect(idx)}
        style={{
          display: 'block',
          width: '100%',
          marginBottom: '0.5rem',
          padding: '0.75rem',
          border: '1px solid #999',
          backgroundColor: selected === idx ? '#ddd' : '#f9f9f9',
          cursor: 'pointer',
        }}
      >
        {option}
      </button>
    ))}
  </div>
);

export default AnswerOptions;
