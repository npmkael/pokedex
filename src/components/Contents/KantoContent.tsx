const KantoContent = () => {
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
                Kanto is the setting of the first generation of games and can be
                explored in Generations II, III, IV, and VII.
              </span>{" "}
              The Kanto region (Japanese: カントー地方 Kanto region) is a region
              of the Pokémon world. Kanto is located east of Johto, which
              together form a joint landmass that is south of Sinnoh.
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

export default KantoContent;
