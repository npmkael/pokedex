import { useState, useEffect } from "react";

import PokemonType from "../../components/pokemon-type";
import { Link } from "react-router-dom";
import { PokeAPIResponse } from "../../types/pokeApi";

type Props = {
  query: string;
  data: PokeAPIResponse[] | undefined;
};

type SortKey = "id" | "name" | null; // Possible filter keys
type SortOrder = "asc" | "desc"; // Possible sort orders

const GeneralPokemonTable = ({ query, data }: Props) => {
  const [sortKey, setSortKey] = useState<SortKey>("id");
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");

  // Filter the data based on the query (case-insenstive)
  const filteredData = data?.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(query.toLowerCase())
  );

  const sortedData = filteredData ? [...filteredData] : [];
  if (sortKey === "id") {
    sortedData.sort((a, b) =>
      sortOrder === "asc" ? a.id - b.id : b.id - a.id
    );
  } else if (sortKey === "name") {
    sortedData.sort((a, b) =>
      sortOrder === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    );
  }

  if (!sortedData || sortedData.length === 0) {
    return (
      <div>
        <span>No Pokemon found matching {query}</span>
      </div>
    );
  }

  const handleHeaderClick = (key: SortKey) => {
    if (sortKey === key) {
      // Toggle sort order if the same header is clicked
      setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      // Set new sort key and default to ascending order
      setSortKey(key);
      setSortOrder("asc");
    }
  };

  return (
    <table className="w-full text-left">
      <thead>
        <tr className="bg-[rgb(246,246,246)]">
          <th
            style={sortKey === "id" ? { backgroundColor: "#e8e8e8" } : {}}
            onClick={() => handleHeaderClick("id")}
          >
            <span>#</span>
          </th>
          <th
            style={sortKey === "name" ? { backgroundColor: "#e8e8e8" } : {}}
            onClick={() => handleHeaderClick("name")}
          >
            Name
          </th>
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
        {sortedData?.map((poke) => (
          <tr className="border-b border-gray-100">
            <td>
              <span className="flex items-center gap-2">
                <img
                  src={`https://img.pokemondb.net/sprites/scarlet-violet/icon/${poke.name}.png`}
                  alt=""
                  width={60}
                  height={56}
                  loading="lazy"
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
              {poke.types.map((type, index) => (
                <>
                  <PokemonType type={type.type.name} key={index} />
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
