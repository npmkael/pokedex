import "./styles/main.scss";

const App = () => {
  return (
    <main className="main-container">
      <div className="left">
        <div className="logo-container">
          <img src="/pokeball-icon.png" alt="pokeball" />
          <span>Wébdex</span>
        </div>

        <div className="pokemon-display">
          <img src="/132.png" alt="bulbasaur" />
        </div>
      </div>
      <div className="circle__one" />
      <div className="circle__two" />
      <div className="circle__three" />
    </main>
  );
};

export default App;
