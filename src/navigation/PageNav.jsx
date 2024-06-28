import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./PageNav.modules.css";

export default function PageNav() {
  return (
    <nav className={styles}>
      <ul>
        <li>
          <NavLink to="/" className="a">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/favourite" className="a">
            Favourite
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
