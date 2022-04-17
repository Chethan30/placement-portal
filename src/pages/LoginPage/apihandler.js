import axiosClient from "../../api/axios.js"

export function postLogin(data){
    return axiosClient.post('/login', JSON.stringify(data));
}
