import axios from 'axios';


//creating n instance of axios by default
// baseURL -> URL of backend server

const token = 'Bearer '+ sessionStorage.getItem('token')

const axiosClient = axios.create({
  baseURL: `http://localhost:5000/api/`,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': token
  }
});

export default axiosClient;
