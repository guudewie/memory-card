export default function Card({ character }) {
  return (
    <div className="card-container">
      <img className="card-image" src={character.url} />
      <div className="card-name">{character.name}</div>
    </div>
  );
}
