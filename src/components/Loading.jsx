import "../styles/loading.css";
import { useEffect, useState } from "react";
import { motion as m } from "framer-motion";

let loadingDots = ["   ", ".  ", ".. ", "..."];

export default function Loading() {
  const [loadingIndex, setLoadingIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingIndex((prevIndex) => (prevIndex === 3 ? 0 : prevIndex + 1));
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loading-container">
      <div className="gif-container">
        <m.img
          src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExeGc4cGJnbnI1am5ud2hjZWI0cWcxa3VvYTExaWZveTE3NG12N2lxZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/i2tLw5ZyikSFdkeGHT/giphy.gif"
          width="200"
          height="200"
          frameBorder="0"
          className="loading-gif"
          initial={{ height: 0, width: 0 }}
          animate={{ height: 200, width: 200 }}
          exit={{ height: 2000, width: 2000, opacity: 0 }}
          transition={{ duration: 0.3 }}
        ></m.img>
      </div>
      <m.pre
        className="loading-indicator"
        initial={{ translateY: 500 }}
        animate={{ translateY: 0 }}
        transition={{ duration: 0.3 }}
      >
        {"Fetching characters" + loadingDots[loadingIndex]}
      </m.pre>
    </div>
  );
}
