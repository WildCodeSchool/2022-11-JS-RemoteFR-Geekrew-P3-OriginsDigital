import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "../styles/SignIn.module.scss";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
  const handleHome = () => {
    navigate("/");
  };
  const handleSignUp = () => {
    navigate("/sign-up");
  };

  return (
    <div className={styles["sign-in-page"]}>
      <h1 className={styles["sign-in-title"]}>SIGN IN</h1>
      <form className={styles["sign-in-forms"]} onSubmit={handleSubmit}>
        <label htmlFor="email"> </label>
        <input
          className={styles["sign-in-input"]}
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
          className={styles["sign-in-input"]}
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          onClick={handlePasswordClick}
        />
      </form>
      <div href="/" className={styles["button-sign-in"]}>
        <label htmlFor="my-button"> </label>
        <button
          className={styles["sign-in-btn1"]}
          type="button"
          onClick={handleHome}
        >
          SIGN IN
        </button>
        <label htmlFor="button"> </label>
        <button
          className={styles["sign-in-btn2"]}
          type="button"
          onClick={handleSignUp}
        >
          SIGN UP
        </button>
      </div>
      <p className={styles["sign-in-p"]}>Forgot your password?</p>
    </div>
  );
}

export default SignIn;
