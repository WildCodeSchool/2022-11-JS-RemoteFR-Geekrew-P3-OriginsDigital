import React from "react";

import styles from "../styles/Search.module.scss";

export default function Search() {
  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Search"
        className={styles["search-bar"]}
      />
      <select name="filters" className={styles.select}>
        <option value="">Categories</option>
        <option value="HTML">HTML</option>
        <option value="React">React</option>
        <option value="Javascript ">Javascript</option>
        <option value="CSS">CSS</option>
        <option value="Node.js">Node.js</option>
        <option value="Next.js">Next.js</option>
        <option value="Typescript">Typescript</option>
        <option value="Express.js">Express.js</option>
        <option value="PHP">PHP</option>
        <option value="Java">Java</option>
        <option value="SQL">SQL</option>
        <option value="NoSQL">NoSQL</option>
      </select>
    </div>
  );
}
