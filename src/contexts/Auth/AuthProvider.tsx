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
      if (data?.admin && data.token) {
        setUser({
          name: data?.admin.name,
          email: data?.admin.email,
          id: data?.admin.id,
          userType: userType,
        });
        return true;
      }
    } else if (userType === "student") {
      if (data.student && data.token) {
        setUser({
          name: data.student.name,
          email: data.student.email,
          id: data.student.id,
          userType: userType,
        });
      }
      return true;
    }

    return false;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
