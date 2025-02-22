import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Pokedex from "./pages/Pokedex";
import MainLayout from "./layout/MainLayout";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import GeneralPokedex from "./pages/GeneralPokedex/GeneralPokedex";
import Home from "./pages/Home/Home";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
};

export default App;
