import React from "react";
import PropTypes from "prop-types";
import styles from "../styles/AddVideo.module.scss";

function AddVideoDuration({ duration, setDuration }) {
  const handleDuration = (event) => {
    const inputValue = event.target.value;
    event.preventDefault();
    setDuration(inputValue);
  };

  return (
    <div className={styles["add-video-input-group"]}>
      <input
        className={styles["add-video-input"]}
        name="duration"
        type="time"
        placeholder="Duration"
        value={duration}
        onChange={handleDuration}
      />
    </div>
  );
}

AddVideoDuration.propTypes = {
  duration: PropTypes.string.isRequired,
  setDuration: PropTypes.func.isRequired,
};

export default AddVideoDuration;
