import { Link, Outlet } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { PiSignOutBold } from "react-icons/pi";
import { useGetUser } from "../api/hooks";

export const HeaderUser = () => {
  const { data: user } = useGetUser();

  return (
    <div className="flex h-screen">
      <div className="w-[12rem] border-r-2 border-gray-200">
        <div className="flex flex-col h-full">
          {/* superior part */}
          <div className="border-b-2 border-gray-200 pb-5 pt-6">
            {/* gerar imagem */}
            {user?.image ? (
              <img src="/logo.png" alt="Logo" className="w-full h-16" />
            ) : (
              <div>
                <div className="flex justify-center items-center rounded-full bg-gray-200 w-16 h-16 mx-auto my-4 shadow-lg">
                  <FaUser className="h-7 w-7" />
                </div>
              </div>
            )}

            {/* gerar nome */}
            <div className="flex flex-col text-center">{user?.name}</div>
          </div>

          {/* middle button parts */}
          {user?.type == "hunter" ? (
            <div className="flex flex-col justify-center items-center mr-1">
              {/* hunter buttons */}
              <div className="border-b-[1.5px] w-full flex flex-col justify-center items-center">
                <Link to={"/user/all_jobs"}>Novos Jobs</Link>
              </div>
              <div className="border-b-[1.5px] w-full flex flex-col justify-center items-center">
                <Link to={"/user/teste"}>Meus Jobs</Link>
              </div>
              <div className="border-b-[1.5px] w-full flex flex-col justify-center items-center">
                <Link to={"/user/teste"}>Candidatos</Link>
              </div>
              <div className="border-b-[1.5px] w-full flex flex-col justify-center items-center">
                <Link to={"/user/teste"}>Indique uma empresa</Link>
              </div>
              <div className="border-b-[1.5px] w-full flex flex-col justify-center items-center">
                <Link to={"/user/help"}>Help</Link>
              </div>
            </div>
          ) : (
            // company buttons
            <div className="flex flex-col justify-center items-center mr-1">
              <div className="border-b-[1.5px] w-full flex flex-col justify-center items-center">
                <Link to={"/user/add_job?tab=1"}>Adicionar Job</Link>
              </div>
              <div className="border-b-[1.5px] w-full flex flex-col justify-center items-center">
                <Link to={"/user/jobs"}>Meus Jobs</Link>
              </div>
              <div className="border-b-[1.5px] w-full flex flex-col justify-center items-center">
                <Link to={"/user/recomendation/hunter"}>Indique um hunter</Link>
              </div>
              <div className="border-b-[1.5px] w-full flex flex-col justify-center items-center">
                <Link to={"/user/recomendation/company"}>
                  Indique uma empresa
                </Link>
              </div>
              <div className="border-b-[1.5px] w-full flex flex-col justify-center items-center">
                <Link to={"/user/help"}>Help</Link>
              </div>
            </div>
          )}

          {/* logout button */}
          <div className="flex flex-col justify-center items-center mt-auto">
            <div className="mb-3">
              <Link
                to={"/login"}
                className="flex gap-2 justify-center items-center"
                onClick={() => localStorage.removeItem("token")}
              >
                Logout
                <PiSignOutBold />
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex-grow">
        <Outlet />
      </div>
    </div>
  );
};
