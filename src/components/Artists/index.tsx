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
      <div className="flex flex-col gap-8">
        <h2 className="text-3xl text-white">Artists</h2>
        <div className="flex flex-row justify-between">
          <div className="flex flex-row items-center gap-6">
            <div className="relative flex items-center">
              <input
                type="text"
                className="bg-[#222227] py-2 px-4 pr-5 rounded-lg focus:border-[#25A56A]"
                placeholder="Search ..."
              />
              <FiSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-xl hover:text-[#25A56A] cursor-pointer" />
            </div>
            <div>
              <button className="flex flex-row gap-1 items-center text-white">
                All artists <BiChevronDown className="text-xl" />
              </button>
            </div>
            <div>
              <button className="flex flex-row gap-1 items-center text-white">
                All genres <BiChevronDown className="text-xl" />
              </button>
            </div>
          </div>
          <div className="flex flex-row gap-2">
            <button className="px-4 rounded-xl bg-[#25A56A] text-white">
              Feature
            </button>
            <button className="px-4 rounded-xl hover:text-white">
              Popular
            </button>
            <button className="px-4 rounded-xl hover:text-white">Newest</button>
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
          </div>
          <nav aria-label="Page navigation example">
            <ul className="inline-flex items-center -space-x-px">
              <li>
                <a
                  href="#"
                  className="block px-3 py-2 ml-0 leading-tight text-gray-500 border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <span className="sr-only">Previous</span>
                  <GrFormPrevious />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="px-3 py-2 leading-tight text-gray-500 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  1
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="px-3 py-2 leading-tight text-gray-500 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  2
                </a>
              </li>
              <li>
                <a
                  href="#"
                  aria-current="page"
                  className="z-10 px-3 py-2 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                >
                  3
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="px-3 py-2 leading-tight text-gray-500 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  4
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="px-3 py-2 leading-tight text-gray-500 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  5
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-3 py-2 leading-tight text-gray-500 border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <span className="sr-only">Next</span>
                  <GrFormNext />
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
