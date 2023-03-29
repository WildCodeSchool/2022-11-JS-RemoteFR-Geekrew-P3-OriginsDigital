import React from "react";
import PropTypes from "prop-types";
import styles from "../styles/AddVideo.module.scss";

function AddVideoUrl({ url, setUrl }) {
  const handleUrl = (event) => {
    const inputValue = event.target.value;
    event.preventDefault();
    setUrl(inputValue);
  };

  return (
    <div className={styles["add-video-input-group"]}>
      <input
        className={styles["add-video-input"]}
        name="url"
        type="text"
        placeholder="Url"
        value={url}
        onChange={handleUrl}
      />
    </div>
  );
}

AddVideoUrl.propTypes = {
  url: PropTypes.string.isRequired,
  setUrl: PropTypes.func.isRequired,
};

export default AddVideoUrl;
