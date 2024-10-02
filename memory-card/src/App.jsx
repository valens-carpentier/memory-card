import { useState } from 'react';
import Card from './components/Card.jsx';
import ScoreDisplay from './components/ScoreDisplay.jsx';
import './styles/App.css'; // Make sure to import the App.css

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
      <header className="App-header">
        <h1>Pokémon Gallery</h1>
        <ScoreDisplay score={score} bestScore={bestScore} />
      </header>
      <div className="pokemon-container">
        <Card handleScore={handleScore} />
      </div>
    </div>
  );
}

export default App;