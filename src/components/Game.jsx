import { useState } from "react";
import Card from "./Card";

export default function Game({ characters }) {
  const [score, setScore] = useState(0);
  const [highscore, setHighscore] = useState(0);

  return (
    <div className="game-container">
      <div className="header">
        <div className="score">Leeeeel</div>
        <div className="highscore">Leeeeeel</div>
      </div>
      <div className="all-card-container">
        {characters.map((char) => {
          return <Card character={char} key={char.key}></Card>;
        })}
      </div>
    </div>
  );
}
