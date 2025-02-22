import { Search } from "lucide-react";
import Title from "../../components/Title";
import GeneralPokemonTable from "./GeneralPokemonTable";

import { useState } from "react";

import { useQuery } from "@tanstack/react-query";
import { getPokemons } from "../../services/api";
import { PokeAPIResponse } from "../../types/pokeApi";

const GeneralPokedex = () => {
  const [query, setSearchQuery] = useState("");
  const { data, isLoading, isError, error } = useQuery<PokeAPIResponse[]>({
    queryKey: ["data"],
    queryFn: getPokemons,
  });

  if (isLoading)
    return (
      <div className="h-full flex items-center justify-center">
        <img src="/pokeball-loading.gif" alt="" />
      </div>
    );

  if (isError) return <div>Error: {error.message}</div>;

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
            value={query}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Main container */}
      <div className="bg-white w-[80%] mx-auto p-6 border border-gray-100 shadow-con mb-4 shadow-drop-1">
        <GeneralPokemonTable query={query} data={data} />
      </div>
    </div>
  );
};

export default GeneralPokedex;
