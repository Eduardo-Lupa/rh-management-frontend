// import { useAuth } from "react-oidc-context";
import { BrowserRouter, Route, Routes } from "react-router";
import { AdminProvider } from "./context/adminContext";
import { ToastContainer } from "react-toastify";
import { Home } from "./pages/home";
import { Header } from "./components/header";
import { Login } from "./pages/login";
import { User } from "./pages/userPage";
import { AuthLogin } from "./components/isAuthenticated";
import { HeaderUser } from "./components/headerUser";
import { AddJob } from "./pages/company/addJob";
import { ViewJobsCompany } from "./pages/company/viewJobs";
import { AllJobs } from "./pages/hunter/allJobs";
import { AdminJobs } from "./pages/admin/jobs";

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
          {/* alert bar */}
          <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
          />

          <Routes>
            <Route element={<Header />}>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
            </Route>

            <Route element={<AuthLogin />}>
              {/* authenticação de logado */}
              <Route element={<HeaderUser />}>
                <Route path="/user" element={<User />} />
                <Route path="/user/jobs" element={<ViewJobsCompany />} />

                {/* only company  */}
                <Route element={<AuthLogin type="company" />}>
                  <Route path="/user/add_job" element={<AddJob />} />
                </Route>

                {/* only hunter  */}
                <Route element={<AuthLogin type="hunter" />}>
                  <Route path="/user/all_jobs" element={<AllJobs />} />
                </Route>
                
                {/* only ADMIN  */}
                <Route element={<AuthLogin type="admin" />}>
                  <Route path="/user/admin/jobs" element={<AdminJobs />} />
                </Route>

                <Route
                  path="/user/recomendation/hunter"
                  element={<ViewJobsCompany />}
                />
                <Route
                  path="/user/recomendation/company"
                  element={<ViewJobsCompany />}
                />
                <Route path="/user/help" element={<ViewJobsCompany />} />
              </Route>
            </Route>

            {/* <Route path="/user/company" element={<User />} /> */}
            {/* <Route path="/teste" element={<Login />} /> */}
          </Routes>
        </BrowserRouter>
      </AdminProvider>
    </>
  );
};
