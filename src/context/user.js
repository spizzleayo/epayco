import React, { useState } from "react";

export const UserContext = React.createContext();

const getSessionFromLocalStorage = () => {
  return localStorage.getItem("session_id")
    ? localStorage.getItem("session_id")
    : "";
};


export const UserProvider = ({ children }) => {
  const [alert, setAlert] = useState({ show: false, msg: "", type: "success" });
  const [session_id,setSession_id] = useState(getSessionFromLocalStorage())

  const setSession = (session_id) => {
    setSession_id(session_id);
    localStorage.setItem("session_id", session_id);
  };

  const deleteSession = () => {
    setSession("");
    localStorage.removeItem("session_id")
  };

  const showAlert = ({ msg, type = "success" }) => {
    setAlert({ msg,show: true, type });
  };

  const hideAlert = () => {
    setAlert({ ...alert, show: false });
  };

  return (
    <UserContext.Provider
      value={{ session_id,setSession,deleteSession,alert, showAlert, hideAlert }}
    >
      {children}
    </UserContext.Provider>
  );
};
