const JohtoContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700">
                It was the second core series region to be introduced. First
                explored in Pokémon Gold and Silver, it is home to an additional
                100 Pokémon that were not present in the previous games. It is
                also the setting of Pokémon Crystal, Pokémon HeartGold, and
                Pokémon SoulSilver.
              </span>{" "}
              The Johto region (Japanese: ジョウト地方 Johto region) is a region
              of the Pokémon world. Johto is located west of Kanto, which
              together form a joint landmass that is south of Sinnoh and Sinjoh
              Ruins.
            </p>
            <img
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

export default JohtoContent;
