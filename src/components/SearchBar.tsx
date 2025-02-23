import { Search } from "lucide-react";
import React from "react";

type Props = {
  query: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
};

const SearchBar = ({ query, setSearchQuery }: Props) => {
  return (
    <div className="py-4 px-8 flex-grow flex items-center gap-1 bg-white border border-gray-100 focus-within:shadow-drop-3 transition-all duration-200 rounded-3xl">
      <button>
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
  );
};

export default SearchBar;
