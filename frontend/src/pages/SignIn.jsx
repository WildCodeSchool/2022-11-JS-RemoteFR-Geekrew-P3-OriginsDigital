import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";
import { useSignInContext } from "../contexts/SignInContext";
import logoName from "../assets/logo_name.svg";
import instanceAxios from "../services/instanceAxios";

import Email from "../components/Email";
import Password from "../components/Password";

import styles from "../styles/SignIn.module.scss";

function SignIn() {
  const { email, setEmail, password, setPassword, setIsLoggedIn } =
    useSignInContext();
  const [response, setResponse] = useState("");

  const navigate = useNavigate();
  const handleSignUp = () => {
    navigate("/sign-up");
  };

  const data = { email, password };

  const handleSignIn = async (event) => {
    event.preventDefault();
    if (email && password)
      try {
        const res = await instanceAxios.post(`/sign-in`, data, response);
        const user = { ...res.data, roles: res.data.roles };
        setResponse(user);
        localStorage.setItem("user", JSON.stringify(user));

        if (user.roles === "admin") {
          setIsLoggedIn(true);
          navigate("/admin");
        }
        if (user.roles === "user") {
          setIsLoggedIn(true);
          navigate("/");
        }
        window.location.reload();
        toast.success("✨ Welcome ✨");
      } catch (error) {
        console.error(error);
        toast.warning("Please signup");
      }
  };

  return (
    <div className={styles["sign-in-page-container"]}>
      <div className={styles["sign-in-page"]}>
        <img className={styles["sign-in-page-logo"]} src={logoName} alt="" />
        <h1 className={styles["sign-in-title"]}>SIGN IN</h1>
        <form className={styles["sign-in-forms"]} onSubmit={handleSignIn}>
          <Email email={email} setEmail={setEmail} />
          <Password password={password} setPassword={setPassword} />
        </form>
        <div href="/" className={styles["button-sign-in"]}>
          <label htmlFor="my-button"> </label>
          <button
            className={styles["sign-in-btn1"]}
            type="button"
            onClick={handleSignIn}
          >
            SIGN IN
          </button>
          <label htmlFor="button"> </label>
          <button
            className={styles["sign-in-btn2"]}
            type="button"
            onClick={handleSignUp}
          >
            SIGN UP
          </button>
        </div>
        <Link to="/password" className={styles["sign-in-p"]}>
          Forgot your password?
        </Link>
      </div>
    </div>
  );
}

export default SignIn;
