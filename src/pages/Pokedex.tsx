import GameVersion from "../components/GameVersion";
import Title from "../components/Title";
import { pokemonGenerations } from "../constants/data";
import { motion } from "motion/react";

const Pokedex = () => {
  return (
    <div className="relative z-10">
      <Title
        title="Pokémon Generations"
        subtitle=" Information on all the Pokémon creatures from the entire game series."
      />

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
