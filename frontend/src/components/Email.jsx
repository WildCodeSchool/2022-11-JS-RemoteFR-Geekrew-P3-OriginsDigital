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
    <div>
      <label htmlFor="email"> </label>
      <input
        className={styles["sign-up-input"]}
        id="email"
        name="email"
        type="text"
        placeholder="Email"
        value={email}
        onChange={handleChangeEmail}
      />
      {!isValidEmail && (
        <span style={{ color: "red" }}>Please enter a valid email</span>
      )}
    </div>
  );
}
Email.propTypes = {
  email: PropTypes.string.isRequired,
  setEmail: PropTypes.func.isRequired,
};

export default Email;
