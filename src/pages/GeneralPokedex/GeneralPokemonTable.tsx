import { useState, useEffect } from "react";

import PokemonType from "../../components/pokemon-type";
import { Link } from "react-router-dom";
import { Result, PokeAPIResponse } from "../../types/api";

type Props = {
  query: string;
};

const GeneralPokemonTable = ({ query }: Props) => {
  const [pokemonDetails, setPokemonDetails] = useState<
    PokeAPIResponse[] | null
  >(null);
  const [filteredPokemon, setFilteredPokemon] = useState<
    PokeAPIResponse[] | undefined
  >();
  const [isLoading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=30"
        );

        if (!response.ok) {
          console.log("Error here 1st fetch");
          throw new Error("Network response was not ok");
        }

        const result = await response.json();

        const detailsPromises = result.results.map(async (pokemon: Result) => {
          const detailsResponse = await fetch(pokemon.url);

          if (!detailsResponse.ok) {
            throw new Error("Network response was not ok");
          }

          return detailsResponse.json();
        });

        const detailsResults: PokeAPIResponse[] = await Promise.all(
          detailsPromises
        );
        setPokemonDetails(detailsResults);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemons();
  }, []);

  useEffect(() => {
    if (query) {
      const filtered = pokemonDetails?.filter((poke: PokeAPIResponse) =>
        poke.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredPokemon(filtered);
    } else {
      setFilteredPokemon([]);
    }
  }, [query, filteredPokemon]);

  // add pokeball loading animation (soon)
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // add error design (soon)
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <table className="w-full text-left">
      <thead>
        <tr className="bg-[rgb(246,246,246)]">
          <th className="p-4">#</th>
          <th>Name</th>
          <th>Type</th>
          <th>HP</th>
          <th>Attack</th>
          <th>Defense</th>
          <th>Sp. Atk</th>
          <th>Sp. Def</th>
          <th>Speed</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {query.length > 0
          ? filteredPokemon?.map((poke) => (
              <tr className="border-b border-gray-100">
                <td>
                  <span className="flex items-center gap-2">
                    <img
                      src={`https://img.pokemondb.net/sprites/scarlet-violet/icon/${poke.name}.png`}
                      alt=""
                      width={60}
                      height={56}
                    />
                    No. {poke.id}
                  </span>
                </td>
                <td>
                  <Link to={`/pokedex/${poke.name}`} className="font-bold">
                    {poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}
                  </Link>
                </td>
                <td>
                  {poke.types.map((type) => (
                    <>
                      <PokemonType type={type.type.name} />
                      <br></br>
                    </>
                  ))}
                </td>
                {poke.stats.map((stat) => (
                  <td>{stat.base_stat}</td>
                ))}
                <td>
                  <span className="font-bold">
                    {poke.stats.reduce((acc, currentValue) => {
                      return acc + currentValue.base_stat;
                    }, 0)}
                  </span>
                </td>
              </tr>
            ))
          : pokemonDetails?.map((poke) => (
              <tr className="border-b border-gray-100">
                <td>
                  <span className="flex items-center gap-2">
                    <img
                      src={`https://img.pokemondb.net/sprites/scarlet-violet/icon/${poke.name}.png`}
                      alt=""
                      width={60}
                      height={56}
                    />
                    No. {poke.id}
                  </span>
                </td>
                <td>
                  <Link to={`/pokedex/${poke.name}`} className="font-bold">
                    {poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}
                  </Link>
                </td>
                <td>
                  {poke.types.map((type) => (
                    <>
                      <PokemonType type={type.type.name} />
                      <br></br>
                    </>
                  ))}
                </td>
                {poke.stats.map((stat) => (
                  <td>{stat.base_stat}</td>
                ))}
                <td>
                  <span className="font-bold">
                    {poke.stats.reduce((acc, currentValue) => {
                      return acc + currentValue.base_stat;
                    }, 0)}
                  </span>
                </td>
              </tr>
            ))}
      </tbody>
    </table>
  );
};

export default GeneralPokemonTable;
