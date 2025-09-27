import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="container">

      <header>
        <nav>
          <NavLink to="/">Shop</NavLink>
          <NavLink to="/shopping">Shopping Cart</NavLink>
        </nav>
      </header>
      <main>
        <Outlet/>
      </main>
    </div>
  );
}
