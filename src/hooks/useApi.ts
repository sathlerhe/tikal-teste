import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export const useApi = () => ({
  validateToken: async (token: string, userType: string) => {
    if (userType === "professor") {
      try {
        await api.get("/adm/student", {
          headers: {
            Authorization: `Bearer: ${token}`,
          },
        });
      } catch (err) {
        console.log(err);
      }
    } else if (userType === "student") {
      try {
        await api.get("/aluno/score", {
          headers: {
            Authorization: `Bearer: ${token}`,
          },
        });
      } catch (err) {
        console.log(err);
      }
    }
  },
  login: async (email: string, password: string, userType: string) => {
    if (userType === "professor") {
      const options = {
        method: "POST",
        url: process.env.REACT_APP_BASE_URL + "/adm/admin/login",
        headers: { "content-type": "application/json" },
        data: {
          email: email,
          password: password,
        },
      };

      console.log(email, password, userType);

      axios
        .request(options)
        .then((response) => {
          console.log(response.data);
          return response.data;
        })
        .catch(function (error) {
          return console.error(error);
        });
    } else if (userType === "student") {
      const response = await api.post("/aluno/student/login", {
        email,
        password,
      });
      return response.data;
    }
  },
});
