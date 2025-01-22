import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pokedex from "./pages/Pokedex";
import MainLayout from "./layout/MainLayout";
import SwordShield from "./pages/SwordShield";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/pokedex" element={<Pokedex />} />
          <Route path="/pokedex/game/sword-shield" element={<SwordShield />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
