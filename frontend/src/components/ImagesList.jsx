import { useState } from "react";
import PropTypes from "prop-types";

import styles from "../styles/ImagesList.module.scss";

export default function ImagesList({ avatars, url, onImageClick }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const handleClick = (index) => {
    setSelectedImageIndex(index);
    if (onImageClick) {
      onImageClick(index + 1);
    }
  };

  const imagesList = avatars.map((file, index) => (
    <button
      key={file}
      type="button"
      onClick={() => handleClick(index)}
      className={styles["image-btn"]}
    >
      <img
        src={url + file}
        alt={file}
        className={`${styles.avatars} ${
          selectedImageIndex === index ? styles.border : ""
        }`}
      />
    </button>
  ));

  return <div className={styles.container}>{imagesList}</div>;
}

ImagesList.propTypes = {
  avatars: PropTypes.arrayOf(PropTypes.string).isRequired,
  url: PropTypes.string.isRequired,
  onImageClick: PropTypes.func.isRequired,
};
