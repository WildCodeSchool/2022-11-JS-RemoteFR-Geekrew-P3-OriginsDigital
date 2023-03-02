import React, { useEffect, useState } from "react";
import axios from "axios";
import { TrashBinOutline } from "react-ionicons";

import styles from "../styles/Favorites.module.scss";

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/video`)
      .then((res) => res.data)
      .then((data) => {
        // console.log(data);
        setFavorites(data);
      });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.title}>Favorites videos</div>
      <div className={styles.favorites}>
        {favorites.map((favorite) => (
          <>
            <img
              key={favorite.id}
              src={favorite.thumbnail}
              alt={favorite.description}
            />
            <div className={styles["title-container"]}>
              <p>
                {favorite.title}
                <div className={styles.trashbin}>
                  <TrashBinOutline
                    color="#00000"
                    // title={}
                    height="25px"
                    width="25px"
                  />
                </div>
              </p>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
