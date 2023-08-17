"use client";
import toast from "react-hot-toast";
const Header = () => {
  return (
    <header className="border border-b-[#cfcfcf]">
      <div className="w-full sm:w-[90%] my-0 mx-auto flex justify-between items-center space-x-4  py-6 z-[1030] sticky top-0">
        <div>
          <h1 className="font-bold text-3xl">{"Lovier's Beauty"}</h1>
        </div>

        <div className="border border-gray-600 flex-1 bg-[#FAFAFA]">
          <div className="flex items-center h-[44px] space-x-1 px-2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                clipRule="evenodd"
              />
            </svg>

            <input
              placeholder="search for your favourite wigs..."
              className="w-full h-full bg-[#FAFAFA] focus:outline-none text-sm font-light placeholder-black"
            />
          </div>
        </div>

        <div className="sm:flex space-x-3 font-normal hidden ">
          <button
            onClick={() => {
              toast("This feature is not yet available", {
                className: "bg-pink-500 text-white",
              });
            }}
            className="text-pink-600 drop-shadow-md hover:text-pink-700 px-2  border-2 border-transparent hover:cursor-pointer"
          >
            Book Appointment
          </button>
          <span>Wigs</span>
          <span>Services</span>
        </div>

        <div>
          <div className="sm:flex space-x-2 hidden">
            <button className="border border-gray-400 py-1 px-4 text-primaryBrown font-bold">
              Login
            </button>
            <button className="border  py-1 px-4 bg-pink-500 text-white">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export { Header };
