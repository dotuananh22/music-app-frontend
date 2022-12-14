import React from "react";
import { HiOutlineMicrophone, HiOutlineMusicNote } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { BiHeart, BiHomeAlt } from "react-icons/bi";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { GoCalendar } from "react-icons/go";
import MainLogo from "assets/images/logo/main-logo.png";

const LeftNavBar = () => {
  return (
    <nav className="h-full w-[300px] fixed border border-[#222227] z-20 bg-[#16151A]">
      <div className="h-[69px] flex items-center border-b border-[#222227] pl-[30px]">
        <NavLink to={"/"}>
          <img src={MainLogo} alt="main-logo" className="h-[30px]" />
        </NavLink>
      </div>
      <div className="pt-[30px] flex flex-col gap-6 pl-[30px]">
        <NavLink
          to={"/"}
          className="flex flex-row gap-3 items-center text-lg hover:text-[#25A56A] cursor-pointer"
        >
          <BiHomeAlt className="text-2xl" />
          <span>Home</span>
        </NavLink>
        <NavLink
          to={"/artists"}
          className="flex flex-row gap-3 items-center text-lg hover:text-[#25A56A] cursor-pointer"
        >
          <MdOutlinePeopleAlt className="text-2xl" />
          <span>Artists</span>
        </NavLink>
        <NavLink
          to={"/releases"}
          className="flex flex-row gap-3 items-center text-lg hover:text-[#25A56A] cursor-pointer"
        >
          <HiOutlineMusicNote className="text-2xl" />
          <span>Releases</span>
        </NavLink>
        <div className="flex flex-row gap-3 items-center text-lg hover:text-[#25A56A] cursor-pointer">
          <GoCalendar className="text-2xl" />
          <span>Events</span>
        </div>
        <div className="flex flex-row gap-3 items-center text-lg hover:text-[#25A56A] cursor-pointer">
          <HiOutlineMicrophone className="text-2xl" />
          <span>Podcasts</span>
        </div>
        <div className="flex flex-row gap-3 items-center text-lg hover:text-[#25A56A] cursor-pointer">
          <BiHeart className="text-2xl" />
          <span>My Favourite</span>
        </div>
      </div>
    </nav>
  );
};

export default LeftNavBar;
