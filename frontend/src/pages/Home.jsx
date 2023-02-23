/* eslint-disable import/no-unresolved */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import { NavLink } from "react-router-dom";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/autoplay";
import "../styles/Home.scss";

import javascriptNul from "../assets/thumbnails/javascript-nul.png";

export default function Home() {
  return (
    <div className="container">
      <div className="carousel-container">
        <Swiper
          pagination
          autoplay={{
            delay: 3000,
          }}
          modules={[Pagination, Autoplay]}
          className="main-carousel"
        >
          <SwiperSlide>
            <img src={javascriptNul} alt="" className="main-carousel" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={javascriptNul} alt="" className="main-carousel" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={javascriptNul} alt="" className="main-carousel" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="dropdown-menu">
        <NavLink to="/categories" className="categories">
          Browse Categories
        </NavLink>
      </div>
      <div className="category right">
        <h1 className="category-name">Recent</h1>
        <div className="thumbnails">
          <img src={javascriptNul} alt="" />
          <img src={javascriptNul} alt="" />
          <img src={javascriptNul} alt="" />
        </div>
      </div>
      <div className="category">
        <h1 className="category-name">HTML</h1>
        <div className="thumbnails left">
          <img src={javascriptNul} alt="" />
          <img src={javascriptNul} alt="" />
          <img src={javascriptNul} alt="" />
        </div>
      </div>
      <div className="category">
        <h1 className="category-name">React</h1>
        <div className="thumbnails">
          <img src={javascriptNul} alt="" />
          <img src={javascriptNul} alt="" />
          <img src={javascriptNul} alt="" />
        </div>
      </div>
      <div className="category">
        <h1 className="category-name">Javascript</h1>
        <div className="thumbnails">
          <img src={javascriptNul} alt="" />
          <img src={javascriptNul} alt="" />
          <img src={javascriptNul} alt="" />
        </div>
      </div>
      <div className="category">
        <h1 className="category-name">CSS</h1>
        <div className="thumbnails">
          <img src={javascriptNul} alt="" />
          <img src={javascriptNul} alt="" />
          <img src={javascriptNul} alt="" />
        </div>
      </div>
      <div className="category">
        <h1 className="category-name">Node.js</h1>
        <div className="thumbnails">
          <img src={javascriptNul} alt="" />
          <img src={javascriptNul} alt="" />
          <img src={javascriptNul} alt="" />
        </div>
      </div>
      <div className="category">
        <h1 className="category-name">Next.js</h1>
        <div className="thumbnails">
          <img src={javascriptNul} alt="" />
          <img src={javascriptNul} alt="" />
          <img src={javascriptNul} alt="" />
        </div>
      </div>
      <div className="category">
        <h1 className="category-name">Typescript</h1>
        <div className="thumbnails">
          <img src={javascriptNul} alt="" />
          <img src={javascriptNul} alt="" />
          <img src={javascriptNul} alt="" />
        </div>
      </div>
      <div className="category">
        <h1 className="category-name">Express.js</h1>
        <div className="thumbnails">
          <img src={javascriptNul} alt="" />
          <img src={javascriptNul} alt="" />
          <img src={javascriptNul} alt="" />
        </div>
      </div>
      <div className="category">
        <h1 className="category-name">PHP</h1>
        <div className="thumbnails">
          <img src={javascriptNul} alt="" />
          <img src={javascriptNul} alt="" />
          <img src={javascriptNul} alt="" />
        </div>
      </div>
      <div className="category">
        <h1 className="category-name">Java</h1>
        <div className="thumbnails">
          <img src={javascriptNul} alt="" />
          <img src={javascriptNul} alt="" />
          <img src={javascriptNul} alt="" />
        </div>
      </div>
      <div className="category">
        <h1 className="category-name">SQL</h1>
        <div className="thumbnails">
          <img src={javascriptNul} alt="" />
          <img src={javascriptNul} alt="" />
          <img src={javascriptNul} alt="" />
        </div>
      </div>
      <div className="category">
        <h1 className="category-name">NoSQL</h1>
        <div className="thumbnails">
          <img src={javascriptNul} alt="" />
          <img src={javascriptNul} alt="" />
          <img src={javascriptNul} alt="" />
        </div>
      </div>
    </div>
  );
}
