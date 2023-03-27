import axios from "axios";
import React, { useEffect } from "react";
import styles from "../styles/ProfilePicture.module.scss";
import { useSignInContext } from "../contexts/SignInContext";

export default function ProfilePicture() {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const { user, isLoggedIn, setUserAvatar, userAvatar } = useSignInContext();

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
    axios
      .get(`${BACKEND_URL}/profile`)
      .then((res) => {
        const persistedUser = res.data[0];
        setUserAvatar(persistedUser.avatar.icons); // Set the icons value to the userAvatar state variable
      })
      .catch((error) => {
        console.error(error);
      });
  }, [isLoggedIn, setUserAvatar]);

  // const handlePicture = async (event) => {
  //   event.preventDefault();
  //   if (user && isLoggedIn)
  //     try {
  //       const res = await
  //       const picture = { ...res.data, avatar: res.data.avatar };

  //       setUserAvatar(res.data.avatar_id);
  //     } catch (error) {
  //       console.error(error);
  //     }
  // };

  const randomIndex = Math.floor(Math.random() * avatars.length);

  const randomAvatar = avatars[randomIndex];

  return (
    <div className={styles.avatar}>
      {isLoggedIn && user && (
        <img
          src={userAvatar}
          alt="avatar"
          className={styles["avatar-profile-image"]}
        />
      )}
      {!isLoggedIn && (
        <img
          src={`${
            import.meta.env.VITE_BACKEND_URL
          }/assets/images/avatar_icons/${randomAvatar}`}
          alt="avatar"
          className={styles["avatar-image"]}
        />
      )}
    </div>
  );
}
