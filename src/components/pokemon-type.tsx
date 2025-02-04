import { Leaf } from "lucide-react";
import { color } from "motion/react";
import React from "react";

type PokemonTypeProps = {
  type: string;
};

const PokemonType = ({ type }: PokemonTypeProps) => {
  const checkType = (type: string) => {
    switch (type) {
      case "grass":
        return {
          color: "#7C5",
          text: "GRASS",
        };
      case "poison":
        return {
          color: "#A59",
          text: "POISON",
        };
      default:
    }
  };

  const pokeType = checkType(type);

  console.log(pokeType);

  return (
    <div
      className={`w-[110px] bg-[${pokeType?.color}] rounded-md flex gap-2 items-center justify-center`}
    >
      <span className="font-bold text-white text-xl flex items-center">
        ${pokeType?.text}
      </span>
    </div>
  );
};

export default PokemonType;
