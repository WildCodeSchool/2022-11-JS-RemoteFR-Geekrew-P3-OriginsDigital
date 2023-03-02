import React from "react";
import { NavLink } from "react-router-dom";

import styles from "../styles/Profile.module.scss";

export default function Profile() {
  return (
    <div className={styles["user-profile"]}>
      <div className={styles.avatar}>
        <img src="/path/to/avatar" alt="avatar" />
      </div>
      <div className={styles.tabs}>
        <div className={styles.btnlink}>
          <NavLink to="/account" className={styles["btnlink-name"]}>
            Account
          </NavLink>
        </div>
        <div className={styles.btnlink}>
          <NavLink to="/subscribe" className={styles["btnlink-name"]}>
            Subscribe
          </NavLink>
        </div>
        <div className={styles.btnlink}>
          <NavLink to="/help" className={styles["btnlink-name"]}>
            Help
          </NavLink>
        </div>
        <div className={styles.btnlink}>
          <NavLink to="/legal" className={styles["btnlink-name"]}>
            Legal space
          </NavLink>
        </div>
        <div className={styles.btnlink}>
          <NavLink to="/" className={styles["btnlink-name"]}>
            Logout
          </NavLink>
        </div>
      </div>
    </div>
  );
}
