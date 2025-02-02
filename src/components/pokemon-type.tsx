import { Leaf } from "lucide-react";
import React from "react";

type PokemonTypeProps = {
  type: string;
};

const PokemonType = () => {
  const checkType = (type: string) => {};

  return (
    <div className="w-[110px] bg-[#7C5] rounded-md flex gap-2 items-center justify-center">
      <span className="font-bold text-white text-xl flex items-center">
        GRASS
      </span>
    </div>
  );
};

export default PokemonType;
