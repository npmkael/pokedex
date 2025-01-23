import { Moon } from "lucide-react";
import "./Navbar.scss";
import { useState } from "react";

import { motion } from "motion/react";

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

  return (
    <header className="bg-white/40 sticky top-0 z-40 backdrop-blur-lg left-0 right-0 border border-gray-100">
      <div className="container flex h-24 justify-between items-center w-full">
        <div
          className="left h-full flex items-center"
          onMouseEnter={() => setIsActive(true)}
          onMouseLeave={() => setIsActive(false)}
        >
          <div className="pokemon-nav">
            <img src="/pokeball-nav.svg" alt="" width="30" height="30" />
            <span>Pokémon Data</span>
          </div>

          {isActive && (
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={transition}
              className="menu left"
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
          <div className="nav-item">
            <Moon />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
