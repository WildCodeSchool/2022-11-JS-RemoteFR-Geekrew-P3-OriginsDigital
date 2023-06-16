import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/PaymentConfirmation.module.scss";

function PaymentConfirmation() {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/");
    }, 10000);
    return () => {
      clearTimeout(timeout);
    };
  }, [navigate]);

  return (
    <div className={styles.contPayConf}>
      <h1 className={styles.titlePayConf}>Payment confirmation</h1>
      <p className={styles.textPayConf}>Thank you for your purchase!</p>
      <p className={styles.textPayConfRedi}>
        You will be redirected to the home page in a few seconds.
      </p>
    </div>
  );
}

export default PaymentConfirmation;
