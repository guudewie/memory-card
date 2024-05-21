import Lobby from "./components/Lobby";
import Loading from "./components/Loading";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Game from "./components/Game";
import { v4 as uuidv4 } from "uuid";

export default function App() {
  const [loading, setLoading] = useState(false);
  const [playGame, setPlayGame] = useState(false);
  const [chars, setChars] = useState();

  function toggleLoading() {
    setLoading((prevLoading) => !prevLoading);
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

  async function fetchChars() {
    toggleLoading();
    console.log("start");
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const responseJson = await response.json();
      console.log(responseJson.results);
      setChars(transformObject(responseJson.results));

      toggleLoading();
    } catch (error) {
      toggleLoading();
      throw new Error(error);
    }
  }

  return (
    <AnimatePresence initial={false} mode="wait">
      {loading ? (
        <Loading key={1}></Loading>
      ) : playGame ? (
        <Game charObject={chars}></Game>
      ) : (
        <Lobby
          key={2}
          onPlay={() => {
            setPlayGame(true);
            fetchChars();
          }}
          loading={loading}
        ></Lobby>
      )}
    </AnimatePresence>
  );
}
