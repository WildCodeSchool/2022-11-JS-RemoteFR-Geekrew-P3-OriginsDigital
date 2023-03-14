import React from "react";
import { NavLink } from "react-router-dom";

import ProfilePicture from "../components/ProfilePicture";
import useModal from "../components/useModal";
import Modal from "../components/ModalDisconnect";

import styles from "../styles/Profile.module.scss";

export default function Profile() {
  const { isShowing, toggle } = useModal();

  return (
    <div className={styles["user-profile"]}>
      <ProfilePicture />
      <h1 className={styles.username}>username</h1>
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
          <div
            to="/"
            className={styles["btnlink-name"]}
            onClick={toggle}
            onKeyDown={toggle}
            role="button"
            tabIndex="0"
          >
            Logout
          </div>
        </div>
      </div>
      <Modal isShowing={isShowing} hide={toggle} />
    </div>
  );
}
