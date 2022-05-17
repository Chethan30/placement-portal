import axiosClient from "../../api/axios";

const token = 'Bearer '+ sessionStorage.getItem('token');
axiosClient.defaults.headers['Authorization'] = token;

