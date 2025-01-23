import { useMutation, useQuery } from "@tanstack/react-query";
import { LoginType } from "../types/login";
import { postAuthLogin } from "./endpoints/post";
import { getAuthType } from "./endpoints/get";

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