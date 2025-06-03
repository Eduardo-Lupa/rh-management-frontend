import { Link } from "react-router-dom";
import PlaceholderImage from "../assets/Placeholder_Image.png";
import MyLogo from "../assets/logo.svg";

export const Home = () => {
  return (
    <>
      {/* first part - imagem em cima no mobile, texto embaixo */}
      <div className="flex flex-col-reverse md:flex-row min-h- md:min-h-screen">
        {/* Texto */}
        <div className="md:basis-1/2 flex flex-col gap-6 justify-center items-center px-6 py-10 md:px-10">
          <h1 className="text-3xl md:text-5xl font-bold text-center md:text-left">
            Welcome to Your Ultimate Digital Experience
          </h1>
          <p className="text-base md:text-xl text-center md:text-left">
            Discover innovative solutions tailored to elevate your business. Our
            commitment to excellence ensures you receive the best service and
            support.
          </p>
        </div>

        {/* Imagem */}
        <div className="md:basis-1/2 px-6 py-6 max-h-screen flex items-start md:items-center justify-center">
          <img
            src={PlaceholderImage}
            alt="Logo"
            className="w-full h-auto max-h-[90vh] object-contain"
          />
        </div>
      </div>

      {/* second part - imagem à esquerda no desktop, acima no mobile */}
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Imagem */}
        <div className="md:basis-1/2 px-6 py-6 max-h-screen flex items-center justify-center">
          <img
            src={PlaceholderImage}
            alt="Logo"
            className="w-full h-auto max-h-[90vh] object-contain"
          />
        </div>

        {/* Texto */}
        <div className="md:basis-1/2 flex flex-col gap-6 justify-center items-center px-6 py-10 md:px-10">
          <h2 className="text-3xl md:text-5xl font-bold text-center md:text-left">
            Discover Our Exceptional Services Tailored to Meet Your Needs
          </h2>
          <p className="text-base md:text-xl text-center md:text-left">
            We offer a range of services designed to elevate your experience.
            From personalized solutions to expert guidance, we are here to help
            you succeed.
          </p>
        </div>
      </div>

      {/* footer */}
      <footer className="flex flex-col py-4 gap-1 px-6">
        <img
          src={MyLogo}
          alt="logo"
          className="h-7 w-auto pt-1"
        />
        <div className="flex justify-center gap-3">
          <div>About us</div>
          <div>Contact us</div>
        </div>
        <div className="mt-7">
          <div className="py-[0.6px] rounded bg-black"></div>
          <div className="flex flex-col md:flex-row justify-between mt-2 text-xs gap-2">
            <div>
              © {new Date().getFullYear()} COMPANY. All rights reserved.
            </div>
            <div className="flex gap-4">
              <Link to={"/"}>Privacy Policy</Link>
              <div>Terms of Service</div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
