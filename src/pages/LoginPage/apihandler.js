import axiosClient from "../../api/axios.js";

export async function postLogin(data) {
  return axiosClient.post("/login", JSON.stringify(data));
}
