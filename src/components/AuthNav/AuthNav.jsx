import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";

function AuthNav() {
  return (
    <nav>
      <ul className={css.navList}>
        <li>
          <NavLink to="/register">Register</NavLink>
        </li>
        <li>
          <NavLink to="/login">Log in</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default AuthNav;
