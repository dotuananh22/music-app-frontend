/* eslint-disable jsx-a11y/anchor-is-valid */
import Artist from "components/Common/Artist";
import BreadCrumb from "components/Common/BreadCrumb";
import React from "react";
import { BiChevronDown } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

const Artists = () => {
  return (
    <div className="flex flex-col gap-10">
      <BreadCrumb path="/" baseAddress="Home" mainAddress="Artists" />
      <div className="flex flex-col gap-8 mt-6">
        <h2 className="text-4xl text-white">Artists</h2>
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
          <div className="flex flex-row gap-2 items-center bg-[#222227]">
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
        <div className="flex flex-col gap-4 items-center">
          <div className="grid grid-cols-6 gap-8">
            <Artist />
            <Artist />
            <Artist />
            <Artist />
            <Artist />
            <Artist />
            <Artist />
            <Artist />
            <Artist />
            <Artist />
            <Artist />
            <Artist />
          </div>
          <nav aria-label="Page navigation example" className="mt-8">
            <ul className="inline-flex items-center -space-x-px">
              <li>
                <a href="#" className="block px-3 py-2 ml-0 leading-tight">
                  <GrFormPrevious className="color-gray-500 hover:text-white" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="px-3 py-2 leading-tight text-gray-500 hover:text-white transition-all duration-300 ease-in-out"
                >
                  1
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="px-3 py-2 leading-tight text-gray-500 hover:text-white transition-all duration-300 ease-in-out"
                >
                  2
                </a>
              </li>
              <li>
                <a
                  href="#"
                  aria-current="page"
                  className="z-10 px-3 py-2 leading-tight text-[#25A56A] font-semibold"
                >
                  3
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="px-3 py-2 leading-tight text-gray-500 hover:text-white transition-all duration-300 ease-in-out"
                >
                  4
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="px-3 py-2 leading-tight text-gray-500 hover:text-white transition-all duration-300 ease-in-out"
                >
                  5
                </a>
              </li>
              <li>
                <a href="#" className="block px-3 py-2 leading-tight">
                  <GrFormNext className="color-gray-500 hover:text-white" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Artists;
