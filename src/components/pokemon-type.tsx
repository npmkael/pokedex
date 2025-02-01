import { Leaf } from "lucide-react";
import React from "react";

const PokemonType = () => {
  return (
    <div className="w-[110px] bg-[#455547] rounded-md flex gap-2 items-center">
      <div
        className="bg-[#63BB5A] w-[40px] h-[35px] rounded-tl-md rounded-bl-md flex items-center  pl-1.5"
        style={{
          clipPath: "polygon(0 0, 100% 0, 70% 100%, 0% 100%)",
        }}
      >
        <Leaf className="text-white" size={22} />
      </div>
      <span className="font-overpass font-bold text-white text-xl">GRASS</span>
    </div>
  );
};

export default PokemonType;
