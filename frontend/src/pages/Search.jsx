import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink, useSearchParams } from "react-router-dom";

import styles from "../styles/Search.module.scss";

export default function Search() {
  const [videos, setVideos] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("");

  const [getCategoryParams] = useSearchParams();
  const categoryName = getCategoryParams.get("category-name");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/videos`)
      .then((res) => res.data)
      .then((data) => {
        setVideos(data);
      });

    if (categoryName !== null) {
      setSelectedFilter(categoryName);
    } else {
      setSelectedFilter("");
    }
  }, []);

  useEffect(() => {
    if (searchValue !== "") {
      setSelectedFilter("");
    }
  }, [searchValue]);

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => setSearchValue(e.target.value)}
        className={styles["search-bar"]}
      />
      <select
        name="filters"
        value={selectedFilter}
        onChange={(e) => setSelectedFilter(e.target.value)}
        className={styles.select}
      >
        <option value="">Categories</option>
        <option value="HTML">HTML</option>
        <option value="React">React</option>
        <option value="JavaScript">Javascript</option>
        <option value="CSS">CSS</option>
        <option value="Node.js">Node.js</option>
        <option value="Next.js">Next.js</option>
        <option value="Typescript">Typescript</option>
        <option value="Express.js">Express.js</option>
        <option value="PHP">PHP</option>
        <option value="Java">Java</option>
        <option value="SQL">SQL</option>
        <option value="NoSQL">NoSQL</option>
      </select>
      <div className={styles.thumbnails}>
        {searchValue !== "" ? (
          videos
            .filter((video) =>
              video.category_name
                .toLowerCase()
                .includes(searchValue.toLowerCase())
            )
            .map((vid) => (
              <div key={vid.title} className={styles.imgContainer}>
                <NavLink key={vid.id} to={`/videos/${vid.id}`}>
                  <img key={vid.id} src={vid.thumbnail} alt={vid.description} />
                  <p>{vid.title}</p>
                </NavLink>
              </div>
            ))
        ) : (
          <>
            {!selectedFilter && (
              <h1 className={styles.browse}>Select a category</h1>
            )}
            {selectedFilter !== "" && (
              <h1 className={styles.browse}>Browse {selectedFilter}</h1>
            )}
            {videos
              .filter((video) => video.category_name === selectedFilter)
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
                    <p className={styles.title}>{video.title}</p>
                  </NavLink>
                </div>
              ))}
          </>
        )}
      </div>
    </div>
  );
}
