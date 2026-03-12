import React, { useState } from "react";

export default function App() {

  const [score, setScore] = useState(0);
  const getScoreBarStyle = () => {
    // 1- Compute width
    const scoreWidth = `${score * 10}%`;
    const getScoreBarStyle = () => {

      // width based on score
      const scoreWidth = `${score * 10}%`;
    
      // color depending on score
      let scoreColor = "#f3bc47";
    
      if (score <= 3) {
        scoreColor = "#f3bc47";
      } else if (score <= 6) {
        scoreColor = "#a0d468";
      } else {
        scoreColor = "#4caf50";
      }
    
      return {
        width: scoreWidth,
        backgroundColor: scoreColor,
      };
    };

    // 2- Compute color (optional)
    let scoreColor = `#f3bc47`;

    // 3 - Return the style object
    return {
      width: scoreWidth,
      backgroundColor: scoreColor,
    };
  };

  return (
    <>
      <div className="score-panel">
        <h1>My Score in React</h1>

        <small>Enter a score (0 to 10): </small>
        <input
         type="number"
          min="0"
           max="10"
        value={score}
        onChange={(e)=> setScore(e.target.value)}
        />

        <div className="score-bar">
          <div className="score-bar-value"
           style={getScoreBarStyle()}></div>
        </div>
      </div>
    </>
  );
}
