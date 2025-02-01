import { useAxiosInstance } from "../axiosConfig";

const axiosInstance = useAxiosInstance();

export const getAuthType = async () => {
    return await axiosInstance.get("/auth/type").then(response => response.data);
}

export const getJobsCompany = async (params: any) => {
    return await axiosInstance.get("/company/jobs", { params }).then(response => response.data);
}

export const getUser = async () => {
    return await axiosInstance.get("/user/me").then(response => response.data);
}