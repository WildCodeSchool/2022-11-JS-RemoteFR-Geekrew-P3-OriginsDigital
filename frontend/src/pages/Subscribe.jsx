import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Subscribe.module.scss";

function Subscribe() {
  const [selectStandardPlan, setSelectStandardPlan] = useState(false);
  const [selectProPlan, setSelectProPlan] = useState(false);
  const navigate = useNavigate();

  const handleSelectStandardPlan = () => {
    setSelectStandardPlan(true);
    setSelectProPlan(false);
  };

  const handleSelectProPlan = () => {
    setSelectProPlan(true);
    setSelectStandardPlan(false);
  };

  const handleSubscribe = () => {
    navigate("/subscribes/terms");
  };

  return (
    <div className={styles.contSub}>
      <h1 className={styles.titleSub}>Subscribe</h1>
      <div className={styles.secondTitle}>
        <h2 className={styles.titleh2}>
          Upgrade plan for <strong>higher experience</strong>
        </h2>
      </div>
      <div className={styles.subCard}>
        <div
          className={`${styles.standCard} ${
            selectStandardPlan ? styles.standCardSub : ""
          }`}
          onKeyDown={handleSelectStandardPlan}
          tabIndex={0}
          role="button"
          onClick={handleSelectStandardPlan}
        >
          <p className={styles.textp}>
            Standard Plan <br /> <br />
            <strong>0$</strong>/month
          </p>
        </div>
        <div
          className={`${styles.proCard} ${
            selectProPlan ? styles.proCardSub : ""
          }`}
          onKeyDown={handleSelectStandardPlan}
          tabIndex={0}
          role="button"
          onClick={handleSelectProPlan}
        >
          <p className={styles.textPro}>
            Recommended <br /> <br />
            Pro Plan <br />
            <strong>10$</strong>/month <br /> <br />
          </p>
          <p className={styles.textPop}>get access to all content!</p>
        </div>
        <button
          className={styles.btnSub}
          type="button"
          onClick={handleSubscribe}
        >
          Subscribe Now
        </button>
      </div>
    </div>
  );
}

export default Subscribe;
