import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Search from "./pages/Search";
import Favorites from "./pages/Favorites";
import Categories from "./pages/Categories";
import Video from "./pages/Video";
// import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/video" element={<Video />} />
      </Routes>
      <Navbar />
      {/* <Footer /> */}
    </>
  );
}

export default App;
