import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import instanceAxios from "../services/instanceAxios";
import { useFormContext } from "../contexts/FormContext";
import { useSignInContext } from "../contexts/SignInContext";
import logoName from "../assets/logo_name.svg";

import Password from "../components/Password";
import FirstName from "../components/FirstName";
import LastName from "../components/LastName";
import UserName from "../components/UserName";
import Email from "../components/Email";
import ConfirmPassword from "../components/ConfirmPassword";

import styles from "../styles/SignUp.module.scss";

function SignUp() {
  const [isChecked, setIsChecked] = useState(false);
  const [response, setResponse] = useState(null);
  const {
    lastName,
    setLastName,
    firstName,
    setFirstName,
    userName,
    setUserName,
    confirmPassword,
    setConfirmPassword,
  } = useFormContext();
  const { password, setPassword, email, setEmail } = useSignInContext();

  function handleCheckboxChange(event) {
    setIsChecked(event.target.checked);
  }

  const navigate = useNavigate();

  const data = {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    userName,
    setUserName,
    confirmPassword,
    setConfirmPassword,
    email,
    setEmail,
    password,
    setPassword,
  };

  const handleSignUp = async (event) => {
    event.preventDefault();
    try {
      await instanceAxios.post(`/sign-up`, data, response);
      setResponse(data);
      navigate("/sign-up-confirmation");
    } catch (error) {
      console.error(error);
      toast.warning("please pay attention to the provided information");
    }
  };

  const onPressLogo = () => {
    navigate("/sign-in");
  };

  return (
    <div className={styles["sign-up-page-container"]}>
      <div className={styles["sign-up-page"]}>
        <button
          type="button"
          className={styles["btn-logo"]}
          onClick={onPressLogo}
        >
          <img
            className={styles["sign-in-page-logo"]}
            src={logoName}
            alt="Logo"
          />
        </button>
        <h1 className={styles["sign-up-title"]}>SIGN UP</h1>
        <form className={styles["sign-up-forms"]} onSubmit={handleSignUp}>
          <FirstName setFirstName={setFirstName} firstName={firstName} />
          <LastName setLastName={setLastName} lastName={lastName} />
          <UserName setUserName={setUserName} userName={userName} />
          <Email setEmail={setEmail} email={email} />
          <Password setPassword={setPassword} password={password} />
          <ConfirmPassword
            setConfirmPassword={setConfirmPassword}
            confirmPassword={confirmPassword}
            password={password}
          />
        </form>
        <div className={styles["check-btn"]}>
          <div className={styles["sign-up-checkbox"]}>
            <label
              className={styles["sign-up-checkbox-label"]}
              htmlFor="option1"
            >
              <input
                type="checkbox"
                id="option1"
                name="option1"
                checked={isChecked}
                onChange={handleCheckboxChange}
                required
              />
              <p className={styles["sign-up-p"]}>
                I certify that I have read and accept the General Terms and
                Conditions of Use and the Data Management Policy.
              </p>
            </label>
          </div>
        </div>
        <button
          className={styles["sign-up-btn"]}
          type="button"
          onClick={handleSignUp}
        >
          SIGN UP
        </button>
      </div>
    </div>
  );
}

export default SignUp;
