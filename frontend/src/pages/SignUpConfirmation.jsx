import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "../styles/SignUpConfirmation.module.scss";

function SignUpConfirmation() {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate("/sign-in");
  };
  return (
    <div className={styles["confirmation-page"]}>
      <h1 className={styles["confirmation-title"]}>Congratulations</h1>

      <p className={styles["confirmation-p"]}>
        You have successfully signed up for Origins Digital, the premier online
        streaming video site for coding and programming tutorials.
        <br /> <br /> As a member of Origins Digital, you now have access to an
        extensive library of streaming videos that cover a wide range of topics
        related to coding, programming, and software development.
        <br /> <br /> From beginner-level tutorials on programming languages
        like Python and Java and more, to enhance your coding skills and
        knowledge.
      </p>
      <p className={styles["confirmation-illustration"]}>😄</p>
      <div className={styles["button-sign-up-confirmation"]}>
        <button
          className={styles["confirmation-btn"]}
          type="button"
          onClick={handleSignIn}
        >
          Sign in
        </button>
      </div>
    </div>
  );
}

export default SignUpConfirmation;
