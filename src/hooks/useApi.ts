import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export const useApi = () => ({
  validateToken: async (token: string, userType: string) => {},
  login: async (email: string, password: string, userType: string) => {
    if (userType === "professor") {
      const options = {
        method: "POST",
        url: process.env.REACT_APP_BASE_URL + "/adm/admin/login",
        headers: { "content-type": "application/json" },
        data: {
          email,
          password,
        },
      };

      const res = await axios
        .request(options)
        .then((response) => {
          return response.data;
        })
        .catch(function (error) {
          return console.error(error);
        });

      return res;
    } else if (userType === "student") {
      const options = {
        method: "POST",
        url: process.env.REACT_APP_BASE_URL + "/aluno/student/login",
        headers: { "content-type": "application/json" },
        data: {
          email,
          password,
        },
      };

      const res = await axios
        .request(options)
        .then((response) => {
          return response.data;
        })
        .catch(function (error) {
          return console.error(error);
        });

      return res;
    }
  },
  callProfessor: async (token: string) => {
    try {
      const res = await api.get("/adm/student", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data;
    } catch (err) {
      console.log(err);
    }
  },
  callStudent: async (token: string) => {
    try {
      const res = await api.get("/aluno/score", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data;
    } catch (err) {
      console.log(err);
    }
  },
});
