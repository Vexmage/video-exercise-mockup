export const questions = [
  {
    id: 1,
    videoId: "O6P86uwfdR0",
    timestamp: "3:00",
    question: "What is the correct way to initialize a state variable in React using useState?",
    options: [
      "const count = useState(0);",
      "let [count] = useState(0);",
      "const [count, setCount] = useState(0);",
      "useState(count, setCount, 0);",
    ],
    correctIndex: 2,
    explanation:
      "The useState hook returns an array with the current state value and a setter function, which we extract using array destructuring.",
  },
];
