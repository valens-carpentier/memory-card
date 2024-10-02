import { useState } from 'react';
import Card from './components/Card.jsx';
import ScoreDisplay from './components/ScoreDisplay.jsx';

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const handleScore = (isCorrect) => {
    if (isCorrect) {
      setScore(prevScore => {
        const newScore = prevScore + 1;
        if (newScore > bestScore) {
          setBestScore(newScore);
        }
        return newScore;
      });
    } else {
      setScore(0);
    }
  };

  return (
    <div className="App">
      <h1>Pokémon Gallery</h1>
      <ScoreDisplay score={score} bestScore={bestScore} />
      <Card handleScore={handleScore} />
    </div>
  );
}

export default App;