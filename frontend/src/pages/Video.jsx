import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ReactPlayer from "react-player";
import axios from "axios";
import {
  ThumbsUpOutline,
  ThumbsDownOutline,
  BookmarkOutline,
  Bookmark,
} from "react-ionicons";
import styles from "../styles/Video.module.scss";

function Video() {
  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);
  const { id } = useParams();
  const [video, setVideo] = useState({});
  const [isFavorite, setIsFavorite] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/videos/${id}`)
      .then((res) => res.data)
      .then((data) => {
        setVideo(data);
        setLikeCount(data.likes);
        setDislikeCount(data.dislikes);
      });
  }, [id]);

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
          // aspectRatio="16:9"
        />
      </div>
      <div className={styles["container-content"]}>
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
            {isFavorite ? (
              <Bookmark
                color="#ffffff"
                height="35px"
                width="35px"
                className={styles.favorite}
                onClick={() => setIsFavorite(false)}
              />
            ) : (
              <BookmarkOutline
                color="#ffffff"
                height="35px"
                width="35px"
                className={styles.favorite}
                onClick={() => setIsFavorite(true)}
              />
            )}
          </div>
        </div>
        <p className={styles.descvid}>{video.description}</p>
      </div>
    </div>
  );
}

export default Video;
