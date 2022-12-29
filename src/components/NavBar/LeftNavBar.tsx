import React from "react";
import { HiOutlineMicrophone, HiOutlineMusicNote } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { BiHeart, BiHomeAlt, BiLibrary } from "react-icons/bi";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { GoCalendar } from "react-icons/go";
import MainLogo from "assets/images/logo/main-logo.png";
import { RiPlayListFill } from "react-icons/ri";
import { useSelector } from "react-redux";
import { IRootState } from "app/store";

const LeftNavBar = () => {
  const auth = useSelector((state: IRootState) => state.auth);
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
        {auth.loggedIn && (
          <>
            <NavLink
              to={"/library"}
              className="flex flex-row gap-3 items-center text-lg hover:text-[#25A56A] cursor-pointer"
            >
              <BiLibrary className="text-2xl" />
              <span>My Library</span>
            </NavLink>
            {/* <NavLink
              to={"/playlists"}
              className="flex flex-row gap-3 items-center text-lg hover:text-[#25A56A] cursor-pointer"
            >
              <RiPlayListFill className="text-2xl" />
              <span>Playlists</span>
            </NavLink> */}
            <NavLink
              to={"/favourite"}
              className="flex flex-row gap-3 items-center text-lg hover:text-[#25A56A] cursor-pointer"
            >
              <BiHeart className="text-2xl" />
              <span>My Favourite</span>
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
};

export default LeftNavBar;
