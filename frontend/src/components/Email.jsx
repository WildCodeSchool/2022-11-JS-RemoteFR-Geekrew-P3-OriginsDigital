import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "../styles/SignUp.module.scss";

function validateEmail(email) {
  const mail = /^([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+)\.([a-zA-Z]{2,})$/;
  return mail.test(email);
}

function Email({ email, setEmail }) {
  const [isValidEmail, setIsValidEmail] = useState(true);
  const handleChangeEmail = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
    if (!validateEmail(email)) {
      setIsValidEmail(false);
    } else {
      setIsValidEmail(true);
    }
  };

  return (
    <div className={styles["email-container"]}>
      <label htmlFor="email"> </label>
      <input
        className={styles["sign-up-input"]}
        id="email"
        name="email"
        type="text"
        placeholder="Email"
        value={email || ""}
        onChange={handleChangeEmail}
        autoComplete="username"
        onTouchStart={(e) => {
          e.preventDefault();
        }}
        onTouchMove={(e) => {
          e.preventDefault();
        }}
        onWheel={(e) => {
          e.preventDefault();
        }}
        onScroll={(e) => {
          e.preventDefault();
        }}
      />
      {!isValidEmail && (
        <span className={styles["sign-span"]}>Please enter a valid email</span>
      )}
    </div>
  );
}
Email.defaultProps = {
  email: "",
};
Email.propTypes = {
  email: PropTypes.string,
  setEmail: PropTypes.func.isRequired,
};

export default Email;
