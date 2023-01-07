import axios from "axios";
import { Console } from "console";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 300000,
  timeoutErrorMessage: "timeout",
});

export const useApi = () => ({
  validateToken: async (token: string, userType: string) => {
    if (userType === "professor") {
      try {
        await api.get("/adm/student");
      } catch (err) {
        console.log(err);
      }
    } else if (userType === "student") {
      try {
        await api.get("/aluno/score");
      } catch (err) {
        console.log(err);
      }
    }
  },
  login: async (email: string, password: string, userType: string) => {
    if (userType === "professor") {
      try {
        console.log(email, password);
        const response = await api.post("/adm/admin/login", {
          email,
          password,
        });
        console.log(response);
        return response.data;
      } catch (err) {
        console.log(err);
      }
    } else if (userType === "student") {
      const response = await api.post("/aluno/student/login", {
        email,
        password,
      });
      return response.data;
    }
  },
});
