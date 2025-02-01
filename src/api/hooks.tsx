import { useMutation, useQuery } from "@tanstack/react-query";
import { LoginType } from "../types/login";
import { postAuthLogin, postCreateJob } from "./endpoints/post";
import { getAuthType, getAwaitingJobs, getJobsCompany, getUser } from "./endpoints/get";
import { putChangeJobStatus } from "./endpoints/put";

// arquivo para configurar os mutations e querries do react-query

export const useAuthLogin = () => {
  return useMutation({
    mutationFn: (data: LoginType) => postAuthLogin(data),
  });
};

export const useAuthenticatedType = () => {
  return useQuery({
    queryKey: ["getType"],
    queryFn: () => getAuthType(),
  })
};

export const useGetUser = () => {
  return useQuery({
    queryKey: ["getUser"],
    queryFn: () => getUser(),
  })
};

export const useCreateJob = () => {
  return useMutation({
    mutationFn: (data) => postCreateJob(data),
  })
};

export const useGetJobsCompany = (params: any) => {
  return useQuery({
    queryKey: ["getJobsCompany"],
    queryFn: () => getJobsCompany(params),
  })
};

export const useGetAwaitingJobs = () => {
  return useQuery({
    queryKey: ["getAwaitingJobs"],
    queryFn: () => getAwaitingJobs(),
  })
};

export const useJobChangeStatus = () => {
  return useMutation({
    mutationFn: ({ id, params }: { id: number; params: any }) => putChangeJobStatus(id, params),
  });
};