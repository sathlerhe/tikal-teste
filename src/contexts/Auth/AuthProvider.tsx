import { useState } from "react";
import { useApi } from "../../hooks/useApi";
import { User } from "../../types/User";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<User | null>(null);
  const api = useApi();

  const login = async (email: string, password: string, userType: string) => {
    const data = await api.login(email, password, userType);

    if (userType === "professor") {
      if (data?.admin && data?.token) {
        setUser({
          name: data?.admin.firstName + " " + data?.admin.lastName,
          email: data?.admin.email,
          id: data?.admin.id,
          userType: userType,
          token: data.token,
        });
        // setToken(data.token);
        return true;
      }
    } else if (userType === "student") {
      if (data?.student && data?.token) {
        setUser({
          name: data.student.firstName + " " + data.student.lastName,
          email: data.student.email,
          id: data.student.id,
          userType: userType,
          token: data.token,
        });
        // setToken(data.token);
        return true;
      }
    }
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  // const setToken = (token: string) => {
  //   localStorage.setItem("authToken", token);
  // };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
