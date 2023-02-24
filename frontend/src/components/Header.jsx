import React from "react";
import styles from "../styles/Header.module.scss";
import logo from "../assets/logo.svg";

export default function Header() {
  return (
    <div className={styles.contheader}>
      <div className={styles.boxheader}>
        <div className={styles.divlogo}>
          <img className={styles.logohead} src={logo} alt="logo" />
        </div>
        <div className="divlogo">
          <button className={styles.btnhead} type="button">
            CONNEXION
          </button>
        </div>
      </div>
    </div>
  );
}
