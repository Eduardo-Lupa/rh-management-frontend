import { useAxiosInstance } from "../axiosConfig";

const axiosInstance = useAxiosInstance();

export const putChangeJobStatus = async (jobId: number, params: any) => {
    return await axiosInstance.put(`/company/jobs/${jobId}`, params);
}