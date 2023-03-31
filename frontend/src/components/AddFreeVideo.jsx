import React from "react";
import PropTypes from "prop-types";
import styles from "../styles/AddVideo.module.scss";

function AddVideoFree({ free, setFree }) {
  const handleChangeFree = (event) => {
    const inputValue = event.target.value;
    event.preventDefault();
    setFree(inputValue);
  };

  return (
    <div className={styles["add-video-input-group"]}>
      <input
        className={styles["add-video-input"]}
        id="free"
        name="free"
        type="number"
        placeholder="Free 0 or not 1 "
        value={free || ""}
        onChange={handleChangeFree}
      />
    </div>
  );
}

AddVideoFree.propTypes = {
  free: PropTypes.string,
  setFree: PropTypes.func.isRequired,
};
AddVideoFree.defaultProps = {
  free: "",
};

export default AddVideoFree;
