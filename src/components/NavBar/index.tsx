import React, { Fragment } from "react";
import { FiSearch } from "react-icons/fi";
import {
  HiOutlineLogin,
  HiOutlineMicrophone,
  HiOutlineMusicNote,
} from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { BiHeart, BiHomeAlt } from "react-icons/bi";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { GoCalendar } from "react-icons/go";
import MainLogo from "../../assets/images/logo/main-logo.png";

const NavBar = () => {
  return (
    <Fragment>
      <nav className="h-full w-[300px] fixed border border-[#222227] z-20 bg-[#16151A]">
        <div className="h-[70px] flex items-center border border-[#222227]">
          <img src={MainLogo} alt="main-logo" className="h-[200px]" />
        </div>
        <div className="pl-[30px] pt-[30px] flex flex-col gap-6">
          <div className="flex flex-row gap-3 items-center text-lg">
            <BiHomeAlt className="text-2xl" />
            <span>Home</span>
          </div>
          <div className="flex flex-row gap-3 items-center text-lg">
            <MdOutlinePeopleAlt className="text-2xl" />
            <span>Artists</span>
          </div>
          <div className="flex flex-row gap-3 items-center text-lg">
            <HiOutlineMusicNote className="text-2xl" />
            <span>Releases</span>
          </div>
          <div className="flex flex-row gap-3 items-center text-lg">
            <GoCalendar className="text-2xl" />
            <span>Releases</span>
          </div>
          <div className="flex flex-row gap-3 items-center text-lg">
            <HiOutlineMicrophone className="text-2xl" />
            <span>Podcasts</span>
          </div>
          <div className="flex flex-row gap-3 items-center text-lg">
            <BiHeart className="text-2xl" />
            <span>My Favourite</span>
          </div>
        </div>
      </nav>
      <nav className="flex flex-row justify-between px-8 pl-[316px] h-[70px] py-4 border fixed border-[#222227] w-full z-10 bg-[#16151A]">
        <div className="flex flex-row gap-6 items-center">
          <p>Profile</p>
          <p>About</p>
          <p>Contact</p>
        </div>
        <div className="relative flex items-center">
          <input
            type="text"
            className="bg-[#222227] py-2 px-4 pr-20 rounded-lg"
            placeholder="Artist, track or podcast"
          />
          <FiSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-xl hover:text-[#25A56A] cursor-pointer" />
        </div>
        <NavLink to={""} className="flex flex-row gap-2 items-center group">
          <p>Sign in</p>
          <HiOutlineLogin className="text-2xl group-hover:text-[#25A56A]" />
        </NavLink>
      </nav>
      <nav className="fixed bottom-0 w-full z-30 h-[70px] border border-[#222227] bg-[#16151A] grid place-items-center">
        Thanh dưới cùng nè
      </nav>
    </Fragment>
  );
};

export default NavBar;
