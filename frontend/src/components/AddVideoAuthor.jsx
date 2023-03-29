import React from "react";
import PropTypes from "prop-types";
import styles from "../styles/AddVideo.module.scss";

function AddVideoAuthor({ author, setAuthor }) {
  const handleAuthor = (event) => {
    const inputValue = event.target.value;
    event.preventDefault();
    setAuthor(inputValue);
  };

  return (
    <div className={styles["add-video-input-group"]}>
      <input
        className={styles["add-video-input"]}
        name="author"
        type="text"
        placeholder="Author"
        value={author}
        onChange={handleAuthor}
      />
    </div>
  );
}

AddVideoAuthor.propTypes = {
  author: PropTypes.string.isRequired,
  setAuthor: PropTypes.func.isRequired,
};

export default AddVideoAuthor;
