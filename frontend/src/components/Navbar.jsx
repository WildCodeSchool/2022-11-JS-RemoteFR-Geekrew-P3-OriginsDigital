import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  HomeOutline,
  HomeSharp,
  SearchOutline,
  SearchSharp,
  BookmarkOutline,
  BookmarkSharp,
} from "react-ionicons";
import "../styles/Navbar.scss";

export default function Navbar() {
  const location = useLocation();

  return (
    <div className="cont">
      <nav className="nav-cont">
        <ul>
          <li>
            <NavLink to="/">
              {location.pathname === "/" ? (
                <HomeSharp color="#ffffff" height="35px" width="35px" />
              ) : (
                <HomeOutline color="#ffffff" height="35px" width="35px" />
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to="/search">
              {location.pathname === "/search" ? (
                <SearchSharp color="#ffffff" height="35px" width="35px" />
              ) : (
                <SearchOutline color="#ffffff" height="35px" width="35px" />
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to="/favoris">
              {location.pathname === "/favoris" ? (
                <BookmarkSharp color="#ffffff" height="35px" width="35px" />
              ) : (
                <BookmarkOutline color="#ffffff" height="35px" width="35px" />
              )}
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
