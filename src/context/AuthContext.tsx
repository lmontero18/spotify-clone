import React, { createContext, useState, ReactNode } from "react";

interface AuthContextType {
  username: string;
  isAuthenticated: boolean;
  login: (username: string, password: string) => boolean;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");

  const login = (username: string, password: string): boolean => {
    if (username === "test" && password === "test181003.") {
      setIsAuthenticated(true);
      setUsername(username);
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("username", username);
      return true;
    } else {
      return false;
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUsername("");
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("username");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, username }}>
      {children}
    </AuthContext.Provider>
  );
};
