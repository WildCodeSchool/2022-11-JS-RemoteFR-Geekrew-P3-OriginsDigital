import React from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/logo.svg";

import styles from "../styles/DeskNavbar.module.scss";

export default function DeskNavbar() {
  return (
    <nav className={styles.contnav}>
      <Link to="/" className={styles.logonav}>
        <img className={styles.logohead} src={logo} alt="logo" />
        Origins Digital
      </Link>
      <div className={styles.navlink}>
        <ul>
          <li className={styles.link}>
            <NavLink to="/">Catégorie</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
