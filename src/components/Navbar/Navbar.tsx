import { Menu, Moon, Sun, X } from "lucide-react";
import "./Navbar.scss";
import { useState, useEffect } from "react";

import { AnimatePresence, Variants, motion } from "motion/react";
import { Link } from "react-router-dom";

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
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen)
      document.querySelector("body")?.style.setProperty("overflow", "hidden");

    return () => {
      document.querySelector("body")?.style.removeProperty("overflow");
    };
  }, [isOpen]);

  return (
    <>
      <header className="bg-white/40 sticky top-0 z-40 backdrop-blur-lg left-0 right-0">
        <div className="container flex h-24 justify-between items-center w-full">
          <div
            className="left h-full md:flex items-center hidden"
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
                    <Link to="/pokedex">Pokédex</Link>
                  </li>
                  <li>Coming Soon!</li>
                  <li>Coming Soon!</li>
                  <li>Coming Soon!</li>
                </ul>
              </motion.div>
            )}
          </div>
          <div className="logo-container absolute left-0 right-0 mx-auto">
            <Link
              to={"/"}
              className="flex justify-center items-center gap-[6px]"
            >
              <img src="/pokeball-icon.png" alt="pokeball" />
              <span>Wébdex</span>
            </Link>

            {/* <div className="beta">BETA</div> */}
          </div>

          {/* NavMobile */}
          <div className="md:hidden block">
            <div
              className="p-2 rounded-md hover:bg-gray-200/50 cursor-pointer transition-all duration-100"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Menu />
            </div>
          </div>

          <div className="right md:block hidden">
            <div
              className="p-2 rounded-md hover:bg-gray-200/50 cursor-pointer transition-all duration-100"
              onClick={() => setIsDarkMode(!isDarkMode)}
            >
              <AnimatePresence mode="wait">
                {isDarkMode ? (
                  <motion.div
                    key="moon"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Moon />
                  </motion.div>
                ) : (
                  <motion.div
                    key="sun"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </header>
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed left-0 bottom-0 right-0 h-[300px] bg-white z-[100] p-8 shadow-sm rounded-tr-xl rounded-tl-xl"
              initial={{ y: 300 }}
              animate={{ y: 0 }}
              exit={{ y: 300 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex flex-col gap-4">
                <X
                  className="cursor-pointer "
                  onClick={() => setIsOpen(false)}
                />
                <div className="links">
                  <Link
                    className="font-bold text-xl"
                    to={"/pokedex"}
                    onClick={() => setIsOpen((prev) => !prev)}
                  >
                    Pokédex
                  </Link>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="absolute backdrop-blur-md top-0 bottom-0 left-0 right-0 bg-white/10 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
            />
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
