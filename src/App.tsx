import { Carousel } from "./components/carousel";
import { slideData } from "./constants/data";

const App = () => {
  return (
    <main className="main-container">
      <div className="logo-container">
        <img src="/pokeball-icon.png" alt="pokeball" />
        <span>Wébdex</span>
      </div>

      <div className="absolute w-full top-[50%] transform translate-y-[-50%] z-10">
        <Carousel slides={slideData} />
      </div>

      <div className="circle__one" />
      <div className="circle__red" />
      <div className="circle__three" />

      <div className="circle__orange" />
    </main>
  );
};

export default App;
