import GameVersion from "../components/GameVersion";
import { pokemonGenerations } from "../constants/data";

const Pokedex = () => {
  return (
    <div className="relative z-10">
      <section className="title-container text-center mx-auto mt-12 mb-[44px]">
        <h1 className="text-[48px] font-bold">Pokémon Pokédex</h1>
        <p className="text-[20px] font-semibold">
          Information on all the Pokémon creatures from the entire game series.
        </p>
      </section>

      <section className="mx-[148px] mb-8">
        <div className="grid grid-cols-[350px_350px_350px] gap-6 justify-center">
          {pokemonGenerations.map((generation) => (
            <GameVersion
              key={generation.versionLink}
              imgUrl={generation.imgUrl}
              versionName={generation.versionName}
              versionLink={generation.versionLink}
              regionName={generation.regionName}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Pokedex;
