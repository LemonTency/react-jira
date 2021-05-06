import React, { useState } from "react";
import * as auth from "auth-provider";

interface AuthForm {
  username: string;
  password: string;
  token: string;
}

interface User {
  name: string;
  id: number;
}

const AuthContext = React.createContext<
  | {
      user: User | null;
      login: (form: AuthForm) => Promise<void>;
      logout: (form: AuthForm) => Promise<void>;
    }
  | undefined
>(undefined);
AuthContext.displayName = "AuthContext";

export const AuthProvider = () => {
  const [user, setUser] = useState<User | null>(null);

  const login = (form: AuthForm) =>
    auth.login(form).then((user) => setUser(user));

  const logout = (form: AuthForm) =>
    auth.logout().then((user) => setUser(null));
  return (
    <AuthContext.Provider
      value={{ user, login, logout }}
    ></AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = React.createContext(AuthContext);
  if (!context) {
    throw new Error("错误");
  }
  return context;
};
