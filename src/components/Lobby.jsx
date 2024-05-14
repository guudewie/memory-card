import "../styles/lobby.css";
import { easeInOut, motion as m } from "framer-motion";

export default function Lobby({ onPlay, loading }) {
  return (
    <div className="lobby-container">
      <m.img
        className="title"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/1600px-Rick_and_Morty.svg.png"
        exit={{ scale: 0 }}
        initial={{ scale: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      ></m.img>
      <m.div
        className="sub-title"
        exit={{ translateX: 1000 }}
        initial={{ translateX: 0 }}
        transition={{
          duration: 0.3,
          ease: easeInOut,
          delay: 0.1,
        }}
      >
        Memory
      </m.div>
      <m.div
        className="start-game"
        onClick={onPlay}
        exit={{ translateY: 5000 }}
        initial={{ translateY: 0 }}
        transition={{
          duration: 0.3,
          ease: easeInOut,
          delay: 0.1,
        }}
      >
        Start Game
      </m.div>
    </div>
  );
}
