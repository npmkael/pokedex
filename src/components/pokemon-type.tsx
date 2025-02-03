import { Leaf } from "lucide-react";
import { color } from "motion/react";
import React from "react";

type PokemonTypeProps = {
  type: string;
};

const PokemonType = () => {
  const checkType = (type: string) => {
    switch (type) {
      case "grass":
        return <div></div>;
    }
  };

  const type = checkType("grass");

  return (
    <div className="w-[110px] bg-[#7C5] rounded-md flex gap-2 items-center justify-center">
      <span className="font-bold text-white text-xl flex items-center">
        GRASS
      </span>
    </div>
  );
};

export default PokemonType;
