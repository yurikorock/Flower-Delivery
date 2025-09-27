import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Layout.jsx";

export default function App() {
  return (
    <div>
      <h1>Best selling</h1>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
      </Routes>
    </div>
  );
}
