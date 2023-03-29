import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TrashBinOutline } from "react-ionicons";
import { useSignInContext } from "../contexts/SignInContext";
import instanceAxios from "../services/instanceAxios";

import styles from "../styles/Favorites.module.scss";

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);
  const { userId, setUserId } = useSignInContext();
  const onPressDelete = (id) => {
    instanceAxios
      .delete(`/favorites/${id}`)
      .then(() => setFavorites(favorites.filter((f) => f.id !== id)))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    instanceAxios.get(`/profile`).then((response) => {
      const userData = response.data;
      setUserId(userData.id);
      instanceAxios
        .get(`/favorites`)
        .then((res) => res.data)
        .then((data) => {
          const userFav = data.filter((fav) => fav.user_id === userId);
          setFavorites(userFav);
        });
    });
  }, [favorites]);

  return (
    <div className={styles.container}>
      <div className={styles.title}>Favorites</div>
      <div className={styles.favorites}>
        {favorites.map((favorite) => (
          <div key={favorite.id} className={styles["videos-container"]}>
            <Link to={`/videos/${favorite.video_id}`}>
              <img
                key={favorite.id}
                src={favorite.thumbnail}
                alt={favorite.description}
              />
            </Link>
            <div className={styles["title-container"]}>
              <div className={styles["video-title"]}>{favorite.title}</div>
              <div className={styles.trashbin}>
                <button
                  type="button"
                  onClick={() => onPressDelete(favorite.video_id)}
                >
                  <TrashBinOutline color="#00000" height="25px" width="25px" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
