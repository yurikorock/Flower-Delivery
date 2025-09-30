import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Layout.jsx";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage.jsx";
import HomePage from "../pages/HomePage/HomePage.jsx";
import ShoppingCartPage from "../pages/ShoppingCartPage/ShoppingCartPage.jsx";
import ShopsLayout from "../pages/ShopsLayout/ShopsLayout.jsx";
import ShopPage from "../pages/ShopPage/ShopPage.jsx";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="shops" element={<HomePage />}>
            <Route index element={<Navigate to="flowery" replace />} />
            <Route path=":shopId" element={<ShopPage />} />
          </Route>
          <Route path="shopping" element={<ShoppingCartPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}
