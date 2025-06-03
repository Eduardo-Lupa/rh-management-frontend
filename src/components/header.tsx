import { Link } from "react-router";
import { FiMenu } from "react-icons/fi";
import MyLogo from "../assets/logo.svg";
import { Outlet } from "react-router";
import { useState } from "react";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <header className="w-full bg-white h-[48px] border-b border-black border-1 pl-14 md:pr-16 pr-4
      flex items-center justify-between relative">
        {/* Mobile: botão menu */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl"
            aria-label="Abrir menu"
          >
            <FiMenu />
          </button>
        </div>

        {/* centralizada mobile, esquerda no desktop */}
        <div className="basis-1/5 absolute left-1/2 transform -translate-x-1/2 md:static md:translate-x-0">
          <a href="/">
            <img
              src={MyLogo}
              alt="logo"
              className="h-7 w-auto"
            />
          </a>
        </div>

        {/* left part
        <div className="basis-1/3 h-full flex items-center">
          <a href="/">
            <img
              src={MyLogo}
              alt="logo"
              className="h-7 w-30 pt-1 flex justify-center mx-auto"
            />
          </a>
        </div> */}

        {/* Navegação (desktop) */}
        <nav className="hidden md:flex gap-6 items-center justify-center">
          <Link to="/" className="hover:underline">
            Home Page
          </Link>
          <Link to="/" className="hover:underline">
            Sobre Nós
          </Link>
        </nav>

        {/* right buttons */}
        <div className="basis-1/5 flex justify-end h-full items-center">
          <Link
            to="/login"
            className="text-white bg-black py-1 px-4 text-base rounded-sm"
          >
            Login
          </Link>
        </div>

        {/* Menu dropdown (mobile) */}
        {menuOpen && (
          <div className="absolute top-[48px] left-0 w-full bg-white shadow-md z-10 flex flex-col items-start px-4 py-2 md:hidden">
            <Link
              to="/"
              className="py-2 w-full border-b border-gray-200"
              onClick={() => setMenuOpen(false)}
            >
              Home Page
            </Link>
            <Link
              to="/"
              className="py-2 w-full border-b border-gray-200"
              onClick={() => setMenuOpen(false)}
            >
              Sobre Nós
            </Link>
          </div>
        )}
      </header>

      <Outlet />
    </div>
  );
};
