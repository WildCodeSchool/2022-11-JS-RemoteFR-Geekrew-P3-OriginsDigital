import React, { useEffect, useState } from "react";
import axios from "axios";
import { TrashBinOutline } from "react-ionicons";

import styles from "../styles/Favorites.module.scss";

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/favorites`)
      .then((res) => res.data)
      .then((data) => {
        setFavorites(data);
      });
  }, []);

  const onPressDelete = (id) => {
    axios
      .delete(`${import.meta.env.VITE_BACKEND_URL}/favorites/${id}`)
      .then(() => setFavorites(favorites.filter((f) => f.id !== id)))
      .catch((error) => console.error(error));
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>Favorites</div>
      <div className={styles.favorites}>
        {favorites.map((favorite) => (
          <div key={favorite.id} className={styles["videos-container"]}>
            <img
              key={favorite.id}
              src={favorite.thumbnail}
              alt={favorite.description}
            />
            <div className={styles["title-container"]}>
              <div className={styles["video-title"]}>{favorite.title}</div>
              <div className={styles.trashbin}>
                <TrashBinOutline
                  color="#00000"
                  height="25px"
                  width="25px"
                  onClick={() => onPressDelete(favorite.video_id)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
