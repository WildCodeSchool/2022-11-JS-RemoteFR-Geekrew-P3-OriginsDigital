import React, { useState, useEffect } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useSignInContext } from "../contexts/SignInContext";
import ProfilePicture from "./ProfilePicture";
import logo from "../assets/logo.svg";

import styles from "../styles/DeskNavbar.module.scss";

export default function DeskNavbar() {
  const { isLoggedIn } = useSignInContext();
  const [hasScrolled, setHasScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 0 && !hasScrolled) {
        setHasScrolled(true);
      } else if (scrollTop === 0 && hasScrolled) {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasScrolled]);

  const navbarClasses = [styles.contnav];
  if (hasScrolled) {
    navbarClasses.push(styles.shadow);
  }

  const handleSignin = () => {
    navigate("/sign-in");
  };

  return (
    <nav className={navbarClasses.join(" ")}>
      <Link to="/" className={styles.logonav}>
        <img className={styles.logohead} src={logo} alt="logo" />
      </Link>
      <div className={styles.navlink}>
        <ul>
          <li className={styles.link}>
            <NavLink to="/search">Categories</NavLink>
          </li>
          <li className={styles.link}>
            <NavLink to="/favorites">Favorites</NavLink>
          </li>
          <li className={styles.link}>
            <NavLink to="/help">Questions?</NavLink>
          </li>
        </ul>
        {isLoggedIn && <ProfilePicture className={styles["small-avatar"]} />}
        {!isLoggedIn && (
          <button
            className={styles.btnhead}
            type="button"
            onClick={handleSignin}
          >
            SIGN IN
          </button>
        )}
      </div>
    </nav>
  );
}
