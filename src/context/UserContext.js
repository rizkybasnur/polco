// UserContext.js

import React, { createContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState([]);

  const login = (username) => {
    setUsername(username);
    setIsLoggedIn(true);
  };

  const logout = () => {
    setUsername([]);
    setIsLoggedIn(false);
  };

  return (
    <UserContext.Provider value={{ isLoggedIn, username, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
