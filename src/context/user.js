import React, { useState } from "react";

export const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const [alert, setAlert] = useState({ show: false, msg: "", type: "success" });


  const showAlert = ({ msg, type = "success" }) => {
    setAlert({ msg,show: true, type });
  };

  const hideAlert = () => {
    setAlert({ ...alert, show: false });
  };

  return (
    <UserContext.Provider
      value={{ alert, showAlert, hideAlert }}
    >
      {children}
    </UserContext.Provider>
  );
};
