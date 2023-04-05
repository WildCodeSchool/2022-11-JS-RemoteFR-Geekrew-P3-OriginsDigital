import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "../styles/SignUp.module.scss";

function validateUsername(username) {
  const regex = /^[a-zA-Z]{3,30}$/;
  return regex.test(username);
}
function UserName({ userName, setUserName }) {
  const [isValidUserName, setIsValidUserName] = useState(true);

  const handleChangeUserName = (event) => {
    const inputValue = event.target.value;
    setUserName(inputValue);
    if (!validateUsername(inputValue)) {
      setIsValidUserName(false);
    } else {
      setIsValidUserName(true);
    }
  };
  return (
    <div className={styles["form-group"]}>
      <label htmlFor="userName"> </label>
      <input
        className={styles["sign-up-input"]}
        id="userName"
        name="userName"
        type="text"
        placeholder="Username"
        value={userName || ""}
        onChange={handleChangeUserName}
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
      {!isValidUserName && (
        <span className={styles["sign-span"]}>
          Your username lenght must be at least 3 caracter
        </span>
      )}
    </div>
  );
}
UserName.propTypes = {
  userName: PropTypes.string,
  setUserName: PropTypes.func.isRequired,
};
UserName.defaultProps = {
  userName: "",
};

export default UserName;
