import axiosClient from "../../api/axios.js";

const token = "Bearer " + sessionStorage.getItem("token");
axiosClient.defaults.headers["Authorization"] = token;

export function getProfileDetails() {
  // console.log(axiosClient.defaults.headers)
  return axiosClient.get("/user/getDetails");
}
