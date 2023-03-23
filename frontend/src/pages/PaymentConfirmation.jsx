import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/PaymentConfirmation.module.scss";

function PaymentConfirmation() {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/");
    }, 3000);
    return () => {
      clearTimeout(timeout);
    };
  }, [navigate]);

  return (
    <div className={styles.contPayConf}>
      <h1 className={styles.titlePayConf}>Confirmation de paiement</h1>
      <p className={styles.textPayConf}>Merci pour votre paiement!</p>
      <p className={styles.textPayConfRedi}>
        Vous serez redirigé vers la page d'accueil dans quelques secondes.
      </p>
    </div>
  );
}

export default PaymentConfirmation;
