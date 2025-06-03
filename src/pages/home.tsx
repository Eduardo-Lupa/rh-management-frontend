import { Link } from "react-router-dom";
import PlaceholderImage from "../assets/Placeholder_Image.png";
import MyLogo from "../assets/logo.svg";

export const Home = () => {
  return (
    <>
      {/* first part */}
      <div className="flex h-screen">
        <div className="basis-1/2 flex flex-col gap-6 justify-center items-center">
          <h1 className="text-5xl font-bold ml-10 mr-36">
            Welcome to Your Ultimate Digital Experience
          </h1>
          <p className="text-xl ml-10 mr-10">
            Discover innovative solutions tailored to elevate your business. Our
            commitment to excellence ensures you receive the best service and
            support.
          </p>
        </div>

        <div className="basis-1/2 px-32 py-24">
          {/* <img src="" alt="" /> */}
          <img src={PlaceholderImage} alt="Logo" className="w-full h-full" />
        </div>
      </div>

      {/* second part */}
      <div className="flex h-screen">
        <div className="basis-1/2 px-32 py-24">
          {/* <img src="" alt="" /> */}
          <img src={PlaceholderImage} alt="Logo" className="w-full h-full" />
        </div>

        <div className="basis-1/2 flex flex-col gap-6 justify-center items-center">
          <h2 className="text-5xl font-bold ml-10 mr-36">
            Discover Our Exceptional Services Tailored to Meet Your Needs
          </h2>
          <p className="text-xl ml-10 mr-10">
            We offer a range of services designed to elevate your experience.
            From personalized solutions to expert guidance, we are here to help
            you succeed.
          </p>
        </div>
      </div>

      {/* footer */}
      <footer className="flex flex-col py-4 gap-1">
        <img
          src={MyLogo}
          alt="logo"
          className="h-7 w-30 pt-1 flex justify-start"
        />
        <div className="flex justify-center gap-3">
          <div>About us</div>
          <div>Contact us</div>
        </div>
        <div className="mx-12 mb-4 mt-7">
          <div className="py-[0.6px] rounded bg-black"></div>
          <div className="flex justify-between mt-2">
            <div className="text-xs">
              © {new Date().getFullYear()} COMPANY. All rights reserved.
            </div>
            <div>
              <div className="flex gap-4 text-xs">
                <Link to={"/"}>Privacy Policy</Link>
                <div>Terms of Service</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
