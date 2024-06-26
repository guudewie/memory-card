import "../styles/modal.css";

export default function Modal({
  score,
  highscore,
  closeModal,
  shuffleCards,
  setScore,
}) {
  return (
    <div className="modal">
      <img
        className="title"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/1600px-Rick_and_Morty.svg.png"
      ></img>
      <div className="score-container">
        <div className="modal-score">Score: {score}</div>
        <div className="modal-score">Highscore: {highscore}</div>
      </div>
      <div className="button-container">
        <div
          className="start-game"
          onClick={() => {
            closeModal(), setScore();
          }}
        >
          Play Again
        </div>
        <div
          className="shuffle-game"
          onClick={() => {
            shuffleCards(), setScore();
          }}
        >
          Shuffle Characters
        </div>
      </div>
    </div>
  );
}
