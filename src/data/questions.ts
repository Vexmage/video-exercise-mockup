export const questions = [
  {
    question: "What is the correct way to initialize a state variable in React using useState?",
    options: [
      "const count = useState(0);",
      "let [count] = useState(0);",
      "const [count, setCount] = useState(0);",
      "useState(count, setCount, 0);",
    ],
    correctIndex: 2,
    explanation: "The useState hook returns an array with the current state value and a setter function, which we extract using array destructuring.",
    videoId: "O6P86uwfdR0",
    timestamp: "3:00",
  },
  {
    question: "What does the second element returned by useState do?",
    options: [
      "It holds the initial value",
      "It forces a re-render regardless of changes",
      "It updates the state and triggers a re-render",
      "It clears the state value",
    ],
    correctIndex: 2,
    explanation: "The second element is the setter function. Calling it updates the state and triggers a re-render.",
    videoId: "O6P86uwfdR0",
    timestamp: "5:45",
  },
];