import { useAxiosInstance } from "../axiosConfig";

const axiosInstance = useAxiosInstance();

export const getAuthType = async () => {
    return await axiosInstance.get("/auth/type").then(response => response.data);
}