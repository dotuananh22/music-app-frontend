import React from "react";
import { FiSearch } from "react-icons/fi";
import { HiOutlineLogin } from "react-icons/hi";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { IRootState } from "app/store";
import { BsPersonCircle } from "react-icons/bs";

const TopNavBar = () => {
  const auth = useSelector((state: IRootState) => state.auth);
  return (
    <nav className="flex flex-row justify-between px-8 pl-[332px] h-[70px] py-4 border fixed border-[#222227] w-full z-10 bg-[#16151A]">
      <div className="flex flex-row gap-6 items-center">
        {auth.loggedIn && (
          <NavLink to={"/profile"}>
            <p className="hover:text-[#25A56A] cursor-pointer">Profile</p>
          </NavLink>
        )}
        {/* <p className="hover:text-[#25A56A] cursor-pointer">About</p> */}
        <NavLink to={"/contacts"}>
          <p className="hover:text-[#25A56A] cursor-pointer">Contacts</p>
        </NavLink>
        <NavLink to={"/policy"}>
          <p className="hover:text-[#25A56A] cursor-pointer">Policy</p>
        </NavLink>
      </div>
      <div className="relative flex items-center">
        <input
          type="text"
          className="bg-[#222227] py-2 px-4 pr-20 rounded-lg focus:border-[#25A56A] border-none"
          placeholder="Artist, track or podcast"
        />
        <FiSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-xl hover:text-[#25A56A] cursor-pointer" />
      </div>
      <NavLink
        to={auth.loggedIn ? "/profile" : "/signin"}
        className="flex flex-row gap-2 items-center group"
      >
        {auth.loading ? (
          "Loading"
        ) : !auth.loggedIn ? (
          <>
            <p>Sign in</p>
            <HiOutlineLogin className="text-2xl group-hover:text-[#25A56A]" />
          </>
        ) : (
          <>
            <p>
              Hi,{" "}
              {auth.user?.fullName ? auth.user.fullName : auth.user?.username}
            </p>
            <BsPersonCircle className="text-2xl group-hover:text-[#25A56A]" />
          </>
        )}
      </NavLink>
    </nav>
  );
};

export default TopNavBar;
