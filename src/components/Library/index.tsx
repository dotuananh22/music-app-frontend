import BreadCrumb from "components/Common/BreadCrumb";
import React from "react";

// @ts-ignore
import LibraryImage from "assets/images/anh-son-tung.jfif";
import { BsFillPlayFill } from "react-icons/bs";
import PlayList from "./PlayList";
import { NavLink } from "react-router-dom";

const Library = () => {
  return (
    <div>
      <BreadCrumb baseAddress="Home" mainAddress="Library" path="/" />
      <div className="flex flex-col gap-8 mt-10">
        <h2 className="text-4xl text-white">Your Library</h2>
        <div className="grid grid-cols-5 gap-6">
          <div className="gradient-color col-span-2 rounded-lg relative group">
            <div className="absolute text-white bottom-4 left-4">
              <h2 className="text-3xl font-semibold mb-3">Favorite Songs</h2>
              <span className="font-semibold">100 songs</span>
            </div>
            <NavLink to={"/favourite"}>
              <button
                className={`w-[50px] h-[50px] rounded-full hover:scale-105 bg-[#1ED760] place-items-center absolute right-3 bottom-0 group-hover:bottom-3 group-hover:opacity-100 grid opacity-0 transition-all duration-200 ease-in-out`}
              >
                <BsFillPlayFill className="text-black text-3xl" />
              </button>
            </NavLink>
          </div>
          <PlayList image={LibraryImage} name="M-TP" createdBy="Tuấn Anh Sky" />
          <PlayList image={LibraryImage} name="M-TP" createdBy="Tuấn Anh Sky" />
          <PlayList image={LibraryImage} name="M-TP" createdBy="Tuấn Anh Sky" />
          <PlayList image={LibraryImage} name="M-TP" createdBy="Tuấn Anh Sky" />
          <PlayList image={LibraryImage} name="M-TP" createdBy="Tuấn Anh Sky" />
          <PlayList image={LibraryImage} name="M-TP" createdBy="Tuấn Anh Sky" />
          <PlayList image={LibraryImage} name="M-TP" createdBy="Tuấn Anh Sky" />
          <PlayList image={LibraryImage} name="M-TP" createdBy="Tuấn Anh Sky" />
        </div>
      </div>
    </div>
  );
};

export default Library;
