import React from "react";

type PokemonTypeProps = {
  type: string;
};

const PokemonType = ({ type }: PokemonTypeProps) => {
  return (
    <div
      className={`w-[66px] bg-${type} rounded-md flex gap-2 items-center justify-center`}
    >
      <span className="font-bold text-white text-xl flex items-center uppercase ">
        {type}
      </span>
    </div>
  );
};

export default PokemonType;
