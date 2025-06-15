import axios from 'axios';

const BASE_URL = 'http://localhost:8080/jobposts';

export const getAllJobs = () => axios.get(BASE_URL);
export const getJobById = (id) => axios.get(`${BASE_URL}/${id}`);
export const addJob = (job) => axios.post(BASE_URL, job);
export const updateJob = (job) => axios.put(BASE_URL, job);
//export const deleteJob = (id) => axios.delete(`${BASE_URL}/${id}`);
export const deleteJob = (id) => {
  return axios.delete(`http://localhost:8080/jobposts/${id}`);
};
export const searchJob = (keyword) => axios.get(`${BASE_URL}/keyword/${keyword}`);
// export const getJobsByCompany = (companyName) => axios.get(`${BASE_URL}/company/${companyName}`);
// export const getJobsByLocation = (location) => axios.get(`${BASE_URL}/location/${location}`);   