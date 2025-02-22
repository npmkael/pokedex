import { PokeAPIResponse, PokeAPILimit } from "../types/pokeApi";

const fetchPokemonList = async (): Promise<PokeAPILimit> => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100");

  if (!response.ok) {
    console.error("Error fetching Pokemon list");
    throw new Error("Network response was not ok");
  }

  return response.json();
};

const fetchPokemonDetails = async (url: string): Promise<PokeAPIResponse> => {
  const response = await fetch(url);

  if (!response.ok) {
    console.error(`Error fetching Pokemon details from ${url}`);
    throw new Error("Network response was not ok");
  }

  return response.json();
};

export const getPokemons = async (): Promise<PokeAPIResponse[]> => {
  const pokemonList = await fetchPokemonList();

  const detailsPromises = pokemonList.results.map((pokemon) =>
    fetchPokemonDetails(pokemon.url)
  );

  return Promise.all(detailsPromises);
};
