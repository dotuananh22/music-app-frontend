/* eslint-disable react-hooks/exhaustive-deps */
import { AppDispatch, IRootState } from "app/store";
import favoriteThunk from "features/favorite/favoriteThunk";
import { setListChosenSong } from "features/song/songSlice";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { FiMoreHorizontal } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import FavouriteSongs from "./FavouriteSongs";

const Favourite = () => {
  const dispatch = useDispatch<AppDispatch>();
  const favorite = useSelector((state: IRootState) => state.favorite);
  const [showMoreOptionModal, setShowMoreOptionModal] = useState(false);

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
              {favorite.favorites.favoriteSongs?.songs.length || 0} songs
            </span>
            <span className="text-[6px]">&#9898;</span>
            <span className="">
              {moment
                .unix(favorite.favorites.favoriteSongs?.totalTime || 0)
                .utc()
                .format(`m[m] s[s]`)}
            </span>
          </div>
        </div>
      </div>
      {favorite.favorites.favoriteSongs?.songs.length !== 0 ? (
        <>
          <div className="flex flex-row gap-8 items-center mt-8 ml-8">
            <button
              className={`w-[58px] h-[58px] rounded-full border-none outline-none hover:scale-105 bg-[#1ED760] grid place-items-center transition-all duration-200 ease-in-out`}
              onClick={() =>
                dispatch(
                  setListChosenSong({
                    indexListChosenSong:
                      favorite.favorites.favoriteSongs?.songs.length === 0
                        ? -1
                        : 0,
                    listChosenSong:
                      favorite.favorites.favoriteSongs?.songs || [],
                  })
                )
              }
            >
              <BsFillPlayFill className="text-black text-3xl" />
            </button>
            <div
              className="flex flex-col"
              onMouseLeave={() => setShowMoreOptionModal(false)}
              onClick={() => setShowMoreOptionModal(!showMoreOptionModal)}
            >
              <FiMoreHorizontal className="relative text-3xl cursor-pointer" />
              <div className="w-40" onClick={(e) => e.stopPropagation()}>
                <ul
                  className={`bg-[#222227] w-40 rounded-sm text-sm ${
                    showMoreOptionModal ? "absolute" : "hidden"
                  }`}
                >
                  <li className="py-3 px-4 hover:bg-gray-700 dark:hover:bg-gray-600 cursor-pointer">
                    Edit favourite
                  </li>
                  <li className="py-3 px-4 hover:bg-gray-700 dark:hover:bg-gray-600 cursor-pointer">
                    Remove favourite
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <FavouriteSongs loading={favorite.loading.getFavoriteSongs} />
        </>
      ) : (
        <div className="pt-8 text-xl font-semibold">
          There are no songs in your favorite playlist.
        </div>
      )}
    </div>
  );
};

export default Favourite;
