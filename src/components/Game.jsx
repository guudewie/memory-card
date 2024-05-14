import { useState } from "react";
import Card from "./Card";

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
          return <Card character={char} key={char.key}></Card>;
        })}
      </div>
    </div>
  );
}
