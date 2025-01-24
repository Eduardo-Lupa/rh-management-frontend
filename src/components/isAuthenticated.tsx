import React from "react";
import { Navigate, Outlet } from "react-router-dom";
// import { useAuth } from 'react-oidc-context'; // Descomente se estiver usando autenticação

export const AuthLoginHunter: React.FC = () => {
  // Simulação de autenticação para exemplo
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};
