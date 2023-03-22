import React from "react";
import { NavLink } from "react-router-dom";

import "../styles/Footer.module.scss";

function Footer() {
  return (
    <div className="container">
      <div className="origins">
        <p className="origins-title">© Origins Digital</p>
      </div>
      <div>
        <ul>
          <li>
            <NavLink to="/legal">Legal Space</NavLink>
          </li>
          <li>
            <a href="https://www.euromediagroup.com/home/">
              <img
                src="../assets/EMG_Logo_RGB_White_ROB_Website.svg"
                alt="EMG Logo"
              />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/origins-digital-emg/">
              <img src="../assets/174857.svg" alt="LinkedIn logo" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
