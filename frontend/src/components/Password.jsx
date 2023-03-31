import React, { useState } from "react";
import PropTypes from "prop-types";
import { Eye, EyeOff } from "react-ionicons";
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
      <div className={styles["form-group"]}>
        <label htmlFor="password"> </label>
        <div className={styles["password-container"]}>
          <input
            className={styles["sign-up-input"]}
            id="password"
            name="password"
            type={passwordVisible ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={handleChangePassword}
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
            autoComplete="new-password"
          />
          <button type="button" className={styles["password-button"]}>
            {passwordVisible ? (
              <div className={styles["visibility-container"]}>
                <Eye
                  onClick={handleTogglePasswordVisibility}
                  className={styles["visibility-icon"]}
                  color="#ffffff"
                  height="18px"
                  width="18px"
                />
              </div>
            ) : (
              <div className={styles["visibility-container"]}>
                <EyeOff
                  onClick={handleTogglePasswordVisibility}
                  className={styles["visibility-icon"]}
                  color="#ffffff"
                  height="18px"
                  width="18px"
                />
              </div>
            )}
          </button>
        </div>
      </div>
      {wrongPassword && (
        <span className={styles["sign-span"]}>Wrong password format </span>
      )}
    </div>
  );
}
Password.propTypes = {
  password: PropTypes.string.isRequired,
  setPassword: PropTypes.func.isRequired,
};

export default Password;
