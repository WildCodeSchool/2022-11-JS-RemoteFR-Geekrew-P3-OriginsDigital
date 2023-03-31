import React from "react";
import PropTypes from "prop-types";
import styles from "../styles/AddVideo.module.scss";

function AddVideoTitle({ title, setTitle }) {
  const handleTitle = (event) => {
    const inputValue = event.target.value;
    event.preventDefault();
    setTitle(inputValue);
  };

  return (
    <div className={styles["add-video-input-group"]}>
      <input
        className={styles["add-video-input"]}
        id="title"
        name="title"
        type="text"
        placeholder="Title"
        value={title || ""}
        onChange={handleTitle}
      />
    </div>
  );
}
AddVideoTitle.propTypes = {
  title: PropTypes.string,
  setTitle: PropTypes.func.isRequired,
};
AddVideoTitle.defaultProps = {
  title: "",
};

export default AddVideoTitle;
