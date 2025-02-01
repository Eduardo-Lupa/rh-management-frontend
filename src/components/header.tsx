import { Link } from "react-router";
import MyLogo from "../assets/logo.svg";
import { Outlet } from "react-router";

export const Header = () => {
  return (
    <div className="h-full min-h-screen">
      <header className="w-full bg-white h-[48px] border-b border-black border-1 pl-14 pr-16 flex items-center">
        {/* left part */}
        <div className="basis-1/3 h-full flex items-center">
          <a href="/">
            <img
              src={MyLogo}
              alt="logo"
              className="h-7 w-30 pt-1 flex justify-start"
            />
          </a>
        </div>

        {/* middle part */}
        <nav className="basis-1/3 flex h-full items-center justify-center">
          <Link to="/" className="flex justify-center px-5 h-full items-center">
            Home Page
          </Link>
          <Link to="/" className="flex justify-center px-5 h-full items-center">
            Sobre Nós
          </Link>
        </nav>

        {/* right buttons */}
        <div className="basis-1/3 flex justify-end h-full items-center">
          <Link
            to="/login"
            className="text-white bg-black py-1 px-4 text-base rounded-sm"
          >
            Login
          </Link>
        </div>
      </header>

      <Outlet />
    </div>
  );
};
