import './ScoreDisplay.css';

function ScoreDisplay({ score, bestScore }) {
  return (
    <div className="score-display">
      <p>Current Score: {score}</p>
      <p>Best Score: {bestScore}</p>
    </div>
  );
}

export default ScoreDisplay;