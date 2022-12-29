import { AppDispatch, IRootState } from "app/store";
import favoriteThunk from "features/favorite/favoriteThunk";
import moment from "moment";
import React, { useEffect } from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import calculateHoursSongs from "utils/calculateHoursSongs";
import FavouriteSongs from "./FavouriteSongs";

// @ts-ignore

const Favourite = () => {
  const dispatch = useDispatch<AppDispatch>();
  const favorite = useSelector((state: IRootState) => state.favorite);
  useEffect(() => {
    dispatch(favoriteThunk.getAllFavoriteSongs());
  }, []);

  return (
    <div>
      <div className="gradient-green-color w-full h-[300px] flex flex-row items-end gap-6 pl-8 pb-6">
        <div className="gradient-green-color-2 opacity-80 w-[220px] h-[220px] shadow-xl grid place-items-center">
          <FaHeart className="text-white text-7xl" />
        </div>
        <div className="flex flex-col gap-6 text-white">
          <h3 className="text-6xl font-bold">Favourite Songs</h3>
          <div className="flex flex-row gap-2 items-end text-sm">
            <span className="font-semibold">
              {favorite.favorites.favoriteSongs?.songs.length} songs
            </span>
            <span className="text-[6px]">&#9898;</span>
            <span className="">
              {moment
                .unix(favorite.favorites.favoriteSongs?.totalTime || 0)
                .utc()
                .format("mm:ss")}
            </span>
          </div>
        </div>
      </div>
      <button
        className={`mt-8 ml-8 w-[58px] h-[58px] rounded-full border-none outline-none hover:scale-105 bg-[#1ED760] grid place-items-center transition-all duration-200 ease-in-out`}
      >
        <BsFillPlayFill className="text-black text-3xl" />
      </button>
      <FavouriteSongs />
    </div>
  );
};

export default Favourite;
