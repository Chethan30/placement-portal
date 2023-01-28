import axiosClient from "../api/axios.js";

const token = "Bearer " + sessionStorage.getItem("token");
axiosClient.defaults.headers["Authorization"] = token;

export function getProfileDetails() {
  return axiosClient.get("/user/getDetails");
}

export function getJobList() {
  return axiosClient.get("/jobs/getActiveJobs");
}
export function getJobDesc(data) {
  const params = { job_id: data };
  return axiosClient.post("/jobs/getJobDescription", JSON.stringify(params));
}

export function applyForJob(resumeLink, jobId) {
  const params = { resume_link: resumeLink, job_id: jobId };
  return axiosClient.post("/jobs/apply", JSON.stringify(params));
}

export function getSubmittedApplications() {
  return axiosClient.get("/jobs/getApplications");
}

export function createJob(data) {
  return axiosClient.post("/jobs/createJob", JSON.stringify(data));
}

export function getBlogs() {
  return axiosClient.get("/blogs/getBlogs");
}

export function addPost(data) {
  return axiosClient.post("/blogs/createBlog", JSON.stringify(data));
}

export function deleteJob(data) {
  console.log("data ", data);
  return axiosClient.post("/jobs/deleteJob", JSON.stringify(data));
}

export function shortlistedForJob(data) {
  return axiosClient.post("/jobs/updateJobStatus", JSON.stringify(data));
}

export function getStats() {
  return axiosClient.get("/jobs/statistics");
}
