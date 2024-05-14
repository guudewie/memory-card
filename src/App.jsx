import Lobby from "./components/Lobby";
import Loading from "./components/Loading";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Game from "./components/Game";

export default function App() {
  const [loading, setLoading] = useState(false);
  const [playGame, setPlayGame] = useState(false);
  const [chars, setChars] = useState();

  function toggleLoading() {
    setLoading((prevLoading) => !prevLoading);
  }

  async function fetchChars() {
    toggleLoading();
    console.log("start");
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const characters = await response.json();
      setChars(characters.results);
      toggleLoading();
      return characters;
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
        <Game characters={chars}></Game>
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
