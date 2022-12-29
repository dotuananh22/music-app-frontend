/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect } from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { useParams } from "react-router-dom";
import PlaylistSongs from "./PlaylistSongs";
import { FiMoreHorizontal } from "react-icons/fi";
import noImage from "assets/images/no-image.jpg";
import { useDispatch, useSelector } from "react-redux";
import playlistThunk from "features/playlist/playlistThunk";
import { AppDispatch, IRootState } from "app/store";
import calculateHoursSongs from "utils/calculateHoursSongs";
import favoriteThunk from "features/favorite/favoriteThunk";

const Playlists = () => {
  const param = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const playlist = useSelector((state: IRootState) => state.playlist);

  useEffect(() => {
    dispatch(playlistThunk.getOnePlaylist(param.id as string));
    dispatch(favoriteThunk.getAllFavoriteSongIds());
  }, []);

  return (
    <div>
      <div className="gradient-green-color w-full h-[300px] flex flex-row items-end gap-6 pl-8 pb-6">
        <div className="gradient-green-color-2 opacity-80 w-[220px] h-[220px] shadow-xl grid place-items-center">
          <img
            src={playlist.playlists.onePlaylist?.imageUrl || noImage}
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
            <h3 className="text-7xl font-bold uppercase">
              {playlist.playlists.onePlaylist?.name}
            </h3>
          </div>
          <div className="flex flex-row gap-2 items-end text-sm">
            {/* <NavLink to={"#"} className="font-bold hover:underline">
              Tuấn Anh Sky
            </NavLink> */}
            {/* <span className="text-[6px]">&#9898;</span> */}
            <span className="font-semibold">
              {playlist.playlists.onePlaylist?.songs.length} songs
            </span>
            <span className="text-[6px]">&#9898;</span>
            <span className="">
              {calculateHoursSongs(playlist.playlists.onePlaylist?.songs)}
            </span>
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
      <PlaylistSongs songs={playlist.playlists.onePlaylist?.songs} />
    </div>
  );
};

export default Playlists;
