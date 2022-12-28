/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import PlaylistSongs from "./PlaylistSongs";
// @ts-ignore
import ProfileImage from "assets/images/anh-son-tung.jfif";
import { FiMoreHorizontal } from "react-icons/fi";
import noImage from "assets/images/no-image.jpg";

const Playlists = () => {
  return (
    <div>
      <div className="gradient-green-color w-full h-[300px] flex flex-row items-end gap-6 pl-8 pb-6">
        <div className="gradient-green-color-2 opacity-80 w-[220px] h-[220px] shadow-xl grid place-items-center">
          <img
            src={ProfileImage || noImage}
            alt="image"
            className="w-full h-full object-contain"
            onError={(e) => {
              e.currentTarget.src = noImage;
            }}
          />
        </div>
        <div className="flex flex-col gap-8 text-white">
          <div>
            <span className="font-semibold text-sm">PLAYLIST</span>
            <h3 className="text-7xl font-bold uppercase">m-tp</h3>
          </div>
          <div className="flex flex-row gap-2 items-end text-sm">
            <NavLink to={"#"} className="font-bold hover:underline">
              Tuấn Anh Sky
            </NavLink>
            <span className="text-[6px]">&#9898;</span>
            <span className="font-semibold">22 songs,</span>
            <span className="">3 hr 35 min</span>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-8 items-center mt-8 ml-8">
        <button
          className={`w-[58px] h-[58px] rounded-full border-none outline-none hover:scale-105 bg-[#1ED760] grid place-items-center transition-all duration-200 ease-in-out`}
        >
          <BsFillPlayFill className="text-black text-3xl" />
        </button>
        <FiMoreHorizontal className="text-3xl cursor-pointer" />
      </div>
      <PlaylistSongs />
    </div>
  );
};

export default Playlists;
