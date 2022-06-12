import axios from "axios";

//creating n instance of axios by default
// baseURL -> URL of backend server

const axiosClient = axios.create({
  baseURL: `https://placement-portal-flask.herokuapp.com/api/`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default axiosClient;
