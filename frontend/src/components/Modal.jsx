import React, { useLayoutEffect } from "react";
import ReactDom from "react-dom";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

function Modal({ isShowing, hide }) {
  const navigate = useNavigate();

  useLayoutEffect(() => {
    if (!isShowing) {
      document.getElementById("root").classList.remove("no-scroll");
    } else document.getElementById("root").classList.add("no-scroll");
  });
  const newLocal = `
            .modal-overlay {
              position: fixed;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              z-index: 250;
              backdrop-filter: blur(2px);
              background-color: rgba(0, 0, 0, 0.8);
            }

            .modal-wrapper {
              position: fixed;
              top: 0;
              left: 0;
              z-index: 100;
              width: 100%;
              height: 100%;
              overflow-x: hidden;
              overflow-y: auto;
              outline: 0;
              display: flex;
              align-items: center;
            }

            .modal {
              z-index: 100;
              background: #232526;
              position: relative;
              margin: auto;
              border: 0.15rem solid #fc4f0c;
              border-radius: 15px;
              max-width: 500px;
              width: 80%;
              padding: 1rem;
            }

            .modal-header {
              display: flex;
              justify-content: space-between;
              align-items: center;
            }

            .modal-name {
              align-content: center;
              text-align: center;
              color: #ff7402;
              font-size: large;
            }

            .modal-close-button {
              font-size: 1.4rem;
              font-weight: 700;
              color: #fc4f0c;
              cursor: pointer;
              border: none;
              background: transparent;
            }

            .modal-body {
              margin: 1rem;
              font-family: "Noto Sans", sans-serif;
              font-size: 1rem;
              color: rgb(255, 255, 255);
              line-height: 1.6rem;
              letter-spacing: 0.05rem;
            }

            .buttons-confirm {
              display: flex;
              justify-content: space-around;
              padding: 0.5rem;
            }

            .yes {
              color: green;
              font-size: 1.1rem;
              background-color: transparent;
              border: none;
            }

            .no {
              color: red;
              font-size: 1.1rem;
              background-color: transparent;
              border: none;
            }
          `;
  return isShowing
    ? ReactDom.createPortal(
        <>
          <div className="modal-overlay">
            <div className="modal-wrapper">
              <div className="modal">
                <div className="modal-header">
                  <h4 className="modal-name">Disconnect</h4>
                  <button
                    type="button"
                    className="modal-close-button"
                    onClick={hide}
                  >
                    <span>&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  Really want to leave us already ?
                </div>
                <div className="buttons-confirm">
                  <button
                    type="button"
                    className="yes"
                    onClick={() => {
                      navigate("/");
                    }}
                  >
                    Yes
                  </button>
                  <button type="button" className="no" onClick={hide}>
                    Im staying !
                  </button>
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
