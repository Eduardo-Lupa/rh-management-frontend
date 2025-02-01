import { Navigate, Outlet } from "react-router-dom";
import { useGetUser } from "../api/hooks";
// import { useAuth } from 'react-oidc-context'; // Descomente se estiver usando autenticação

export const AuthLogin = ({ type }: { type?: string }) => {
  // Simulação de autenticação para exemplo
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to="/login" />;
  }

  if (type) {
    const { data, isLoading } = useGetUser();

    if (isLoading) {
      return (
        <div className="flex h-screen items-center justify-center">
          <p>Carregando...</p>
        </div>
      );
    }

    if (data?.type !== type) {
      return <Navigate to="/user" />;
    }
  }
  return <Outlet />;
};
