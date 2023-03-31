import React from "react";
import PropTypes from "prop-types";
import styles from "../styles/AddVideo.module.scss";

function AddVideoCategory({ category, setCategory }) {
  const handleCategory = (event) => {
    const inputValue = event.target.value;
    event.preventDefault();
    setCategory(inputValue);
  };

  return (
    <div className={styles["add-video-input-group"]}>
      <input
        className={styles["add-video-input"]}
        name="category"
        type="number"
        placeholder="category id"
        value={category || ""}
        onChange={handleCategory}
      />
    </div>
  );
}

AddVideoCategory.propTypes = {
  category: PropTypes.string,
  setCategory: PropTypes.func.isRequired,
};
AddVideoCategory.defaultProps = {
  category: "",
};

export default AddVideoCategory;
