/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FiSearch } from "react-icons/fi";
import Song from "types/song/Song";

interface SubNavBarProps {
  handleSort: (sort: keyof Song<string>) => void;
  sort: (keyof Song<string>)[];
}

const SubNavBar = (props: SubNavBarProps) => {
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
        {/* <div>
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
        </div> */}
      </div>
      <div className="flex flex-row gap-2 items-center bg-[#222227] rounded-xl px-1">
        <button
          className={`px-4 rounded-xl ${
            props.sort[0] === "listens"
              ? "bg-[#25A56A] text-white"
              : "hover:text-white"
          } text-center h-[32px]`}
          onClick={() => props.handleSort("listens")}
        >
          Popular
        </button>
        <button
          className={`px-4 rounded-xl ${
            props.sort[0] === "likes"
              ? "bg-[#25A56A] text-white"
              : "hover:text-white"
          } text-center h-[32px]`}
          onClick={() => props.handleSort("likes")}
        >
          Like
        </button>
        <button
          className={`px-4 rounded-xl ${
            props.sort[0] === "publishTime"
              ? "bg-[#25A56A] text-white"
              : "hover:text-white"
          } text-center h-[32px]`}
          onClick={() => props.handleSort("publishTime")}
        >
          Newest
        </button>
      </div>
    </div>
  );
};

export default SubNavBar;
