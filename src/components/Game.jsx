import { useState } from "react";
import Card from "./Card";

export default function Game({ charObject }) {
  const [score, setScore] = useState(0);
  const [highscore, setHighscore] = useState(0);
  const [characters, setCharacters] = useState(charObject);

  function handleCardClick(id) {
    let correctClick = false;
    const updatedCharacters = characters.map((char) => {
      if (char.key == id && !char.checked) {
        char.checked = true;
        correctClick = true;
      }
      return char;
    });

    setCharacters(updatedCharacters);

    if (correctClick) {
      handleGoodMove();
    } else {
      handleBadMove();
    }
  }

  function handleGoodMove() {
    setScore(score + 1);
  }

  function handleBadMove() {
    setScore(0);

    if (score > highscore) {
      setHighscore(score);
    }
    let updatedCharacters = uncheckChars(characters);
    setCharacters(updatedCharacters);
  }

  function uncheckChars(charObj) {
    return charObj.map((char) => ({ ...char, checked: false }));
  }

  return (
    <div className="game-container">
      <div className="header">
        <div className="score">Score :{score}</div>
        <div className="highscore">Highscore: {highscore}</div>
      </div>
      <div className="all-card-container">
        {characters.map((char) => {
          return (
            <Card
              character={char}
              id={char.key}
              key={char.key}
              handleCardClick={handleCardClick}
            ></Card>
          );
        })}
      </div>
    </div>
  );
}
