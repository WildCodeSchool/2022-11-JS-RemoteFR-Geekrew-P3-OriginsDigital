import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "../styles/SignUp.module.scss";

function validateFirstname(firstname) {
  const regex = /^[a-zA-Z]{3,30}$/;
  return regex.test(firstname);
}
function FirstName({ setFirstName, firstName }) {
  const [isValidFirstName, setIsValidFirstName] = useState(true);

  const handleChangeFirstName = (event) => {
    const inputValue = event.target.value;
    setFirstName(inputValue);
    if (!validateFirstname(inputValue)) {
      setIsValidFirstName(false);
    } else {
      setIsValidFirstName(true);
    }
  };
  return (
    <div className={styles["form-group"]}>
      <label htmlFor="firstName"> </label>
      <input
        className={styles["sign-up-input"]}
        id="firstName"
        name="firstName"
        type="text"
        placeholder="Firstname"
        value={firstName}
        onChange={handleChangeFirstName}
      />
      {!isValidFirstName && (
        <span className={styles["sign-span"]}>
          Your firstname lenght must be at least 3 caracter
        </span>
      )}
    </div>
  );
}
FirstName.propTypes = {
  firstName: PropTypes.string.isRequired,
  setFirstName: PropTypes.func.isRequired,
};

export default FirstName;
