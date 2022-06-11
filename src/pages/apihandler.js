import axiosClient from "../api/axios.js";

const token = "Bearer " + sessionStorage.getItem("token");
axiosClient.defaults.headers["Authorization"] = token;

export function getProfileDetails() {
  // console.log(axiosClient.defaults.headers)
  return axiosClient.get("/user/getDetails");
}

export function getJobList() {
  // console.log(axiosClient.defaults.headers)
  return axiosClient.get("/jobs/getActiveJobs");
}
// 2d301da9-3f13-4330-abea-39a92deec88a
export function getJobDesc(data) {
  const params = { job_id: data };
  return axiosClient.post("/jobs/getJobDescription", JSON.stringify(params));
}

export function applyForJob(resumeLink, jobId) {
  const params = { resume_link: resumeLink , job_id: jobId };
  return axiosClient.post("/jobs/apply", JSON.stringify(params));
}

export function getSubmittedApplications() {
  // console.log(axiosClient.defaults.headers)
  return axiosClient.get("/jobs/getApplications");
}

export function createJob(data){
//   data={
//   "job_type":"Internship",
//     "company_name":"Amazon",
//     "dept_alowed":"CSE",
//     "ctc":100000,
//     "comp_address": "edlepk",
//     "internship": true,
//     "job_desc":"sjsn",
//     "placed_slab":2,
//     "start_date":"1272",
//     "end_date":"234",
//     "extras":"5678",
//     "job_role":"sde",
//     "jd_link":"qwertyui"
// }
  console.log(data)
  return axiosClient.post("/jobs/createJob", JSON.stringify(data));
}

