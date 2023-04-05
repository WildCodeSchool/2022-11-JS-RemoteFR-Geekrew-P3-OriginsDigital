import React, { useState } from "react";
import { toast } from "react-toastify";
import AddVideoFree from "../components/AddFreeVideo";
import AddVideoAuthor from "../components/AddVideoAuthor";
import AddVideoCategory from "../components/AddVideoCategory";
import AddVideoDesc from "../components/AddVideoDesc";
import AddVideoDuration from "../components/AddVideoDuration";
import AddVideoThumbnail from "../components/AddVideoThumbnail";
import AddVideoTitle from "../components/AddVideoTitle";
import AddVideoUrl from "../components/AddVideoUrl";
import instanceAxios from "../services/instanceAxios";
import styles from "../styles/AddVideo.module.scss";
import { useUploadContext } from "../contexts/UploadContext";

function UploadVideo() {
  const [addVideo, setAddVideo] = useState("");
  const {
    free,
    setFree,
    author,
    setAuthor,
    category,
    setCategory,
    desc,
    setDesc,
    duration,
    setDuration,
    thumbnail,
    setThumbnail,
    title,
    setTitle,
    url,
    setUrl,
  } = useUploadContext();

  const newVideo = {
    free,
    setFree,
    author,
    setAuthor,
    category,
    setCategory,
    desc,
    setDesc,
    duration,
    setDuration,
    thumbnail,
    setThumbnail,
    title,
    setTitle,
    url,
    setUrl,
  };

  const handleUpload = async (event) => {
    event.preventDefault();
    try {
      await instanceAxios.post(`/add-videos`, newVideo, addVideo);
      setAddVideo(newVideo);
      // localStorage.setItem("video", JSON.stringify(newVideo));
      toast.success("✨ Video Added ✨");
      setTitle("");
      setCategory("");
      setUrl("");
      setAuthor("");
      setDuration("");
      setFree("");
      setThumbnail("");
      setDesc("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles["add-video-form-container"]}>
      <div className={styles["add-video-pages"]}>
        <h1 className={styles["add-video-form-h1"]}>Add New Video </h1>
        <form className={styles["add-video-forms"]} onSubmit={handleUpload}>
          <AddVideoTitle title={title} setTitle={setTitle} />
          <AddVideoCategory category={category} setCategory={setCategory} />
          <AddVideoUrl url={url} setUrl={setUrl} />
          <AddVideoAuthor author={author} setAuthor={setAuthor} />
          <AddVideoDuration duration={duration} setDuration={setDuration} />
          <AddVideoFree free={free} setFree={setFree} />
          <AddVideoThumbnail
            thumbnail={thumbnail}
            setThumbnail={setThumbnail}
          />
          <AddVideoDesc desc={desc} setDesc={setDesc} />
        </form>
        <button
          className={styles["add-video-button"]}
          type="submit"
          onClick={handleUpload}
        >
          Validate the entry
        </button>
      </div>
    </div>
  );
}

export default UploadVideo;
