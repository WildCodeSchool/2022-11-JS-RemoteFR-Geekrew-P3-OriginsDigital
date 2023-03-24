import React, { useState } from "react";
import { useSignInContext } from "../contexts/SignInContext";
import styles from "../styles/PasswordForgot.module.scss";

import Email from "../components/Email";

export default function PasswordForgot() {
  const { email, setEmail } = useSignInContext();
  const [send, setSend] = useState(false);
  const onPressSend = () => {
    setSend(true);
  };
  return (
    <div className={styles["forgot-container"]}>
      <div className={styles["forgot-card"]}>
        <div className={styles["forgot-title"]}>Forgot your password?</div>
        <div className={styles["forgot-email"]}>
          <Email email={email} setEmail={setEmail} />
        </div>
        <button
          type="button"
          className={styles["forgot-btn"]}
          onClick={onPressSend}
        >
          Send email
        </button>
      </div>
      {send && (
        <p className={styles.sended}>
          An email has been sent you. Check your mailbox.
        </p>
      )}
    </div>
  );
}
