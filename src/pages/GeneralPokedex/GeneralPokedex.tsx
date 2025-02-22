import { Search } from "lucide-react";
import Title from "../../components/Title";
import GeneralPokemonTable from "./GeneralPokemonTable";

import { useState } from "react";

import { useQuery } from "@tanstack/react-query";
import { getPokemons } from "../../services/api";
import { PokeAPIResponse } from "../../types/pokeApi";
import Spinner from "../../components/Spinner";
import { useDebounce } from "use-debounce";
import SearchBar from "../../components/SearchBar";

const GeneralPokedex = () => {
  const [query, setSearchQuery] = useState("");
  const [debouncedQuery] = useDebounce(query, 300);

  const { data, isLoading, isError, error } = useQuery<PokeAPIResponse[]>({
    queryKey: ["data"],
    queryFn: getPokemons,
  });

  if (isLoading) return <Spinner />;

  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div>
      <Title
        title="Complete Pokémon Pokédex"
        subtitle="This is a full list of every Pokémonfrom all 9 generations of the Pokémon series, along with theicr main stats."
      />

      {/* Search and Filter container */}
      <div className="w-[80%] mx-auto mb-8">
        <SearchBar query={query} setSearchQuery={setSearchQuery} />
      </div>

      {/* Main container */}
      <div className="bg-white w-[80%] mx-auto p-6 border border-gray-100 shadow-con mb-4 shadow-drop-1">
        <GeneralPokemonTable query={debouncedQuery} data={data} />
      </div>
    </div>
  );
};

export default GeneralPokedex;
