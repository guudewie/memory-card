import Lobby from "./components/Lobby";
import Loading from "./components/Loading";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { v4 as uuidv4 } from "uuid";

export default function App() {
  const [loading, setLoading] = useState(false);

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
