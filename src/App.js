import React, { useState } from "react";
import Game from "./components/Game";
import "./App.css";

const App = () => {
  const [difficulty, setDifficulty] = useState("easy");
  const [paragraphs] = useState({
    easy: "This is an easy sentence.",
    medium:
      "Here is a medium difficulty sentence with more words and complexity.",
    hard: "This is a hard sentence, which includes complex vocabulary, multiple punctuation marks, and is designed to challenge your typing speed and accuracy.",
  });

  const handleDifficultyChange = (e) => {
    setDifficulty(e.target.value);
  };

  return (
    <div className="app">
      <h1>Typing Game</h1>
      <div>
        <label>Select Difficulty: </label>
        <select value={difficulty} onChange={handleDifficultyChange}>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>
      <Game paragraph={paragraphs[difficulty]} />
    </div>
  );
};

export default App;
