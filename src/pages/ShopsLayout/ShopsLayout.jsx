import { NavLink, Outlet } from "react-router-dom";

export default function ShopsLayout() {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      {/* Ліва колонка з магазинами */}
      <aside style={{ width: "200px", borderRight: "1px solid #ccc" }}>
        <h3>Shops:</h3>
        <nav style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <NavLink to="flowery">Flowery Fragrant</NavLink>
          <NavLink to="bloomwell">Bloomwell</NavLink>
          <NavLink to="etc1">Etc1</NavLink>
          <NavLink to="etc2">Etc2</NavLink>
          <NavLink to="etc3">Etc3</NavLink>
        </nav>
      </aside>

      {/* Права колонка з картками товарів */}
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
    </div>
  );
}