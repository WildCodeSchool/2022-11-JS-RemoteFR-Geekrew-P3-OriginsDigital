import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import axios from "axios";
import {
  ThumbsUpOutline,
  ThumbsDownOutline,
  BookmarkOutline,
} from "react-ionicons";
import styles from "../styles/Video.module.scss";

function Video() {
  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);
  const { id } = useParams();
  const [video, setVideo] = useState({});

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

  return (
    <div className={styles.contvid}>
      <div className={styles.videobox}>
        <ReactPlayer
          controls
          className={styles.video}
          light={
            <img
              className={styles.videoThumbnail}
              src={video.thumbnail}
              alt="Thumbnail"
            />
          }
          url={video.url}
          widht="100%"
          height="100%"
        />
      </div>
      <h3 className={styles.cattitle}>{video.category_name}</h3>
      <h2 className={styles.videotitle}>{video.title}</h2>
      <div className={styles.boxlike}>
        <div className={styles.likes}>
          <ThumbsUpOutline
            color="#ffffff"
            height="30px"
            width="40px"
            onClick={() => setLikeCount(likeCount + 1)}
          />
          <span className={styles.likeCount}>{likeCount}</span>
          <ThumbsDownOutline
            color="#ffffff"
            height="30px"
            width="40px"
            onClick={() => setDislikeCount(dislikeCount + 1)}
          />
          <span className={styles.likeCount}>{dislikeCount}</span>
        </div>
        <div className={styles.favories}>
          <BookmarkOutline color="#ffffff" height="35px" width="35px" />
        </div>
      </div>
      <p className={styles.descvid}>{video.description}</p>
    </div>
  );
}

export default Video;
