import { NavLink, Outlet } from "react-router-dom";
import css from "./Layout.module.css"

export default function Layout() {
    const setActive = ({isActive})=> isActive ? `${css.link} ${css.activeLink}` : css.link;
  return (
    <div className={css.container}>
      <header>
        <nav className={css.navigation}>
          <NavLink className={setActive} to="/shops" >Shop</NavLink>
          <NavLink className={setActive} to="/shopping">Shopping Cart</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
