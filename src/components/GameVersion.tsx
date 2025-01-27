import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import { Link } from "react-router-dom";

import { ChevronRight } from "lucide-react";

type GameVersionProps = {
  imgUrl: string;
  versionName: string;
  versionLink: string;
  regionName?: string;
  key: string;
};

const GameVersion = ({
  imgUrl,
  versionName,
  versionLink,
  regionName,
  key,
}: GameVersionProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      variants={{
        initial: { opacity: 0, y: 20, filter: "blur(3px)" },
        animate: { opacity: 1, y: 0, filter: "blur(0px)" },
      }}
      transition={{ duration: 0.5 }}
    >
      <Link
        className="flex flex-col sm:max-w-[400px] max-h-[265] leading-[18px]"
        to={`/pokedex/${versionLink}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        key={versionLink}
      >
        <img
          src={imgUrl}
          alt={versionName}
          className="object-cover sm:w-[350px] w-full h-[220px] rounded-lg"
        />
        <div className="flex flex-col mt-[12px]">
          <div className="font-bold text-[17px] flex gap-2 items-center">
            {versionName}

            <span>
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ x: 0, opacity: 0 }}
                    animate={{ x: 3, opacity: 1 }}
                    exit={{ x: 0, opacity: 0 }}
                  >
                    <ChevronRight size={18} />
                  </motion.div>
                )}
              </AnimatePresence>
            </span>
          </div>
          {regionName ? (
            <span className="text-[14px]">{`${regionName} Region`}</span>
          ) : (
            <span className="text-[14px]">Master List</span>
          )}
        </div>
      </Link>
    </motion.div>
  );
};

export default GameVersion;
