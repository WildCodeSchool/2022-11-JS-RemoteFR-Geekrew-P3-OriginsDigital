/* eslint-disable import/no-unresolved */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import { NavLink } from "react-router-dom";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/autoplay";
import "../styles/swiperconfig.scss";
import styles from "../styles/Home.module.scss";

export default function Home() {
  const [videos, setVideos] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedImages, setSelectedImages] = useState(videos.slice(0, 3));

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/video`)
      .then((res) => res.data)
      .then((data) => {
        setVideos(data);
        const categoriesSet = new Set(data.map((video) => video.category_name));
        setCategories(Array.from(categoriesSet));
      });
  }, []);

  const handleRandomize = () => {
    const randomIndex = Math.floor(Math.random() * 31);
    const randomizedImages = videos.slice(randomIndex, randomIndex + 3);
    setSelectedImages(randomizedImages);
  };

  useEffect(() => {
    handleRandomize();
  }, [videos]);

  return (
    <div className={styles.container}>
      <div className={styles["carousel-container"]}>
        <Swiper
          pagination
          autoplay={{
            delay: 3000,
          }}
          spaceBetween={20}
          modules={[Pagination, Autoplay]}
          className={styles["main-carousel"]}
        >
          {selectedImages.map((video) => (
            <SwiperSlide key={video.id}>
              <NavLink key={video.id} to={`/video/${video.id}`}>
                <img
                  src={video.thumbnail}
                  alt={video.description}
                  className={styles["main-carousel"]}
                />
              </NavLink>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {categories.map((category) => {
        return (
          <div key={category} className={styles.category}>
            <NavLink to="/search" className={styles["category-name"]}>
              {category}
            </NavLink>
            <div className={styles.thumbnails}>
              {videos
                .filter((video) => video.category_name === category)
                .map((video) => (
                  <NavLink key={video.id} to={`/video/${video.id}`}>
                    <img
                      key={video.id}
                      src={video.thumbnail}
                      alt={video.description}
                    />
                  </NavLink>
                ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
