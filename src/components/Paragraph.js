import React from "react";

const Paragraph = ({ words, typedWords }) => {
  return (
    <div className="paragraph">
      {words.map((word, index) => {
        let className = "";
        if (typedWords[index] === "incorrect") {
          className = "incorrect";
        } else if (typedWords[index] === "correct") {
          className = "correct";
        }
        return (
          <span key={index} className={className}>
            {word}{" "}
          </span>
        );
      })}
    </div>
  );
};

export default Paragraph;
