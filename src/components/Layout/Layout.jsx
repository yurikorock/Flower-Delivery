import { NavLink } from "react-router-dom";

export default function Layout() {
  return (
    <div className="container">
      Layout
      <header>
        <nav>
          <NavLink to="/">Shop</NavLink>
          <NavLink to="/shopping">Shopping Cart</NavLink>
        </nav>
      </header>
    </div>
  );
}
