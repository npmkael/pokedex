import GameVersion from "../components/GameVersion";

const Pokedex = () => {
  return (
    <div className="h-full relative z-10">
      <section className="title-container text-center mx-auto mt-12 mb-[44px]">
        <h1 className="text-[48px] font-bold">Pokémon Pokédex</h1>
        <p className="text-[20px] font-semibold">
          Information on all the Pokémon creatures from the entire game series.
        </p>
      </section>

      <section className="mx-[148px]">
        <div>
          <GameVersion
            imgUrl="/all-pokemon.jpg"
            versionName="All Pokemon"
            versionLink="/all"
          />
        </div>
      </section>
    </div>
  );
};

export default Pokedex;
