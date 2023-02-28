import React, { useState } from "react";
import { ThumbsUpOutline, ThumbsDownOutline } from "react-ionicons";
import javascriptNul from "../assets/thumbnails/javascript-nul.png";
import styles from "../styles/Video.module.scss";

function Video() {
  const [likeCount, setLikeCount] = useState(10);
  const [dislikeCount, setDislikeCount] = useState(2);

  return (
    <div className={styles.contvid}>
      <div className={styles.videobox}>
        <img src={javascriptNul} alt="" className={styles.video} />
      </div>
      <h3 className={styles.cattitle}>Catégorie</h3>
      <h2 className={styles.videotitle}>Titre</h2>
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
      <p className={styles.descvid}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex quam
        laborum repellendus enim itaque culpa, iure, quo cum accusantium
        deserunt obcaecati esse voluptatum dolorum asperiores modi dolor est
        commodi nam!
      </p>
    </div>
  );
}

export default Video;
