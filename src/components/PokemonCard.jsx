import { Link } from "react-router-dom";
import "./pokemonCard.css";

const PokemonCard = ({ pokemon }) => {
  const id = pokemon.url.split("/")[6]; // extrai o ID da URL

  return (
    <div className="card">
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        alt={pokemon.name}
      />
      <div className="text">
        <h4 className="name">
          <span className="poke">{id}.</span>
          {pokemon.name}
        </h4>
      </div>

      <Link to={`/pokemon/${id}`} className="btn">
        Ver Detalhes
      </Link>
    </div>
  );
};

export default PokemonCard;
