import { BrowserRouter, Route, Routes } from "react-router-dom";

import Pokedex from "./pages/Pokedex";
import MainLayout from "./layout/MainLayout";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import GeneralPokedex from "./pages/GeneralPokedex/GeneralPokedex";
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="pokedex" element={<Pokedex />} />
          <Route path="pokedex/all" element={<GeneralPokedex />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
