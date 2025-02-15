import { Search } from "lucide-react";
import Title from "../../components/Title";

import "../../styles/components/search.scss";
import PokemonType from "../../components/pokemon-type";
import { useState, useEffect } from "react";

const GeneralPokedex = () => {
  const [pokemonList, setPokemonList] = useState();
  const [pokemonDetails, setPokemonDetails] = useState();
  const [isLoading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=20"
        );

        if (!response.ok) {
          console.log("Error here 1st fetch");
          throw new Error("Network response was not ok");
        }

        const result = await response.json();
        setPokemonList(result.results);

        const detailsPromises = result.results.map(async (pokemon) => {
          const detailsResponse = await fetch(pokemon.url);

          if (!detailsResponse.ok) {
            throw new Error("Network response was not ok");
          }

          return detailsResponse.json();
        });

        const detailsResults = await Promise.all(detailsPromises);
        setPokemonDetails(detailsResults);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemons();
  }, []);

  // add pokeball loading animation (soon)
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // add error design (soon)
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <Title
        title="Complete Pokémon Pokédex"
        subtitle="This is a full list of every Pokémonfrom all 9 generations of the Pokémon series, along with theicr main stats."
      />

      {/* Search and Filter container */}
      <div className="w-[80%] mx-auto mb-8">
        <div className="py-4 px-8 flex items-center gap-1 bg-white border border-gray-100 focus-within:shadow-drop-3 transition-all duration-200 rounded-3xl">
          <button type="submit">
            <Search className="text-gray-300" />
          </button>
          <input
            className="w-full outline-none px-2 py-1"
            type="text"
            placeholder="Search..."
          />
        </div>
      </div>

      {/* Main container */}
      <div className="bg-white w-[80%] mx-auto p-6 border border-gray-100 shadow-con mb-4 shadow-drop-1">
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
            {pokemonDetails.map((poke) => (
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
                  <span className="font-bold">
                    {poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}
                  </span>
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
      </div>
    </div>
  );
};

export default GeneralPokedex;
