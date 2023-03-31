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
        className={styles["add-video-input-time"]}
        name="duration"
        type="time"
        step="1"
        placeholder="Duration"
        value={duration || ""}
        onChange={handleDuration}
      />
    </div>
  );
}

AddVideoDuration.propTypes = {
  duration: PropTypes.string,
  setDuration: PropTypes.func.isRequired,
};
AddVideoDuration.defaultProps = {
  duration: "",
};

export default AddVideoDuration;
