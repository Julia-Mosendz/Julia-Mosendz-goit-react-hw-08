import { NavLink } from "react-router";
import css from "./AuthNav.module.css";

function AuthNav() {
  return (
    <nav>
      <ul>
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
