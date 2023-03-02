import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "../styles/SignUp.module.scss";

function validatePassword(password) {
  const passw =
    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@&^$`ù=:;+/.?,£%*¨_°#•ë≠÷…@Ù€ô—}æÂê®†Úºîœπµ¬ÈÏ~Ìﬁß∞~ß◊©≈‹‡Ò∂ƒﬁ†®êÂæÙ])[a-zA-Z\d@&^$`ù=:;+/.?,£%*¨_°#•ë≠÷…@Ù€ô—}æÂê®†Úºîœπµ¬ÈÏ~Ìﬁß∞~ß◊©≈‹‡Ò∂ƒﬁ†®êÂæÙ]{8,20}$/;
  return passw.test(password);
}

function Password({ password, setPassword }) {
  const [wrongPassword, setWrongPassword] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleChangePassword = (event) => {
    event.preventDefault();
    setPassword(event.target.value);
    if (!validatePassword(password)) {
      setWrongPassword(true);
    } else {
      setWrongPassword(false);
    }
  };
  const handleTogglePasswordVisibility = () => {
    setPasswordVisible((prevState) => !prevState);
  };

  return (
    <div>
      <label htmlFor="password"> </label>
      <input
        className={styles["sign-up-input"]}
        id="password"
        name="password"
        type={passwordVisible ? "text" : "password"}
        placeholder="Password"
        value={password}
        onChange={handleChangePassword}
        autoComplete="new-password"
      />
      <button
        type="button"
        className={styles["show-password-button"]}
        onClick={handleTogglePasswordVisibility}
      >
        {passwordVisible ? "🚫" : "👁️"}
      </button>
      {wrongPassword && (
        <span style={{ color: "red" }}>Wrong password format </span>
      )}
    </div>
  );
}
Password.propTypes = {
  password: PropTypes.string.isRequired,
  setPassword: PropTypes.func.isRequired,
};

export default Password;
