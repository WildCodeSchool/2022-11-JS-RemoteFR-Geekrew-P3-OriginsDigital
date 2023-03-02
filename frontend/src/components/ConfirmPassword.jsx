import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "../styles/SignUp.module.scss";

function ConfirmPassword({ setConfirmPassword, confirmPassword, password }) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const handleChangeConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };

  const passwordsMatch = password === confirmPassword;
  const handleTogglePasswordVisibility = () => {
    setPasswordVisible((prevState) => !prevState);
  };
  return (
    <div>
      <label htmlFor="password"> </label>
      <input
        className={styles["sign-up-input"]}
        id="confirmPassword"
        type={passwordVisible ? "text" : "password"}
        placeholder="Confirm password"
        value={confirmPassword}
        onChange={handleChangeConfirmPassword}
        autoComplete="new-password"
        required
      />
      <button
        type="button"
        className={styles["show-password-button"]}
        onClick={handleTogglePasswordVisibility}
      >
        {passwordVisible ? "🚫" : "👁️"}
      </button>
      {!passwordsMatch && (
        <span className={styles["error-message"]}>Passwords do not match</span>
      )}
    </div>
  );
}

ConfirmPassword.propTypes = {
  setConfirmPassword: PropTypes.func.isRequired,
  confirmPassword: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
};

export default ConfirmPassword;
