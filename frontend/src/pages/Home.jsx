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
          spaceBetween={20}
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
        <NavLink to="/category" className="category-name">
          Recent
        </NavLink>
        <div className="thumbnails">
          <img src={javascriptNul} alt="" />
          <img src={javascriptNul} alt="" />
          <img src={javascriptNul} alt="" />
        </div>
      </div>
      <div className="category">
        <NavLink to="/category" className="category-name">
          HTML
        </NavLink>
        <div className="thumbnails left">
          <img src={javascriptNul} alt="" />
          <img src={javascriptNul} alt="" />
          <img src={javascriptNul} alt="" />
        </div>
      </div>
      <div className="category">
        <NavLink to="/category" className="category-name">
          React
        </NavLink>
        <div className="thumbnails">
          <img src={javascriptNul} alt="" />
          <img src={javascriptNul} alt="" />
          <img src={javascriptNul} alt="" />
        </div>
      </div>
      <div className="category">
        <NavLink to="/category" className="category-name">
          Javascript
        </NavLink>
        <div className="thumbnails">
          <img src={javascriptNul} alt="" />
          <img src={javascriptNul} alt="" />
          <img src={javascriptNul} alt="" />
        </div>
      </div>
      <div className="category">
        <NavLink to="/category" className="category-name">
          CSS
        </NavLink>
        <div className="thumbnails">
          <img src={javascriptNul} alt="" />
          <img src={javascriptNul} alt="" />
          <img src={javascriptNul} alt="" />
        </div>
      </div>
      <div className="category">
        <NavLink to="/category" className="category-name">
          Node.js
        </NavLink>
        <div className="thumbnails">
          <img src={javascriptNul} alt="" />
          <img src={javascriptNul} alt="" />
          <img src={javascriptNul} alt="" />
        </div>
      </div>
      <div className="category">
        <NavLink to="/category" className="category-name">
          Next.js
        </NavLink>
        <div className="thumbnails">
          <img src={javascriptNul} alt="" />
          <img src={javascriptNul} alt="" />
          <img src={javascriptNul} alt="" />
        </div>
      </div>
      <div className="category">
        <NavLink to="/category" className="category-name">
          Typescript
        </NavLink>
        <div className="thumbnails">
          <img src={javascriptNul} alt="" />
          <img src={javascriptNul} alt="" />
          <img src={javascriptNul} alt="" />
        </div>
      </div>
      <div className="category">
        <NavLink to="/category" className="category-name">
          Express.js
        </NavLink>
        <div className="thumbnails">
          <img src={javascriptNul} alt="" />
          <img src={javascriptNul} alt="" />
          <img src={javascriptNul} alt="" />
        </div>
      </div>
      <div className="category">
        <NavLink to="/category" className="category-name">
          PHP
        </NavLink>
        <div className="thumbnails">
          <img src={javascriptNul} alt="" />
          <img src={javascriptNul} alt="" />
          <img src={javascriptNul} alt="" />
        </div>
      </div>
      <div className="category">
        <NavLink to="/category" className="category-name">
          Java
        </NavLink>
        <div className="thumbnails">
          <img src={javascriptNul} alt="" />
          <img src={javascriptNul} alt="" />
          <img src={javascriptNul} alt="" />
        </div>
      </div>
      <div className="category">
        <NavLink to="/category" className="category-name">
          SQL
        </NavLink>
        <div className="thumbnails">
          <img src={javascriptNul} alt="" />
          <img src={javascriptNul} alt="" />
          <img src={javascriptNul} alt="" />
        </div>
      </div>
      <div className="category">
        <NavLink to="/category" className="category-name">
          NoSQL
        </NavLink>
        <div className="thumbnails">
          <img src={javascriptNul} alt="" />
          <img src={javascriptNul} alt="" />
          <img src={javascriptNul} alt="" />
        </div>
      </div>
    </div>
  );
}
