import { createContext, useState, useContext, useMemo } from "react";
import PropTypes from "prop-types";

const SignInContext = createContext();

export function SignInContextProvider({ children }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const values = useMemo(
    () => ({ email, setEmail, password, setPassword }),
    [email, setEmail, password, setPassword]
  );

  return (
    <SignInContext.Provider value={values}>{children}</SignInContext.Provider>
  );
}
SignInContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useSignInContext = () => useContext(SignInContext);
