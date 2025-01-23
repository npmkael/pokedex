import { Moon, Sun } from "lucide-react";
import "./Navbar.scss";
import { useState } from "react";

import { AnimatePresence, motion } from "motion/react";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <header className="bg-white/40 sticky top-0 z-40 backdrop-blur-lg left-0 right-0 border border-gray-100">
      <div className="container flex h-24 justify-between items-center w-full">
        <div
          className="left h-full flex items-center"
          onMouseLeave={() => setIsActive(false)}
        >
          <div className="pokemon-nav" onMouseEnter={() => setIsActive(true)}>
            <img src="/pokeball-nav.svg" alt="" width="30" height="30" />
            <span>Pokémon Data</span>
          </div>

          {isActive && (
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={transition}
              className="menu left border border-gray-100"
            >
              <ul>
                <li>
                  <a href="#">Pokédex</a>
                </li>
                <li>Coming Soon!</li>
                <li>Coming Soon!</li>
                <li>Coming Soon!</li>
              </ul>
            </motion.div>
          )}
        </div>

        <div className="logo-container">
          <div className="flex justify-center items-center gap-[6px]">
            <img src="/pokeball-icon.png" alt="pokeball" />
            <span>Wébdex</span>
          </div>

          {/* <div className="beta">BETA</div> */}
        </div>

        <div className="right">
          <div
            className="p-2 rounded-md hover:bg-gray-100 cursor-pointer transition-all duration-100"
            onClick={() => setIsDarkMode(!isDarkMode)}
          >
            {isDarkMode ? (
              <Moon />
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Sun />
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
