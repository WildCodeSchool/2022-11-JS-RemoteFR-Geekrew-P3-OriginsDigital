import React from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";

import styles from "../styles/DeskNavbar.module.scss";

export default function DeskNavbar() {
  const navigate = useNavigate();

  const handleSignin = () => {
    navigate("/sign-in");
  };

  return (
    <nav className={styles.contnav}>
      <Link to="/" className={styles.logonav}>
        <img className={styles.logohead} src={logo} alt="logo" />
      </Link>
      <div className={styles.navlink}>
        <ul>
          <li className={styles.link}>
            <NavLink to="/search">Categories</NavLink>
          </li>
          <li className={styles.link}>
            <NavLink to="/help">Questions?</NavLink>
          </li>
        </ul>
        <button className={styles.btnlog} type="button" onClick={handleSignin}>
          SIGN IN
        </button>
      </div>
    </nav>
  );
}
