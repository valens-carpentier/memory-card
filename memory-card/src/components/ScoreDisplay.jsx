import React from 'react';
import '../styles/ScoreDisplay.css';

function ScoreDisplay({ score, bestScore }) {
  return (
    <div className="score-display">
      <p>Score: {score}</p>
      <p>Best Score: {bestScore}</p>
    </div>
  );
}

export default ScoreDisplay;