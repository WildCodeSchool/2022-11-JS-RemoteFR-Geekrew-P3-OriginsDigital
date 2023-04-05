import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ReactPlayer from "react-player";
import {
  ThumbsUpOutline,
  ThumbsDownOutline,
  BookmarkOutline,
  Bookmark,
} from "react-ionicons";
import { useSignInContext } from "../contexts/SignInContext";
import { useFavoriteContext } from "../contexts/FavoriteContext";
import instanceAxios from "../services/instanceAxios";

import styles from "../styles/Video.module.scss";

function Video() {
  const { userId, setUserId } = useSignInContext();
  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);
  const { id } = useParams();
  const parsedId = parseInt(id, 10);
  const [video, setVideo] = useState({});
  const { favorites, setFavorites } = useFavoriteContext();
  const navigate = useNavigate();

  const onPressAdd = () => {
    instanceAxios.post(`/favorites`, {
      user_id: userId,
      video_id: video.id,
    });
  };

  const onPressDelete = () => {
    instanceAxios
      .delete(`/favorites/${id}`)
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    instanceAxios.get(`/profile`).then((response) => {
      const userData = response.data;
      setUserId(userData.id);
      instanceAxios
        .get(`${import.meta.env.VITE_BACKEND_URL}/videos/${id}`)
        .then((res) => res.data)
        .then((data) => {
          setVideo(data);
          setLikeCount(data.likes);
          setDislikeCount(data.dislikes);
        });
      instanceAxios
        .get(`/favorites`)
        .then((res) => res.data)
        .then((data) => {
          const userFav = data.filter((fav) => fav.user_id === userId);
          setFavorites(userFav);
        });
    });
  }, [favorites]);

  const onPressCategory = (e) => {
    const category = e.target.textContent;
    const path = `/search?category-name=${category}`;
    navigate(path);
  };

  return (
    <div className={styles.contvid}>
      <div className={styles.videobox}>
        <ReactPlayer
          controls
          className={styles.video}
          url={video.url}
          height="100%"
          width="100%"
        />
      </div>
      <button
        type="button"
        className={styles.catbtn}
        onClick={(e) => onPressCategory(e)}
        onKeyDown={(e) => onPressCategory(e)}
      >
        <h3 className={styles.cattitle}>{video.category_name}</h3>
      </button>
      <h2 className={styles.videotitle}>{video.title}</h2>
      <div className={styles.boxlike}>
        <div className={styles.likes}>
          <ThumbsUpOutline
            color="#ffffff"
            height="30px"
            width="40px"
            onClick={() => setLikeCount(likeCount + 1)}
            className={styles.like}
          />
          <span className={styles.likeCount}>{likeCount}</span>
          <ThumbsDownOutline
            color="#ffffff"
            height="30px"
            width="40px"
            onClick={() => setDislikeCount(dislikeCount + 1)}
            className={styles.dislike}
          />
          <span className={styles.likeCount}>{dislikeCount}</span>
        </div>
        <div className={styles.favories}>
          {favorites.some((elem) => elem.video_id === parsedId) ? (
            <Bookmark
              color="#ffffff"
              height="35px"
              width="35px"
              className={styles.favorite}
              onClick={() => onPressDelete(video.id)}
            />
          ) : (
            <BookmarkOutline
              color="#ffffff"
              height="35px"
              width="35px"
              className={styles.favorite}
              onClick={() => onPressAdd(userId, video)}
            />
          )}
        </div>
      </div>
      <p className={styles.descvid}>{video.description}</p>
    </div>
  );
}

export default Video;
