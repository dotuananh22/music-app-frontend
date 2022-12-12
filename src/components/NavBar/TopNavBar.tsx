import React from "react";
import { FiSearch } from "react-icons/fi";
import { HiOutlineLogin } from "react-icons/hi";
import { NavLink } from "react-router-dom";

const TopNavBar = () => {
  return (
    <nav className="flex flex-row justify-between px-8 pl-[316px] h-[70px] py-4 border fixed border-[#222227] w-full z-10 bg-[#16151A]">
      <div className="flex flex-row gap-6 items-center">
        <p className="hover:text-[#25A56A] cursor-pointer">Profile</p>
        <p className="hover:text-[#25A56A] cursor-pointer">About</p>
        <p className="hover:text-[#25A56A] cursor-pointer">Contact</p>
      </div>
      <div className="relative flex items-center">
        <input
          type="text"
          className="bg-[#222227] py-2 px-4 pr-20 rounded-lg focus:border-[#25A56A]"
          placeholder="Artist, track or podcast"
        />
        <FiSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-xl hover:text-[#25A56A] cursor-pointer" />
      </div>
      <NavLink to={""} className="flex flex-row gap-2 items-center group">
        <p>Sign in</p>
        <HiOutlineLogin className="text-2xl group-hover:text-[#25A56A]" />
      </NavLink>
    </nav>
  );
};

export default TopNavBar;
