import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import { lazy } from "react";

const HomePage = lazy(() => import("../pages/Home"));
const CatalogPage = lazy(() => import("../pages/Catalog"));
const FavoritesPage = lazy(() => import("../pages/Favorites"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
