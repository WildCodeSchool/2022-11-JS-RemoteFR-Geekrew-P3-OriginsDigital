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

import javascriptNul from "../assets/thumbnails/javascript-nul.png";

export default function Home() {
  const [videos, setVideos] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/video`)
      .then((res) => res.data)
      .then((data) => {
        setVideos(data);
        const categoriesSet = new Set();
        data.forEach((video) => {
          categoriesSet.add(video.category_name);
        });
        const uniqueCategories = Array.from(categoriesSet);
        setCategories(uniqueCategories);
      });
  }, []);

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
          <SwiperSlide>
            <img
              src={javascriptNul}
              alt=""
              className={styles["main-carousel"]}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={javascriptNul}
              alt=""
              className={styles["main-carousel"]}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={javascriptNul}
              alt=""
              className={styles["main-carousel"]}
            />
          </SwiperSlide>
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
                  <img
                    key={video.id}
                    src={video.thumbnail}
                    alt={video.description}
                  />
                ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
