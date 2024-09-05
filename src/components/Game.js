import React, { useState, useEffect } from "react";
import Paragraph from "./Paragraph";

const Game = ({ paragraph }) => {
  const [input, setInput] = useState("");
  const [words, setWords] = useState(paragraph.split(" "));
  const [typedWords, setTypedWords] = useState(Array(words.length).fill(""));
  const [startTime, setStartTime] = useState(null); // To track the time
  const [correctWordCount, setCorrectWordCount] = useState(0); // Count of correct words
  const [wpm, setWpm] = useState(0); // Words per minute

  useEffect(() => {
    setWords(paragraph.split(" "));
    setTypedWords(Array(words.length).fill(""));
    setInput("");
    setStartTime(null); // Reset timer when the paragraph changes
    setCorrectWordCount(0);
    setWpm(0);
  }, [paragraph]);

  const handleInputChange = (e) => {
    if (!startTime) {
      setStartTime(new Date()); // Start timer on first key press
    }
    setInput(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === " ") {
      const typedWord = input.trim();
      const currentIndex = typedWords.findIndex((word) => word === "");

      if (currentIndex !== -1) {
        const isCorrect = typedWord === words[currentIndex];
        setTypedWords((prev) => {
          const newWords = [...prev];
          newWords[currentIndex] = isCorrect ? "correct" : "incorrect";
          return newWords;
        });

        if (isCorrect) {
          setCorrectWordCount((prevCount) => prevCount + 1); // Increment correct word count
        }

        // Calculate WPM
        const currentTime = new Date();
        const timeElapsed = (currentTime - startTime) / 1000 / 60; // Time in minutes
        const wpmCalculation = (correctWordCount + 1) / timeElapsed;
        setWpm(Math.round(wpmCalculation));

        setInput("");
      }

      e.preventDefault();
    }
  };

  return (
    <div className="game">
      <Paragraph words={words} typedWords={typedWords} />
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Start typing..."
      />
      <div className="wpm-display">
        <p>Words Per Minute: {wpm}</p>
      </div>
    </div>
  );
};

export default Game;
