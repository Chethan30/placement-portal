import axios from "axios";

//creating n instance of axios by default
// baseURL -> URL of backend server

const baseURL = `https://placement-portal-flask.herokuapp.com/api/`;

const axiosClient = axios.create({
  baseURL: baseURL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default axiosClient;
