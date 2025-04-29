import axios from "axios";

export const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
});

export const fetchPokemonList = async (limit = 50) => {
  const response = await api.get(`pokemon?limit=${limit}`);
  return response.data.results;
};

export const fetchPokemon = async (identifier) => {
  const response = await api.get(`pokemon/${identifier}`);
  return response.data;
};
