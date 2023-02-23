import React from "react";
import { Routes, Route } from "react-router-dom";

// import Header from "./components/Header";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Favorites from "./pages/Favorites";
import Categories from "./pages/Categories";
// import Footer from "./components/Footer";
// import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
      {/* <Footer /> */}
      {/* <Navbar /> */}
    </>
  );
}

export default App;
