import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ChevronBackOutline } from "react-ionicons";
import styles from "../styles/Header.module.scss";
import logo from "../assets/logo.svg";
import { useSignInContext } from "../contexts/SignInContext";
import ProfilePicture from "./ProfilePicture";

export default function Header() {
  const { isLoggedIn } = useSignInContext();
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

  const isVideoPage = location.pathname.includes("/video");

  return (
    <div className={styles.contheader}>
      <div className={styles.boxheader}>
        {location.pathname !== "/" && (
          <div className={styles.backBtnBox}>
            <ChevronBackOutline
              className={styles.backChevron}
              color="#fc4f0c"
              height="35px"
              width="35px"
              onClick={handleBack}
            />
          </div>
        )}
        {!isVideoPage &&
          location.pathname !== "/account" &&
          location.pathname !== "/subscribes" &&
          location.pathname !== "/subscribesterms" &&
          location.pathname !== "/payments" &&
          location.pathname !== "/payments/confirmation" &&
          location.pathname !== "/sign-in" &&
          location.pathname !== "/sign-up" && (
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
        <div className={styles.divlogo}>
          {isLoggedIn && <ProfilePicture className={styles["small-avatar"]} />}
          {!isLoggedIn && (
            <button
              className={styles.btnhead}
              type="button"
              onClick={handleSignin}
            >
              CONNEXION
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
