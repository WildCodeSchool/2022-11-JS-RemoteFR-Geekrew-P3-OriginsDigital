/* eslint-disable import/no-unresolved */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import { NavLink, useNavigate } from "react-router-dom";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/autoplay";
import styles from "../styles/Home.module.scss";

export default function Home() {
  const [videos, setVideos] = useState([]);
  const [categories, setCategories] = useState([]);
  const [carouselImages, setCarouselImages] = useState(videos);
  const [popularImages, setPopularImages] = useState(videos);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/videos`)
      .then((res) => res.data)
      .then((data) => {
        setVideos(data);
        const categoriesSet = new Set(data.map((video) => video.category_name));
        setCategories(Array.from(categoriesSet));
      });
  }, []);

  const handleRandomize = () => {
    const videosArr = videos;
    const carouselArr = [];
    const popularArr = [];

    while (carouselArr.length < 3) {
      const randomIndex = Math.floor(Math.random() * videosArr.length);

      if (!carouselArr.includes(videos[randomIndex])) {
        carouselArr.push(videos[randomIndex]);
      }
    }

    while (popularArr.length < 6) {
      const randomIndex = Math.floor(Math.random() * videosArr.length);

      if (!popularArr.includes(videos[randomIndex])) {
        popularArr.push(videos[randomIndex]);
      }
    }

    setCarouselImages(carouselArr);
    setPopularImages(popularArr);
  };

  useEffect(() => {
    if (videos.length) {
      handleRandomize();
    }
  }, [videos]);

  const onPressCategory = (e) => {
    const category = e.target.textContent;
    const path = `/search?category-name=${category}`;
    navigate(path);
  };

  return (
    <div className={styles.container}>
      <div className={styles.main}>
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
            {carouselImages.map((video) => (
              <SwiperSlide key={video.id}>
                <NavLink key={video.id} to={`/videos/${video.id}`}>
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
        <div className={styles["popular-images-container"]}>
          <h1 className={styles["popular-title"]}>Popular</h1>
          <div>
            <div className={styles.row}>
              {popularImages.slice(0, 3).map((video) => (
                <NavLink key={video.id} to={`/videos/${video.id}`}>
                  <img
                    src={video.thumbnail}
                    alt={video.description}
                    className={styles["popular-img"]}
                  />
                </NavLink>
              ))}
            </div>
            <div className={styles.row}>
              {popularImages.slice(3, 6).map((video) => (
                <NavLink key={video.id} to={`/videos/${video.id}`}>
                  <img
                    src={video.thumbnail}
                    alt={video.description}
                    className={styles["popular-img"]}
                  />
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
      {categories.map((category) => {
        return (
          <div key={category} className={styles.category}>
            <div
              className={styles["category-name"]}
              onClick={(e) => onPressCategory(e)}
              onKeyDown={(e) => onPressCategory(e)}
              role="button"
              tabIndex="0"
              value={category}
            >
              {category}
            </div>
            <div className={styles.thumbnails}>
              {videos
                .filter((video) => video.category_name === category)
                .map((video) => (
                  <div key={video.title} className={styles.imgContainer}>
                    <NavLink
                      key={video.id}
                      to={`/videos/${video.id}`}
                      className={styles["navlink-thumbnail"]}
                    >
                      <img
                        key={video.id}
                        src={video.thumbnail}
                        alt={video.description}
                      />
                    </NavLink>
                    <p className={styles.title}>{video.title}</p>
                  </div>
                ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
