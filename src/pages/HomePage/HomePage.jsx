import { NavLink, Outlet } from "react-router-dom";
import css from "./HomePage.module.css"

export default function HomePage() {
    const setActive = ({ isActive }) =>
    isActive ? `${css.shop_link} ${css.active}` : css.shop_link;
  return (
    <div className={css.container}>
    
      {/* Ліва колонка з магазинами */}
      <div className={css.left_tab}>
        <h3>Shops:</h3>
        <nav className={css.navigation}>
          <NavLink className={setActive} to="flowery">Flowery Fragrant</NavLink>
          <NavLink className={setActive} to="bloomwell">Bloomwell</NavLink>
          <NavLink className={setActive} to="etc1">Etc1</NavLink>
          <NavLink className={setActive} to="etc2">Etc2</NavLink>
          <NavLink className={setActive} to="etc3">Etc3</NavLink>
        </nav>
      </div>

      {/* Права колонка з картками товарів */}
      <main className={css.right_tab}>
        <Outlet />
      </main>
    </div>
  );
}