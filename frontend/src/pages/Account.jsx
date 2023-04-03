import { useState, useRef, useEffect } from "react";
import { PencilOutline, CloseOutline } from "react-ionicons";
import { useFormContext } from "../contexts/FormContext";
import { useSignInContext } from "../contexts/SignInContext";
import instanceAxios from "../services/instanceAxios";

import ProfilePicture from "../components/ProfilePicture";
import useModal from "../components/useModal";
import Modal from "../components/ModalPictures";

import styles from "../styles/Account.module.scss";

export default function Account() {
  const { isShowing, toggle } = useModal();
  const { userName, setUserName } = useFormContext();
  const [editUsername, setEditUsername] = useState(false);
  const [editEmail, setEditEmail] = useState(false);
  const [editPassword, setEditPassword] = useState(false);
  const [usernameValue, setUsernameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [oldPasswordValue, setOldPasswordValue] = useState("");
  const [newPasswordValue, setNewPasswordValue] = useState("");
  const [confirmNewPasswordValue, setConfirmNewPasswordValue] = useState("");
  const [apply, setApply] = useState(false);

  const usernameInput = useRef(null);
  const emailInput = useRef(null);
  const oldPasswordInput = useRef(null);

  const { userId, setUserId } = useSignInContext();

  useEffect(() => {
    instanceAxios
      .get(`/profile`)
      .then((response) => {
        const userData = response.data;
        setUserName(userData.username);
        setUsernameValue(userData.username);
        setEmailValue(userData.email);
        setUserId(userData.id);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const onEditUsername = () => {
    setEditUsername(true);
  };

  useEffect(() => {
    if (editUsername) {
      usernameInput.current.focus();
    }
  }, [editUsername]);

  const handleUsernameChange = (event) => {
    setUsernameValue(event.target.value);
  };

  const onEditEmail = () => {
    setEditEmail(true);
  };

  const handleEmailChange = (event) => {
    setEmailValue(event.target.value);
  };

  useEffect(() => {
    if (editEmail) {
      emailInput.current.focus();
    }
  }, [editEmail]);

  const onEditPassword = () => {
    setEditPassword(true);
  };

  const handleOldPasswordChange = (event) => {
    setOldPasswordValue(event.target.value);
  };

  const handleNewPasswordChange = (event) => {
    setNewPasswordValue(event.target.value);
  };

  const handleConfirmNewPasswordChange = (event) => {
    setConfirmNewPasswordValue(event.target.value);
  };

  useEffect(() => {
    if (editPassword) {
      oldPasswordInput.current.focus();
    }
  }, [editPassword]);

  const onPressApply = () => {
    setApply(true);

    const data = {
      username: usernameValue,
      email: emailValue,
    };

    instanceAxios
      .put(`/user/${userId}`, data)
      .then(() => {
        const newUsername = data.username ? data.username : userName;
        setUsernameValue(newUsername);
        setUserName(newUsername);
        const newEmail = data.email ? data.email : emailValue;
        setEmailValue(newEmail);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles["avatar-container"]}>
        <ProfilePicture className={styles["medium-avatar"]} />
        <div
          className={styles.pencil}
          onClick={toggle}
          onKeyDown={toggle}
          role="button"
          tabIndex="0"
        >
          <PencilOutline color="#00000" height="22px" width="25px" />
        </div>
      </div>
      <p>{userName}</p>
      <div className={styles.tabs}>
        <div className={styles.btnlink}>
          <div className={styles["btnlink-name"]}>Username</div>
          {!editUsername && (
            <button
              type="button"
              onClick={onEditUsername}
              onKeyDown={onEditUsername}
              className={styles["btn-edit"]}
            >
              Edit
            </button>
          )}
          {editUsername && (
            <div className={styles["input-container"]}>
              <input
                type="text"
                value={usernameValue}
                onChange={handleUsernameChange}
                ref={usernameInput}
                className={styles.input}
              />
              <CloseOutline
                color="#00000"
                height="25px"
                width="25px"
                className={styles["close-icon"]}
                onClick={() => setEditUsername(false)}
              />
            </div>
          )}
        </div>
        <div className={styles.btnlink}>
          <div className={styles["btnlink-name"]}>Email</div>
          {!editEmail && (
            <button
              type="button"
              onClick={onEditEmail}
              onKeyDown={onEditEmail}
              className={styles["btn-edit"]}
            >
              Edit
            </button>
          )}
          {editEmail && (
            <div className={styles["input-container"]}>
              <input
                type="text"
                value={emailValue}
                onChange={handleEmailChange}
                ref={emailInput}
                className={styles.input}
              />
              <CloseOutline
                color="#00000"
                height="25px"
                width="25px"
                className={styles["close-icon"]}
                onClick={() => setEditEmail(false)}
              />
            </div>
          )}
        </div>
        <div className={styles.btnlink}>
          <div className={styles["btnlink-name"]}>Password</div>
          {!editPassword && (
            <button
              type="button"
              onClick={onEditPassword}
              onKeyDown={onEditPassword}
              className={styles["btn-edit"]}
            >
              Edit
            </button>
          )}
          {editPassword && (
            <div className={styles["passwords-input"]}>
              <div className={styles["input-container"]}>
                <input
                  type="password"
                  placeholder="Old password"
                  value={oldPasswordValue}
                  onChange={handleOldPasswordChange}
                  ref={oldPasswordInput}
                  className={styles.input}
                />
                <CloseOutline
                  color="#00000"
                  height="25px"
                  width="25px"
                  className={styles["close-icon"]}
                  onClick={() => setEditPassword(false)}
                />
              </div>
              <input
                type="password"
                placeholder="New password"
                value={newPasswordValue}
                onChange={handleNewPasswordChange}
                className={styles.input}
              />
              <input
                type="password"
                placeholder="Confirm new password"
                value={confirmNewPasswordValue}
                onChange={handleConfirmNewPasswordChange}
                className={styles.input}
              />
            </div>
          )}
        </div>
        <button
          type="button"
          className={styles["btn-apply"]}
          onClick={onPressApply}
        >
          Apply changes
        </button>
        {apply && (
          <p className={styles.applied}>Your changes has been applied !</p>
        )}
      </div>
      <Modal isShowing={isShowing} hide={toggle} />
    </div>
  );
}
