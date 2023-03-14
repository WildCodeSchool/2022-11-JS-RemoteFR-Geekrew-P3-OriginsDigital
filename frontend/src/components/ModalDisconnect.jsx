import React, { useLayoutEffect } from "react";
import ReactDom from "react-dom";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import newLocal from "../styles/modal/modalDisconnectStyles";

function Modal({ isShowing, hide }) {
  const navigate = useNavigate();

  useLayoutEffect(() => {
    if (!isShowing) {
      document.getElementById("root").classList.remove("no-scroll");
    } else document.getElementById("root").classList.add("no-scroll");
  });

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
                <div className="modal-body">Do you want to disconnect ?</div>
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
                    No
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
