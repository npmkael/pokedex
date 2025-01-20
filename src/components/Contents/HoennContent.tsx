import React from "react";

const HoennContent = () => {
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
                It is the setting of Pokémon Ruby, Sapphire, Emerald, Omega
                Ruby, and Alpha Sapphire. It was the third core series region to
                be introduced.
              </span>{" "}
              The Hoenn region (Japanese: ホウエン地方 Hoenn region) is a region
              of the Pokémon world. It is located south of Sinnoh,[1] and
              southwest of both Kanto and Johto.
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

export default HoennContent;
