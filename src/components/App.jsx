import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Layout.jsx";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage.jsx";
import HomePage from "../pages/HomePage/HomePage.jsx";
import ShoppingCartPage from "../pages/ShoppingCartPage/ShoppingCartPage.jsx";

export default function App() {
  return (
    <div>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="shopping" element={<ShoppingCartPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}
