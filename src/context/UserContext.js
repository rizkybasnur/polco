// UserContext.js

import React, { createContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState([]);
  // eslint-disable-next-line
  const [propQc, setPropQc] = useState("");

  const login = (username) => {
    setUsername(username);
    setIsLoggedIn(true);
  };

  const logout = () => {
    setUsername([]);
    setIsLoggedIn(false);
  };

  const saveProp = (e) => {
    setPropQc(e);
  };

  return (
    <UserContext.Provider
      value={{ isLoggedIn, username, login, logout, saveProp, propQc }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
