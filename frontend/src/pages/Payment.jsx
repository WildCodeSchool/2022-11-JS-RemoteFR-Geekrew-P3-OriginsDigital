import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Payments.module.scss";

function Payment() {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const navigate = useNavigate();

  const handleCardNumberChange = (e) => {
    setCardNumber(e.target.value);
  };

  const handleExpiryDateChange = (e) => {
    setExpiryDate(e.target.value);
  };

  const handleCvvChange = (e) => {
    setCvv(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/payments/confirmation");
  };

  return (
    <div className={styles.contPay}>
      <div className={styles.boxPay}>
        <form onSubmit={handleSubmit}>
          <div className={styles.divCardNbrPay}>
            <label className={styles.labelNbr} htmlFor="cardNumber">
              Card Number:
            </label>
            <input
              className={styles.inputCardNbrPay}
              type="text"
              name="cardNumber"
              value={cardNumber}
              onChange={handleCardNumberChange}
            />
          </div>
          <div className={styles.divExpPay}>
            <label className={styles.labelExpDate} htmlFor="expiryDate">
              Expiry Date:
            </label>
            <input
              className={styles.inputExpDate}
              type="text"
              name="expiryDate"
              value={expiryDate}
              onChange={handleExpiryDateChange}
            />
          </div>
          <div className={styles.divCvvPay}>
            <label className={styles.labelCvv} htmlFor="cvv">
              CVV:
            </label>
            <input
              className={styles.inputCvv}
              type="text"
              name="cvv"
              value={cvv}
              onChange={handleCvvChange}
            />
          </div>
          <div className={styles.divBtnPay}>
            <button className={styles.btnPayment} type="submit">
              Pay
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Payment;
