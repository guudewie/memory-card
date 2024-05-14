import { useState } from "react";

export default function Game({ characters }) {
  const [score, setScore] = useState(0);
  const [highscore, setHighscore] = useState(0);

  return (
    <div className="game-container">
      <div className="header">
        <div className="score"></div>
        <div className="highscore"></div>
      </div>
      <div className="main">
        {characters.map((char) => {
          return (
            <div key={char.key}>
              <img src={char.url} />
              <div>{char.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
