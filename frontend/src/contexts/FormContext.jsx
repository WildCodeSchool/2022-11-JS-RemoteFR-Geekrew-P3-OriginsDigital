import { createContext, useState, useContext, useMemo } from "react";
import PropTypes from "prop-types";

const FormContext = createContext();

export function FormContextProvider({ children }) {
  const [firstName, setFirstName] = useState(localStorage.getItem("user"));
  const [lastName, setLastName] = useState(localStorage.getItem("user"));
  const [userName, setUserName] = useState(localStorage.getItem("user"));
  const [confirmPassword, setConfirmPassword] = useState("");

  const infos = useMemo(
    () => ({
      firstName,
      setFirstName,
      lastName,
      setLastName,
      userName,
      setUserName,
      confirmPassword,
      setConfirmPassword,
    }),
    [
      firstName,
      setFirstName,
      lastName,
      setLastName,
      userName,
      setUserName,
      confirmPassword,
      setConfirmPassword,
    ]
  );

  return <FormContext.Provider value={infos}>{children}</FormContext.Provider>;
}
FormContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useFormContext = () => useContext(FormContext);
