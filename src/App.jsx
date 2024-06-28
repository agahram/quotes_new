import { DataProvider } from "../src/context/FetchContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Favourite from "./pages/Favourite";
import PageNotFound from "./pages/PageNotFound";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="favourite" element={<Favourite />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}
