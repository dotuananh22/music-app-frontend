/* eslint-disable jsx-a11y/anchor-is-valid */
import colors from "constants/color";
import React from "react";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-40 py-20 bg-transparent">
        <div className="flex flex-col items-center">
          <h1 className={`font-bold text-[${colors.greenColor}] text-9xl`}>
            404
          </h1>

          <h6 className="mb-2 text-2xl font-bold text-center text-white-800 md:text-3xl">
            <span className="text-red-500">Oops!</span> Page not found
          </h6>

          <p className="mb-8 text-center text-gray-400 md:text-lg">
            The page you’re looking for doesn’t exist or You aren’t authorized
            to access this page.
          </p>

          <NavLink to={"/"}>
            <button
              className={`h-[48px] w-[340px] bg-[${colors.greenColor}] border-transparent rounded-xl font-semibold text-white text-sm transition ease-linear delay-50 hover:text-[${colors.greenColor}] hover:bg-[#222227]`}
            >
              GO HOME
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
