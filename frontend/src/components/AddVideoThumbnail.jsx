import React from "react";
import PropTypes from "prop-types";
import styles from "../styles/AddVideo.module.scss";

function AddVideoThumbnail({ thumbnail, setThumbnail }) {
  const handleThumbnail = (event) => {
    const inputValue = event.target.value;
    event.preventDefault();
    setThumbnail(inputValue);
  };
  return (
    <div className={styles["add-video-input-group"]}>
      <input
        className={styles["add-video-input"]}
        name="thumbnail"
        type="url"
        placeholder="Thumbnail url"
        value={thumbnail}
        onChange={handleThumbnail}
      />
    </div>
  );
}

AddVideoThumbnail.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  setThumbnail: PropTypes.func.isRequired,
};

export default AddVideoThumbnail;
