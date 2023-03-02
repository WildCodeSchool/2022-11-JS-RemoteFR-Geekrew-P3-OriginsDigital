import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ThumbsUpOutline, ThumbsDownOutline } from "react-ionicons";
import styles from "../styles/Video.module.scss";

function Video() {
  const [likeCount, setLikeCount] = useState(10);
  const [dislikeCount, setDislikeCount] = useState(2);
  const { id } = useParams();
  const [video, setVideo] = useState({});

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/video/${id}`)
      .then((res) => res.data)
      .then((data) => {
        setVideo(data);
      });
  }, [id]);

  return (
    <div className={styles.contvid}>
      <div className={styles.videobox}>
        <img src={video.thumbnail} alt="" className={styles.video} />
      </div>
      <h3 className={styles.cattitle}>{video.category_name}</h3>
      <h2 className={styles.videotitle}>{video.title}</h2>
      <div className={styles.boxlike}>
        <ThumbsUpOutline
          color="#ffffff"
          height="30px"
          width="40px"
          onClick={() => setLikeCount(likeCount + 1)}
        />
        <span>{likeCount}</span>
        <ThumbsDownOutline
          color="#ffffff"
          height="30px"
          width="40px"
          onClick={() => setDislikeCount(dislikeCount + 1)}
        />
        <span>{dislikeCount}</span>
      </div>
      <p className={styles.descvid}>{video.description}</p>
    </div>
  );
}

export default Video;
