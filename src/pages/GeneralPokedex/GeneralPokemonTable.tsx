import { useState, useEffect } from "react";

import PokemonType from "../../components/pokemon-type";
import { Link } from "react-router-dom";
import { PokeAPIResponse } from "../../types/pokeApi";

type Props = {
  query: string;
  data: PokeAPIResponse[] | undefined;
};

const GeneralPokemonTable = ({ query, data }: Props) => {
  // useEffect(() => {
  //   if (query) {
  //     const filtered = data?.filter((poke: PokeAPIResponse) =>
  //       poke.name.toLowerCase().includes(query.toLowerCase())
  //     );
  //     setFilteredPokemon(filtered);
  //   } else {
  //     setFilteredPokemon([]);
  //   }
  // }, [query, data]);

  return (
    <table className="w-full text-left">
      <thead>
        <tr className="bg-[rgb(246,246,246)]">
          <th>
            <span>#</span>
          </th>
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
        {data?.map((poke) => (
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
              <Link
                to={`/pokedex/${poke.name}`}
                className="font-bold hover:underline"
              >
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
