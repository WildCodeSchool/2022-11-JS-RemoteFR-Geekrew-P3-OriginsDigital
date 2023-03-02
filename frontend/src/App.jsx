import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
import { SignInContextProvider } from "./contexts/SignInContext";
import { FormContextProvider } from "./contexts/FormContext";

import Home from "./pages/Home";
import Search from "./pages/Search";
import Favorites from "./pages/Favorites";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import SignUpConfirmation from "./pages/SignUpConfirmation";
import Categories from "./pages/Categories";
import Video from "./pages/Video";
// import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

function App() {
  return (
    <SignInContextProvider>
      <FormContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route
            path="/sign-up-confirmation"
            element={<SignUpConfirmation />}
          />
          <Route path="/categories" element={<Categories />} />
          <Route path="/video" element={<Video />} />
        </Routes>
        <ToastContainer />
        <Navbar />
        {/* <Footer /> */}
      </FormContextProvider>
    </SignInContextProvider>
  );
}

export default App;
