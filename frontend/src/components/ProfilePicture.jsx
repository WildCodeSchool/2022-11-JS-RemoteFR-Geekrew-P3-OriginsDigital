import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/ProfilePicture.module.scss";
import { useSignInContext } from "../contexts/SignInContext";
import instanceAxios from "../services/instanceAxios";

export default function ProfilePicture() {
  const { user, isLoggedIn, userAvatar, setUserAvatar } = useSignInContext();

  const avatars = [
    "black_cat.png",
    "dark_pumpkin.png",
    "frankenstein.png",
    "ghost.png",
    "green_demon.png",
    "green_marsian.png",
    "green_pumpkin.png",
    "head_puke.png",
    "little_bat.png",
    "little_vampire.png",
    "love_pumpkin.png",
    "momy.png",
    "red_demon.png",
    "red_head.png",
    "scary_head.png",
    "smile_pumpkin.png",
    "star_pumpkin.png",
    "the_eye.png",
    "the_skull.png",
    "the_wolf.png",
  ];
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

  const randomIndex = Math.floor(Math.random() * avatars.length);

  const randomAvatar = avatars[randomIndex];

  return (
    <div className={styles.avatar}>
      {isLoggedIn && user && user.roles && (
        <Link to={user.roles === "admin" ? "/admin" : "/profile"}>
          <img
            src={`${
              import.meta.env.VITE_BACKEND_URL
            }/assets/images/avatar_icons/${userAvatar}`}
            alt="avatar"
            className={styles["avatar-profile-image"]}
          />
        </Link>
      )}
      {!isLoggedIn && (
        <img
          src={`${import.meta.env.VITE_BACKEND_URL}
          /assets/images/avatar_icons/${randomAvatar}`}
          alt="avatar"
          className={styles["avatar-image"]}
        />
      )}
    </div>
  );
}
