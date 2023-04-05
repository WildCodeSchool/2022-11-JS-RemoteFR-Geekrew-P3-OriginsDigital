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
        Short loin in pig, capicola cow pork belly ham hock pastrami picanha.
        Jerky rump do, shankle flank tongue ut spare ribs in cupidatat filet
        mignon occaecat est laborum. Boudin excepteur sunt, bacon pork belly
        exercitation tri-tip capicola fatback duis irure in pig. Laboris sed
        venison ham hock salami porchetta. Ullamco quis buffalo pastrami
        meatloaf strip steak porchetta hamburger. Pork chop exercitation rump,
        swine lorem prosciutto tenderloin est pancetta kevin magna adipisicing
        chicken corned beef spare ribs.
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
