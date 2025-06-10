import { useAxiosInstance } from "../axiosConfigBackend";

const axiosInstance = useAxiosInstance();

export const getAuthType = async () => {
  return await axiosInstance
    .get("/auth/type")
    .then((response) => response.data);
};

export const getJobsCompany = async (params: any) => {
  return await axiosInstance
    .get("/company/jobs", { params })
    .then((response) => response.data);
};

export const getUser = async () => {
  return await axiosInstance.get("/user/me").then((response) => response.data);
};

export const getAwaitingJobs = async () => {
  return await axiosInstance
    .get("/company/jobs/awaiting")
    .then((response) => response.data);
};

export const getAllJobsApproved = async () => {
  return await axiosInstance
    .get("/user/jobhunter")
    .then((response) => response.data);
};

export const getHunterJobAssignment = async (params: any) => {
  return await axiosInstance
    .get("/user/jobhunterassignment", { params })
    .then((response) => response.data);
};

export const getHunterJobAssigned = async () => {
  return await axiosInstance
    .get("/user/jobshunterassignmented")
    .then((response) => response.data);
};
