import PropTypes from "prop-types";

import styles from "../styles/ImagesList.module.scss";

export default function ImagesList({ avatars, url }) {
  const imagesList = avatars.map((file) => (
    <img key={file} src={url + file} alt={file} className={styles.avatars} />
  ));

  return <div className={styles.container}>{imagesList}</div>;
}

ImagesList.propTypes = {
  avatars: PropTypes.arrayOf(PropTypes.string).isRequired,
  url: PropTypes.string.isRequired,
};
