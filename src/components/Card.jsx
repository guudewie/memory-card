import "../styles/game.css";

export default function Card({ character, id, handleCardClick }) {
  return (
    <div className="card-container" onClick={() => handleCardClick(id)}>
      <img className="card-image" src={character.url} />
      <div className="card-name">{character.name}</div>
    </div>
  );
}
