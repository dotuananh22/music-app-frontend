/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { BiChevronDown } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";

const SubNavBar = () => {
  return (
    <div className="flex flex-row justify-between border-y border-[#222227] mt-2 py-3">
      <div className="flex flex-row items-center gap-6">
        <div className="relative flex items-center mr-2">
          <input
            type="text"
            className="bg-[#222227] py-2 px-4 pr-5 rounded-xl border-none focus:border-none placeholder-[#BBBBBB]"
            placeholder="Search..."
          />
          <FiSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-xl hover:text-[#25A56A] cursor-pointer" />
        </div>
        <div>
          <button className="flex flex-row items-center text-white text-sm group">
            <span className="group-hover:text-[#25A56A] transition-all duration-300 ease-in-out">
              All artists
            </span>
            <BiChevronDown className="text-xl" />
          </button>
        </div>
        <div>
          <button className="flex flex-row items-center text-white text-sm group">
            <span className="group-hover:text-[#25A56A] transition-all duration-300 ease-in-out">
              All genres
            </span>{" "}
            <BiChevronDown className="text-xl" />
          </button>
        </div>
      </div>
      <div className="flex flex-row gap-2 items-center bg-[#222227] rounded-xl px-1">
        <button className="px-4 rounded-xl bg-[#25A56A] text-white text-center h-[32px]">
          Featured
        </button>
        <button className="px-4 rounded-xl hover:text-white text-center h-[32px]">
          Popular
        </button>
        <button className="px-4 rounded-xl hover:text-white text-center h-[32px]">
          Newest
        </button>
      </div>
    </div>
  );
};

export default SubNavBar;
