import BreadCrumb from "components/Common/BreadCrumb";
import React from "react";

// @ts-ignore
import PlayListImage from "assets/images/anh-son-tung.jfif";
import { BsFillPlayFill } from "react-icons/bs";
import colors from "constants/color";

const Playlists = () => {
  return (
    <div>
      <BreadCrumb baseAddress="Home" mainAddress="Playlists" path="/" />
      <div className="flex flex-col gap-8 mt-6">
        <h2 className="text-4xl text-white">Playlists</h2>
        <div className="grid grid-cols-5 gap-6">
          <div className="gradient-color col-span-2 rounded-sm relative group">
            <div className="absolute text-white bottom-4 left-4">
              <h2 className="text-3xl font-semibold mb-3">Liked Songs</h2>
              <span className="font-semibold">100 songs</span>
            </div>
            <button
              className={`w-[50px] h-[50px] rounded-full bg-[#1ED760] place-items-center absolute right-3 bottom-0 group-hover:bottom-3 group-hover:opacity-100 grid opacity-0 transition-all duration-200 ease-in-out`}
            >
              <BsFillPlayFill className="text-black text-3xl" />
            </button>
          </div>
          <div className="flex flex-col gap-3 p-4 rounded-sm bg-[#222227] hover:bg-[#222230] group">
            <div className="w-full relative">
              <img
                src={PlayListImage}
                alt="playlist"
                className="rounded-sm w-full"
              />
              <button
                className={`w-[50px] h-[50px] rounded-full bg-[#1ED760] place-items-center absolute right-2 bottom-0 group-hover:bottom-2 group-hover:opacity-100 grid opacity-0 transition-all duration-200 ease-in-out`}
              >
                <BsFillPlayFill className="text-black text-3xl" />
              </button>
            </div>
            <div>
              <h6 className="text-white text-lg font-semibold">
                My Playlist #4
              </h6>
              <span className="text-sm font-semibold">7 episodes</span>
            </div>
          </div>
          <div className="flex flex-col gap-3 p-4 rounded-sm bg-[#222227] hover:bg-[#222230]">
            <img src={PlayListImage} alt="playlist" className="rounded-sm" />
            <div>
              <h6 className="text-white text-lg font-semibold">
                My Playlist #4
              </h6>
              <span className="text-sm font-semibold">7 episodes</span>
            </div>
          </div>
          <div className="flex flex-col gap-3 p-4 rounded-sm bg-[#222227] hover:bg-[#222230]">
            <img src={PlayListImage} alt="playlist" className="rounded-sm" />
            <div>
              <h6 className="text-white text-lg font-semibold">
                My Playlist #4
              </h6>
              <span className="text-sm font-semibold">7 episodes</span>
            </div>
          </div>
          <div className="flex flex-col gap-3 p-4 rounded-sm bg-[#222227] hover:bg-[#222230]">
            <img src={PlayListImage} alt="playlist" className="rounded-sm" />
            <div>
              <h6 className="text-white text-lg font-semibold">
                My Playlist #4
              </h6>
              <span className="text-sm font-semibold">7 episodes</span>
            </div>
          </div>
          <div className="flex flex-col gap-3 p-4 rounded-sm bg-[#222227] hover:bg-[#222230]">
            <img src={PlayListImage} alt="playlist" className="rounded-sm" />
            <div>
              <h6 className="text-white text-lg font-semibold">
                My Playlist #4
              </h6>
              <span className="text-sm font-semibold">7 episodes</span>
            </div>
          </div>
          <div className="flex flex-col gap-3 p-4 rounded-sm bg-[#222227] hover:bg-[#222230]">
            <img src={PlayListImage} alt="playlist" className="rounded-sm" />
            <div>
              <h6 className="text-white text-lg font-semibold">
                My Playlist #4
              </h6>
              <span className="text-sm font-semibold">7 episodes</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playlists;
