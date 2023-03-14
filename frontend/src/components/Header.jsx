import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ChevronBackOutline } from "react-ionicons";
import styles from "../styles/Header.module.scss";
import logo from "../assets/logo.svg";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleHome = () => {
    navigate("/");
  };
  const handleSignin = () => {
    navigate("/sign-in");
  };

  const handleBack = () => {
    navigate(-1);
  };

  const isVideoPage = location.pathname.includes("/videos/");

  return (
    <div className={styles.contheader}>
      <div className={styles.boxheader}>
        {location.pathname !== "/" && (
          <div className={styles.backBtnBox}>
            <ChevronBackOutline
              className={styles.backChevron}
              color="#8f711e"
              height="35px"
              width="35px"
              onClick={handleBack}
            />
          </div>
        )}
        {!isVideoPage && (
          <div
            className={styles.divlogo}
            onClick={handleHome}
            onKeyDown={handleHome}
            role="button"
            tabIndex={0}
          >
            <img className={styles.logohead} src={logo} alt="logo" />
          </div>
        )}
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
