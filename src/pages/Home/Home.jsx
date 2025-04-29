import { useEffect, useState } from "react";
import { fetchPokemonList, fetchPokemon } from "../../services/api";
import PokemonCard from "../../components/PokemonCard";
import { useNavigate } from "react-router-dom";
import "./home.css";
import Header from "../../components/Header/Header";

const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const loadPokemons = async () => {
      const data = await fetchPokemonList();
      setPokemons(data);
    };
    loadPokemons();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (search.trim() === "") return;
    try {
      const data = await fetchPokemon(search.toLowerCase());
      navigate(`/pokemon/${data.id}`);
    } catch (error) {
      alert("Pokémon não encontrado!", error);
    }
  };

  return (
    <div className="container">
      <Header />
      <div className="box">
        <div className="search-container">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Buscar por nome ou ID"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button type="submit" className="btn">
              Buscar
            </button>
          </form>
        </div>
      </div>
      <div className="pokemons-container-feed">
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default Home;
