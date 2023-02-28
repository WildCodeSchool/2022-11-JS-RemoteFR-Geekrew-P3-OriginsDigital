import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "../styles/SignUp.module.scss";

function SignUp() {
  const [isChecked, setIsChecked] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleEmailClick = () => {
    setEmail("");
  };
  const handlePasswordClick = () => {
    setPassword("");
  };
  const handleFirstNameClick = () => {
    setPassword("");
  };

  const handleLastNameClick = () => {
    setPassword("");
  };
  const handleUserNameClick = () => {
    setPassword("");
  };
  const handleConfirmPasswordClick = () => {
    setPassword("");
  };

  function handleCheckboxChange(event) {
    setIsChecked(event.target.checked);
  }

  const handleSignUpconfirmation = () => {
    navigate("/sign-up-confirmation");
  };

  return (
    <div className={styles["sign-up-page"]}>
      <h1 className={styles["sign-up-title"]}>SIGN UP</h1>
      <form className={styles["sign-up-forms"]} onSubmit={handleSubmit}>
        <label htmlFor="firstName"> </label>
        <input
          className={styles["sign-up-input"]}
          id="firstName"
          name="firstName"
          type="text"
          placeholder="FirstName"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
          onClick={handleFirstNameClick}
        />
        <label htmlFor="lastName"> </label>
        <input
          className={styles["sign-up-input"]}
          id="lastName"
          name="lastName"
          type="text"
          placeholder="LastName"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
          onClick={handleLastNameClick}
        />
        <label htmlFor="userName"> </label>
        <input
          className={styles["sign-up-input"]}
          id="userName"
          name="userName"
          type="text"
          placeholder="userName"
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
          onClick={handleUserNameClick}
        />
        <label htmlFor="email"> </label>
        <input
          className={styles["sign-up-input"]}
          id="email"
          name="email"
          type="text"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          onClick={handleEmailClick}
        />
        <label htmlFor="password"> </label>
        <input
          className={styles["sign-up-input"]}
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          onClick={handlePasswordClick}
        />
        <label htmlFor="confirmPassword"> </label>
        <input
          className={styles["sign-up-input"]}
          id="confirmPassword"
          name="confirmPassword"
          type="confirmPassword"
          placeholder="confirmPassword"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
          onClick={handleConfirmPasswordClick}
        />
      </form>
      <div className={styles["check-btn"]}>
        <div className={styles["sign-up-checkbox"]}>
          <label htmlFor="option1">
            <input
              type="checkbox"
              id="option1"
              name="option1"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <p className={styles["sign-up-p"]}>
              I certify that I have read and accept the General Terms and
              Conditions of Use and the Data Management Policy.
            </p>
          </label>
        </div>
      </div>
      <button
        className={styles["sign-up-btn"]}
        type="button"
        onClick={handleSignUpconfirmation}
      >
        SIGN UP
      </button>
    </div>
  );
}

export default SignUp;
