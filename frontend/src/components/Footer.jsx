/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

import styles from "../styles/Footer.module.scss";

import emgLogo from "../assets/EMG_Logo.svg";
import linkLogo from "../assets/logo_linkedin.svg";

function Footer() {
  return (
    <div className={styles.footercontain}>
      <div className={styles.footer}>
        <p className={styles["origins-title"]}>© Origins Digital</p>
        <div className={styles.legallink}>
          <Link to="/legal">Legal Space</Link>
        </div>
        <div className={styles.emglink}>
          <a href="https://www.euromediagroup.com/home/">
            <img src={emgLogo} alt="EMG Logo" className={styles["emg-logo"]} />
          </a>
        </div>
        <div className={styles.linkedinlink}>
          <a href={linkLogo}>
            <img
              src={linkLogo}
              alt="LinkedIn logo"
              className={styles["linkedin-logo"]}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
