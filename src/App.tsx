// import { useAuth } from "react-oidc-context";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AdminProvider } from "./context/adminContext";
import { ToastContainer } from "react-toastify";
import { Home } from "./pages/home";
import { Header } from "./pages/header";
import { Login } from "./pages/login";

export const App = () => {
  // const auth = useAuth();

  //console.log(auth.isAuthenticated)
  // if (!auth.isAuthenticated) {
  //   return (
  //     <>
  //       <div className="flex h-full justify-center items-center">
  //         <div className="flex flex-col gap-3 bg-white shadow-lg  p-8 rounded text-center">
  //           <p className="text font-OpenSans font-semibold">
  //             Você não está autenticado.
  //           </p>
  //           <button
  //             onClick={() => auth.signinRedirect()}
  //             className="bg-quaternary text-white py-1 px-4 rounded w-1/2 mx-auto"
  //           >
  //             Login
  //           </button>
  //         </div>
  //       </div>
  //     </>
  //   );
  // }

  return (
    <>
      <AdminProvider>
        <BrowserRouter>
          <div className="h-screen">
            {/* alert bar */}
            <ToastContainer
              position="top-right"
              autoClose={2000}
              hideProgressBar={false}
            />

              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/teste" element={<Login />} />
                <Route path="/register" element={<Login />} />
              </Routes>
          </div>
        </BrowserRouter>
      </AdminProvider>
    </>
  );
};
