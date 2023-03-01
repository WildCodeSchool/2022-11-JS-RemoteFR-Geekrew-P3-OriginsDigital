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
          categoriesSet.add(video.name);
        });
        const uniqueCategories = Array.from(categoriesSet);
        setCategories(uniqueCategories);
      });
  }, []);
  console.info(videos);
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
      {categories.map((cat) => {
        return (
          <div key={cat} className={styles.category}>
            <NavLink to="/search" className={styles["category-name"]}>
              {cat}
            </NavLink>
            <div className={styles.thumbnails}>
              {videos
                .filter((e) => e.name === cat)
                .map((vid) => (
                  <img key={vid.id} src={vid.thumbnail} alt="" />
                ))}
            </div>
          </div>
        );
      })}
      {/*  <div className={styles.category}>
        /*    <NavLink to="/search" className={styles["category-name"]}>
        /*      Recent
        /*    </NavLink>
        /*    <div className={styles.thumbnails}>
        /*      <img
        /*        src="https://i.ytimg.com/vi/Y6aYx_KKM7A/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLD5mNY27Tb_awlkrSyKCoLz2XBkQA"
        /*        alt=""
        /*      />
        /*      <img src={javascriptNul} alt="" />
        /*      <img src={javascriptNul} alt="" />
        /*    </div>
        /*  </div>
         <div className={styles.category}>
        <NavLink to="/search" className={styles["category-name"]}>
          HTML
        </NavLink>
        <div className={styles.thumbnails}>
          <img src={javascriptNul} alt="" />
          <img src={javascriptNul} alt="" />
          <img src={javascriptNul} alt="" />
        </div>
      </div>
      <div className={styles.category}>
        <NavLink to="/search" className={styles["category-name"]}>
          React
        </NavLink>
        <div className={styles.thumbnails}>
          <img src={javascriptNul} alt="" />
          <img src={javascriptNul} alt="" />
          <img src={javascriptNul} alt="" />
        </div>
      </div>
      <div className={styles.category}>
        <NavLink to="/search" className={styles["category-name"]}>
          Javascript
        </NavLink>
        <div className={styles.thumbnails}>
          <img src={javascriptNul} alt="" />
          <img src={javascriptNul} alt="" />
          <img src={javascriptNul} alt="" />
        </div>
      </div>
      <div className={styles.category}>
        <NavLink to="/search" className={styles["category-name"]}>
          CSS
        </NavLink>
        <div className={styles.thumbnails}>
          <img src={javascriptNul} alt="" />
          <img src={javascriptNul} alt="" />
          <img src={javascriptNul} alt="" />
        </div>
      </div>
      <div className={styles.category}>
        <NavLink to="/search" className={styles["category-name"]}>
          Node.js
        </NavLink>
        <div className={styles.thumbnails}>
          <img src={javascriptNul} alt="" />
          <img src={javascriptNul} alt="" />
          <img src={javascriptNul} alt="" />
        </div>
      </div>
      <div className={styles.category}>
        <NavLink to="/search" className={styles["category-name"]}>
          Next.js
        </NavLink>
        <div className={styles.thumbnails}>
          <img src={javascriptNul} alt="" />
          <img src={javascriptNul} alt="" />
          <img src={javascriptNul} alt="" />
        </div>
      </div>
      <div className={styles.category}>
        <NavLink to="/search" className={styles["category-name"]}>
          Typescript
        </NavLink>
        <div className={styles.thumbnails}>
          <img src={javascriptNul} alt="" />
          <img src={javascriptNul} alt="" />
          <img src={javascriptNul} alt="" />
        </div>
      </div>
      <div className={styles.category}>
        <NavLink to="/search" className={styles["category-name"]}>
          Express.js
        </NavLink>
        <div className={styles.thumbnails}>
          <img src={javascriptNul} alt="" />
          <img src={javascriptNul} alt="" />
          <img src={javascriptNul} alt="" />
        </div>
      </div>
      <div className={styles.category}>
        <NavLink to="/search" className={styles["category-name"]}>
          PHP
        </NavLink>
        <div className={styles.thumbnails}>
          <img src={javascriptNul} alt="" />
          <img src={javascriptNul} alt="" />
          <img src={javascriptNul} alt="" />
        </div>
      </div>
      <div className={styles.category}>
        <NavLink to="/search" className={styles["category-name"]}>
          Java
        </NavLink>
        <div className={styles.thumbnails}>
          <img src={javascriptNul} alt="" />
          <img src={javascriptNul} alt="" />
          <img src={javascriptNul} alt="" />
        </div>
      </div>
      <div className={styles.category}>
        <NavLink to="/search" className={styles["category-name"]}>
          SQL
        </NavLink>
        <div className={styles.thumbnails}>
          <img src={javascriptNul} alt="" />
          <img src={javascriptNul} alt="" />
          <img src={javascriptNul} alt="" />
        </div>
      </div>
      <div className={styles.category}>
        <NavLink to="/search" className={styles["category-name"]}>
          NoSQL
        </NavLink>
        <div className={styles.thumbnails}>
          <img src={javascriptNul} alt="" />
          <img src={javascriptNul} alt="" />
          <img src={javascriptNul} alt="" />
        </div>
      </div> */}
    </div>
  );
}
