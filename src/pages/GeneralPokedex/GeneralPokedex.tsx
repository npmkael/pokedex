import { Search } from "lucide-react";
import Title from "../../components/Title";

import "../../styles/components/search.scss";
import PokemonType from "../../components/pokemon-type";

const GeneralPokedex = () => {
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
          <tr className="bg-[#F6F6F6]">
            <th className="p-4">#</th>
            <th>Name</th>
            <th>Type</th>
            <th>Speed</th>
            <th>Sp. Def</th>
            <th>Sp. Atk</th>
            <th>Defense</th>
            <th>Attack</th>
            <th>HP</th>
            <th>Total</th>
          </tr>
          <tr>
            <td>
              <span className="flex items-center gap-2">
                <img src="/bulba-sprite.png" alt="" />
                No. 0001
              </span>
            </td>
            <td>Bulbasaur</td>
            <td className="flex flex-col gap-2 py-4">
              <PokemonType />
              <PokemonType />
            </td>
            <td>45</td>
            <td>65</td>
            <td>65</td>
            <td>49</td>
            <td>49</td>
            <td>45</td>
            <td>
              <span className="font-bold">318</span>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default GeneralPokedex;
