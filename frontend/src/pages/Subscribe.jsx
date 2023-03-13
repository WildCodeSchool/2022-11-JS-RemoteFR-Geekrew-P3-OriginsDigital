import React from "react";
import styles from "../styles/Subscribe.module.scss";

function Subscribe() {
  return (
    <div className={styles.contSub}>
      <h1 className={styles.titleSub}>Subscribe</h1>
      <div className={styles.secondTitle}>
        <h2 className={styles.titleh2}>
          Upgrade plan for <strong>higher experience</strong>
        </h2>
      </div>
      <div className={styles.subCard}>
        <div className={styles.standCard}>
          <p className={styles.textp}>
            Standard Plan <br /> <br />
            <strong>0$</strong>/month
          </p>
        </div>
        <div className={styles.proCard}>
          <p className={styles.textPro}>
            Recommended <br /> <br />
            Pro Plan <br />
            <strong>10$</strong>/month <br /> <br />
          </p>
          <p className={styles.textPop}>get access to all content!</p>
        </div>
        <button className={styles.btnSub} type="button">
          Select Plan
        </button>
      </div>
    </div>
  );
}

export default Subscribe;
