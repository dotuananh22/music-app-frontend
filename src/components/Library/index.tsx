import BreadCrumb from "components/Common/BreadCrumb";
import React, { useEffect } from "react";

import { BsFillPlayFill } from "react-icons/bs";
import { IoMdAdd } from "react-icons/io";
import PlayList from "./PlayList";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import playlistThunk from "features/playlist/playlistThunk";
import { AppDispatch, IRootState } from "app/store";
import Skeleton from "react-loading-skeleton";

const Library = () => {
  const dispatch = useDispatch<AppDispatch>();
  const playlist = useSelector((state: IRootState) => state.playlist);

  useEffect(() => {
    dispatch(playlistThunk.getAllPlaylists());
  }, []);

  return (
    <div className="flex flex-col gap-6">
      <BreadCrumb baseAddress="Home" mainAddress="Library" path="/" />
      <div className="flex flex-col gap-8 mt-6">
        <h2 className="text-4xl text-white">My Library</h2>
        <div className="grid grid-cols-5 gap-6">
          <div className="gradient-color col-span-2 rounded-lg relative group h-[250px]">
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
          {playlist.loading.getAllPlaylists ? (
            <>
              <Skeleton height={"250px"} />
              <Skeleton height={"250px"} />
              <Skeleton height={"250px"} />
            </>
          ) : (
            playlist.playlists.allPlaylists.map((playlist) => (
              <PlayList
                key={playlist._id}
                id={playlist._id}
                image={playlist.imageUrl}
                name={playlist.name}
              />
            ))
          )}
          <div
            title="Create new playlist"
            className="flex flex-col items-center justify-center gap-3 p-4 rounded-md bg-[#202020] hover:bg-[#282828] group overflow-hidden h-[250px]"
          >
            <IoMdAdd className="text-8xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Library;
