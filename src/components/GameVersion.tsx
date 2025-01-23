import React, { useState, version } from "react";
import { AnimatePresence, motion } from "motion/react";

import { Link } from "react-router-dom";

import { ChevronRight } from "lucide-react";

type GameVersionProps = {
  imgUrl: string;
  versionName: string;
  versionLink: string;
  regionName?: string;
};

const GameVersion = ({
  imgUrl,
  versionName,
  versionLink,
  regionName,
}: GameVersionProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      className="flex flex-col max-w-[350px] max-h-[265] leading-[18px]"
      to={`/pokedex/${versionLink}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={imgUrl}
        alt={versionName}
        className="object-cover w-[350px] h-[220px] rounded-lg"
      />
      <div className="flex flex-col mt-[12px]">
        <div className="font-bold text-[20px] flex gap-2 items-center">
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
        {regionName ? <span>{regionName}</span> : <span>Master List</span>}
      </div>
    </Link>
  );
};

export default GameVersion;
