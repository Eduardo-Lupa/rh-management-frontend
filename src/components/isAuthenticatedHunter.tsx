import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthenticatedType } from "../api/hooks";
import { setMaxIdleHTTPParsers } from "http";
// import { useAuth } from 'react-oidc-context'; // Descomente se estiver usando autenticação

export const AuthLoginHunter: React.FC = () => {
  // Simulação de autenticação para exemplo
  const data = 'hunter'
  if (data != "hunter") {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};
