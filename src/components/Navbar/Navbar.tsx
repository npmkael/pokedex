import "./Navbar.scss";

const Navbar = () => {
  return (
    <header className="bg-white/40 sticky top-0 z-40 backdrop-blur-lg w-full border border-b-gray-200/10">
      <div className="container flex h-24 items-center justify-center">
        {/* left */}
        <div className="left">
          <div className="pokemon-nav"></div>
        </div>

        <div className="logo-container">
          <img src="/pokeball-icon.png" alt="pokeball" />
          <span>Wébdex</span>

          <div className="beta">BETA</div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
