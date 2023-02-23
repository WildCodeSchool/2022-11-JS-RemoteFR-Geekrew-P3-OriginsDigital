import React from "react";
import { NavLink } from "react-router-dom";

import back from "../assets/back.svg";

function Categories() {
  return (
    <div>
      <NavLink to="/">
        <img src={back} alt="back arrow" />
      </NavLink>
      <div>Categories</div>
    </div>
  );
}

export default Categories;
