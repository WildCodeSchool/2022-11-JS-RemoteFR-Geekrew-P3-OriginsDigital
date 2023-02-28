import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  HomeOutline,
  HomeSharp,
  SearchOutline,
  SearchSharp,
  BookmarkOutline,
  BookmarkSharp,
} from "react-ionicons";
import styles from "../styles/Navbar.module.scss";

export default function Navbar() {
  const location = useLocation();

  return (
    <div className={styles.cont}>
      <nav className={styles["nav-cont"]}>
        <ul className={styles.navul}>
          <li>
            <NavLink to="/">
              {location.pathname === "/" ? (
                <HomeSharp color="#ffffff" height="35px" width="35px" />
              ) : (
                <HomeOutline color="#ffffff" height="35px" width="35px" />
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to="/search">
              {location.pathname === "/search" ? (
                <SearchSharp color="#ffffff" height="35px" width="35px" />
              ) : (
                <SearchOutline color="#ffffff" height="35px" width="35px" />
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to="/favorites">
              {location.pathname === "/favorites" ? (
                <BookmarkSharp color="#ffffff" height="35px" width="35px" />
              ) : (
                <BookmarkOutline color="#ffffff" height="35px" width="35px" />
              )}
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
