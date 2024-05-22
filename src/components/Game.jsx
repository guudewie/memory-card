import { useState } from "react";
import Card from "./Card";
import Modal from "./Modal";
import { v4 as uuidv4 } from "uuid";

export default function Game({ charObject, shuffleCards }) {
  const [score, setScore] = useState(0);
  const [highscore, setHighscore] = useState(0);
  const [characters, setCharacters] = useState(charObject);
  const [badMoveModalOpen, setbadMoveModalOpen] = useState(false);

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
    shuffle();
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
    setbadMoveModalOpen(true);
  }

  function uncheckChars(charObj) {
    return charObj.map((char) => (char.checked = false));
  }

  function shuffle() {
    let oldChars = [...characters];
    let newChars = [];

    let getRandom = () => Math.floor(Math.random() * oldChars.length);

    while (oldChars.length > 0) {
      let random = getRandom();
      newChars.push(oldChars[random]);
      oldChars.splice(random, 1);
    }
    setCharacters(newChars);
  }

  function transformObject(object) {
    let filteredChars = [];
    for (let i = 0; i < 9; i++) {
      filteredChars.push({
        url: object[i].image,
        name: object[i].name,
        key: uuidv4(),
        checked: false,
      });
    }
    return filteredChars;
  }

  function getNumbersString() {
    let numbers = new Set();
    while (numbers.size < 9) {
      numbers.add(Math.floor(Math.random() * 826));
    }
    return Array.from(numbers).toString();
  }

  async function fetchChars() {
    let url = "https://rickandmortyapi.com/api/character/" + getNumbersString();
    try {
      const response = await fetch(url);
      const responseJson = await response.json();
      setCharacters(transformObject(responseJson));
    } catch (error) {
      throw new Error(error);
    }
    setbadMoveModalOpen(false);
  }

  return (
    <div className="game-container">
      <div className="header">
        <div className="score">Score: {score}</div>
        <div className="highscore">Highscore: {highscore}</div>
        <div className="rules">Click each card only Ones!</div>
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
      {badMoveModalOpen && (
        <Modal
          highscore={highscore}
          score={score}
          closeModal={() => setbadMoveModalOpen(false)}
          shuffleCards={() => fetchChars()}
        ></Modal>
      )}
    </div>
  );
}
