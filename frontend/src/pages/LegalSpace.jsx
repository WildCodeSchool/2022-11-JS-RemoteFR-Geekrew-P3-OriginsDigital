import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../styles/LegalSpace.module.scss";

export default function LegalSpace() {
  return (
    <div className={styles["legal-space"]}>
      <div className={styles.box}>
        <div className={styles.btnlink}>
          <NavLink to="/gtcu" className={styles["btnlink-gtc"]}>
            General Terms and Condition of Use
          </NavLink>
        </div>
        <div className={styles.btnlink}>
          <NavLink to="/gtcs" className={styles["btnlink-gtc"]}>
            General Terms and Condition of Sale
          </NavLink>
        </div>
      </div>
    </div>
  );
}
