import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchPokemon } from "../../services/api";
import "./pokemon.css";

const PokemonDetail = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const loadPokemon = async () => {
      try {
        const data = await fetchPokemon(id);
        setPokemon(data);
      } catch (error) {
        console.error(error);
      }
    };
    loadPokemon();
  }, [id]);

  if (!pokemon) return <div>Carregando...</div>;

  return (
    <div className="searched-pokemon">
      <div className="searched-pokemon_header">
        <Link to="/" className="btn">
          &larr; Back
        </Link>
      </div>
      <div className="pokemonInfo">
        <div className="pokemon-details">
          <h1>{pokemon.name}</h1>
        </div>
      </div>

      <img className="imagePoke" src={pokemon.sprites.front_default} alt={pokemon.name} />
      <div>
        <p>
          <strong>ID:</strong> {pokemon.id}
        </p>
        <p>
          <strong>Nome:</strong> {pokemon.name}
        </p>
        <p>
          <strong>Altura:</strong> {pokemon.height}
        </p>
        <p>
          <strong>Peso:</strong> {pokemon.weight}
        </p>
        <p>
          <strong>Tipos:</strong>{" "}
          {pokemon.types.map((t) => t.type.name).join(", ")}
        </p>
      </div>
    </div>
  );
};

export default PokemonDetail;
