import { LoginType } from "../../types/login";
import { useAxiosInstance } from "../axiosConfigBackend";

const axiosInstance = useAxiosInstance();

export const postAuthLogin = async (data: LoginType) => {
  return await axiosInstance.post("/auth/login", data);
};

export const postCreateJob = async (data: any) => {
  return await axiosInstance.post("/company/job", data);
};

export const postForgotPassword = async (data: any) => {
  return await axiosInstance.post("/auth/forgot-password", data);
};

export const postResetPassword = async (
  token: string | undefined,
  body: any
) => {
  return await axiosInstance.post(`/auth/reset-password/${token}`, body);
};
