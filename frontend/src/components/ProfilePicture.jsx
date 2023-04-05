import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "../styles/ProfilePicture.module.scss";
import { useSignInContext } from "../contexts/SignInContext";
import instanceAxios from "../services/instanceAxios";

export default function ProfilePicture({ className }) {
  const {
    user,
    isLoggedIn,
    userAvatar = "",
    setUserAvatar,
  } = useSignInContext();

  useEffect(() => {
    instanceAxios
      .get(`/profile`)
      .then((response) => {
        const userData = response.data;
        setUserAvatar(userData.icons);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [userAvatar]);

  return (
    <div className={styles.avatar}>
      {isLoggedIn && user && user.roles && (
        <Link to={user.roles === "admin" ? "/admin" : "/profile"}>
          <img
            src={`${
              import.meta.env.VITE_BACKEND_URL
            }/assets/images/avatar_icons/${userAvatar}`}
            alt="avatar"
            className={`${styles["avatar-profile-image"]} ${className}`}
          />
        </Link>
      )}
    </div>
  );
}

ProfilePicture.propTypes = {
  className: PropTypes.string.isRequired,
};
