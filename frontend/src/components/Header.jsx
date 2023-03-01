import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Header.module.scss";
import logo from "../assets/logo.svg";

export default function Header() {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/");
  };
  const handleSignin = () => {
    navigate("/sign-in");
  };

  return (
    <div className={styles.contheader}>
      <div className={styles.boxheader}>
        <div
          className={styles.divlogo}
          onClick={handleHome}
          onKeyDown={handleHome}
          role="button"
          tabIndex={0}
        >
          <img className={styles.logohead} src={logo} alt="logo" />
        </div>
        <div className="divlogo">
          <button
            className={styles.btnhead}
            type="button"
            onClick={handleSignin}
          >
            CONNEXION
          </button>
        </div>
      </div>
    </div>
  );
}
