import axiosClient from "../../api/axios";

const token = 'Bearer '+ sessionStorage.getItem('token');
axiosClient.defaults.headers['Authorization'] = token;

export function getJobList(){
    // console.log(axiosClient.defaults.headers)
    return axiosClient.get('/jobs/getActiveJobs');
}