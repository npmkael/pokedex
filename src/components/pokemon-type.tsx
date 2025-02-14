import React from "react";

type PokemonTypeProps = {
  type: string;
};

const PokemonType = ({ type }: PokemonTypeProps) => {
  return (
    <a
      className={`type-${type} inline-block w-[66px] border roudned-md border-black/5 text-[.75rem] text-center text-white [text-shadow:_0_2px_4px_rgb(99_102_241_/_0.8)] uppercase`}
    >
      {type}
    </a>
  );
};

export default PokemonType;
