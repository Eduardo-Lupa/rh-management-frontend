import { LoginType } from "../../types/login";
import { useAxiosInstance } from "../axiosConfig";

const axiosInstance = useAxiosInstance();

export const postAuthLogin = async (data: LoginType) => {
    return await axiosInstance.post("/auth/login", data);
}