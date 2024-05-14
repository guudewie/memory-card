import Lobby from "./components/Lobby";
import Loading from "./components/Loading";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Game from "./components/Game";

export default function App() {
  const [loading, setLoading] = useState(false);

  async function fetchChars() {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const characters = await response.results;
    return characters;
  }
  fetchChars();

  return (
    <AnimatePresence initial={false} mode="wait">
      {loading ? (
        <Loading key={1}></Loading>
      ) : (
        <Lobby
          key={2}
          onPlay={() => setLoading(true)}
          loading={loading}
        ></Lobby>
      )}
    </AnimatePresence>
  );
}
