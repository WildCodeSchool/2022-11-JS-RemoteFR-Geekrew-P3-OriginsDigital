import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ReactPlayer from "react-player";
import {
  ThumbsUpOutline,
  ThumbsUpSharp,
  ThumbsDownOutline,
  ThumbsDownSharp,
  BookmarkOutline,
  Bookmark,
} from "react-ionicons";
import instanceAxios from "../services/instanceAxios";
import styles from "../styles/Video.module.scss";

function Video() {
  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);
  const { id } = useParams();
  const [video, setVideo] = useState({});
  const [isFavorite, setIsFavorite] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    instanceAxios
      .get(`/videos/${id}`)
      .then((res) => res.data)
      .then((data) => {
        setVideo(data);
        setLikeCount(data.likes);
        setDislikeCount(data.dislikes);
      });
    instanceAxios
      .get(`/videos/${id}/like`)
      .then((res) => res.data)
      .then((data) => {
        setIsLiked(data.liked);
        setIsDisliked(data.disliked);
      })
      .catch((res) => {
        res.sendStatus(500);
      });
  }, [id]);

  const onPressCategory = (e) => {
    const category = e.target.textContent;
    const path = `/search?category-name=${category}`;
    navigate(path);
  };

  const handleLike = () => {
    if (!isLiked) {
      setLikeCount(likeCount + 1);
      setIsLiked(true);
      setIsDisliked(false);
      if (isDisliked) {
        setDislikeCount(dislikeCount - 1);
      }
      // instanceAxios.put(`/videos/${id}/like`, {
      //   likes: likeCount + 1,
      //   dislikes: isDisliked ? dislikeCount - 1 : dislikeCount,
      //   isLiked: true,
      //   isDisliked: false,
      // });
      instanceAxios.put(`/videos/${id}/like`, {
        likes: likeCount + 1,
        dislikes: isDisliked ? dislikeCount - 1 : dislikeCount,
        isLiked: true,
        isDisliked: false,
      });
    } else {
      setLikeCount(likeCount - 1);
      setIsLiked(false);
      instanceAxios.put(`/videos/${id}/like`, {
        likes: likeCount - 1,
        dislikes: isDisliked ? dislikeCount : dislikeCount,
        isLiked: false,
        isDisliked,
      });
    }
  };

  const handleDislike = () => {
    if (!isDisliked) {
      setDislikeCount(dislikeCount + 1);
      setIsDisliked(true);
      setIsLiked(false);
      if (isLiked) {
        setLikeCount(likeCount - 1);
      }
      // instanceAxios.put(`/videos/${id}/like`, {
      //   likes: isLiked ? likeCount - 1 : likeCount,
      //   dislikes: dislikeCount + 1,
      //   isLiked: false,
      //   isDisliked: true,
      // });
      instanceAxios.put(`/videos/${id}/like`, {
        likes: isLiked ? likeCount - 1 : likeCount,
        dislikes: dislikeCount + 1,
        isLiked: false,
        isDisliked: true,
      });
    } else {
      setDislikeCount(dislikeCount - 1);
      setIsDisliked(false);
      instanceAxios.put(`/videos/${id}/like`, {
        likes: isLiked ? likeCount : likeCount,
        dislikes: dislikeCount - 1,
        isLiked,
        isDisliked: false,
      });
    }
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
          {isLiked ? (
            <ThumbsUpSharp
              color="#ffffff"
              height="30px"
              width="40px"
              onClick={handleLike}
              className={styles.like}
            />
          ) : (
            <ThumbsUpOutline
              color="#ffffff"
              height="30px"
              width="40px"
              onClick={handleLike}
              className={styles.like}
            />
          )}
          <span className={styles.likeCount}>{likeCount}</span>
          {isDisliked ? (
            <ThumbsDownSharp
              color="#ffffff"
              height="30px"
              width="40px"
              onClick={handleDislike}
              className={styles.dislike}
            />
          ) : (
            <ThumbsDownOutline
              color="#ffffff"
              height="30px"
              width="40px"
              onClick={handleDislike}
              className={styles.dislike}
            />
          )}
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
  );
}

export default Video;
