import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { HiOutlineLogin } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { IRootState, AppDispatch } from "app/store";

import { BsPersonCircle } from "react-icons/bs";
import colors from "constants/color";
import authThunk from "features/auth/authThunk";

const TopNavBar = () => {
  const auth = useSelector((state: IRootState) => state.auth);
  const [showDropdown, setShowDropdown] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const navigation = useNavigate();

  // window.addEventListener("click", (e) => {
  //   if (document.querySelector(".dropdown")?.contains(e.target as Node)) {
  //     console.log(1);
  //     setShowDropdown(false);
  //   }
  // });

  const handleLogout = () => {
    dispatch(authThunk.logout());
    navigation("/");
  };

  return (
    <nav className="flex flex-row justify-between px-8 pl-[332px] h-[70px] py-4 border fixed border-[#222227] items-center w-full z-10 bg-[#16151A]">
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
      {auth.loading ? (
        "Loading"
      ) : !auth.loggedIn ? (
        <NavLink
          to={"/signin"}
          className="flex flex-row gap-2 items-center group"
        >
          <>
            <p>Sign in</p>
            <HiOutlineLogin className="text-2xl group-hover:text-[#25A56A]" />
          </>
        </NavLink>
      ) : (
        <div className="relative inline-block dropdown">
          <button
            className="flex flex-row items-center gap-2 group"
            type="button"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <span>
              Hi,{" "}
              {auth.user?.fullName ? auth.user.fullName : auth.user?.username}
            </span>
            <BsPersonCircle className="text-2xl group-hover:text-[#25A56A]" />
          </button>
          <ul
            className={`absolute right-0 top-[52px] border border-[${
              colors.lineColor
            }] ${
              showDropdown ? "block" : "hidden"
            } w-44 rounded-lg shadow overflow-hidden bg-[#222227]`}
          >
            <NavLink to={"/profile"}>
              <li className="py-3 px-4 hover:bg-gray-700 dark:hover:bg-gray-600 cursor-pointer">
                Profile
              </li>
            </NavLink>
            <NavLink to={"/library"}>
              <li className="py-3 px-4 hover:bg-gray-700 dark:hover:bg-gray-600 cursor-pointer">
                My library
              </li>
            </NavLink>
            <NavLink to={"/favourite"}>
              <li className="py-3 px-4 hover:bg-gray-700 dark:hover:bg-gray-600 cursor-pointer">
                My favourite
              </li>
            </NavLink>
            <NavLink to={"/playlists"}>
              <li className="py-3 px-4 hover:bg-gray-700 dark:hover:bg-gray-600 cursor-pointer">
                Playlist
              </li>
            </NavLink>
            <li
              className="py-3 px-4 hover:bg-gray-700 dark:hover:bg-gray-600 cursor-pointer"
              onClick={() => handleLogout()}
            >
              Logout
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default TopNavBar;
