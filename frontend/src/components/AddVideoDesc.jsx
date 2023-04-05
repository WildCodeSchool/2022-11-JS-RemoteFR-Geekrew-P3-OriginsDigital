import React from "react";
import PropTypes from "prop-types";
import styles from "../styles/AddVideo.module.scss";

function AddVideoDesc({ desc, setDesc }) {
  const handleDesc = (event) => {
    const inputValue = event.target.value;
    event.preventDefault();
    setDesc(inputValue);
  };
  return (
    <div className={styles["add-video-input-group"]}>
      <input
        className={styles["add-video-input-desc"]}
        name="description"
        type="text"
        placeholder="Description"
        value={desc || ""}
        onChange={handleDesc}
      />
    </div>
  );
}

AddVideoDesc.propTypes = {
  desc: PropTypes.string,
  setDesc: PropTypes.func.isRequired,
};
AddVideoDesc.defaultProps = {
  desc: "",
};

export default AddVideoDesc;
