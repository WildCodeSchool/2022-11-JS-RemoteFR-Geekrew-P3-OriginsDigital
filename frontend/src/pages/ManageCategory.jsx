import React from "react";
import { BuildOutline } from "react-ionicons";
import styles from "../styles/ComingSoon.module.scss";

function ManageCategory() {
  return (
    <div className={styles["coming-soon-pages"]}>
      <h1 className={styles["coming-soon-title"]}>Pages coming soon</h1>
      <BuildOutline color="#00000" height="50px" width="50px" />
    </div>
  );
}

export default ManageCategory;
