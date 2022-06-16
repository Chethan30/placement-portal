import axios from "axios";

//creating n instance of axios by default
// baseURL -> URL of backend server

// const baseURL = `https://placement-portal-flask.herokuapp.com/api/`

const axiosClient = axios.create({
  baseURL: `http://127.0.0.1:5000/api/`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default axiosClient;
