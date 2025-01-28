import GameVersion from "../components/GameVersion";
import { pokemonGenerations } from "../constants/data";
import { motion } from "motion/react";

const Pokedex = () => {
  return (
    <div className="relative z-10">
      <section className="title-container text-center mx-auto mt-12 mb-[44px]">
        <h1 className="sm:text-[48px] text-[36px] font-bold dark:text-[#FAFAFA]">
          Pokémon Pokédex
        </h1>
        <p className="sm:text-[20px] text-[16px] font-semibold dark:text-[#FAFAFA]">
          Information on all the Pokémon creatures from the entire game series.
        </p>
      </section>

      <section className="mb-16">
        <motion.div
          className="grid lg:grid-cols-[350px_350px_350px] md:grid-cols-[350px_350px] sm:grid-cols-[300px_300px] grid-cols-[350px] gap-6 justify-center"
          initial="initial"
          animate="animate"
          transition={{ staggerChildren: 0.1 }}
        >
          {pokemonGenerations.map((generation) => (
            <GameVersion
              key={generation.versionLink}
              imgUrl={generation.imgUrl}
              versionName={generation.versionName}
              versionLink={generation.versionLink}
              regionName={generation.regionName}
            />
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default Pokedex;
