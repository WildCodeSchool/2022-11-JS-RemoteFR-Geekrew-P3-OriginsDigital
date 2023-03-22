import React, { useLayoutEffect } from "react";
import ReactDom from "react-dom";
import PropTypes from "prop-types";
import newLocal from "../styles/modal/modalPicturesStyles";
import ImagesList from "./ImagesList";

function Modal({ isShowing, hide }) {
  useLayoutEffect(() => {
    if (!isShowing) {
      document.getElementById("root").classList.remove("no-scroll");
    } else document.getElementById("root").classList.add("no-scroll");
  });

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

  const url = `${import.meta.env.VITE_BACKEND_URL}/assets/images/avatar_icons/`;

  return isShowing
    ? ReactDom.createPortal(
        <>
          <div className="modal-overlay">
            <div className="modal-wrapper">
              <div className="modal">
                <div className="modal-header">
                  <h4 className="modal-name">Edit profile picture</h4>
                  <button
                    type="button"
                    className="modal-close-button"
                    onClick={hide}
                  >
                    <span>&times;</span>
                  </button>
                </div>
                <div className="images">
                  <ImagesList avatars={avatars} url={url} />
                </div>
              </div>
            </div>
          </div>
          <style>{newLocal}</style>
        </>,
        document.body
      )
    : null;
}

Modal.propTypes = {
  isShowing: PropTypes.bool.isRequired,
  hide: PropTypes.func.isRequired,
};
export default Modal;
