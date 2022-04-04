import axios from "axios";

export default axios.create({
  baseURL: "",
});

//creating n instance of axios by default
// baseURL -> URL of backend server
