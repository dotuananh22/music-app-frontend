/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
// @ts-ignore
import SubFavouriteSongs from "./SubFavouriteSongs";
import { AiOutlineClockCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import favoriteThunk from "features/favorite/favoriteThunk";
import { AppDispatch, IRootState } from "app/store";
import joinSingers from "utils/joinSingers";
import moment from "moment";

const FavouriteSongs = () => {
  const dispatch = useDispatch<AppDispatch>();
  const favorite = useSelector((state: IRootState) => state.favorite);
  useEffect(() => {
    dispatch(favoriteThunk.getAllFavoriteSongs());
  }, []);

  return (
    <div className="flex flex-col gap-4 py-2 pt-4">
      <div className="flex flex-row justify-between items-center border-b border-[#222227] p-4">
        <span className="basis-1/2 pl-6 text-sm">TITLE</span>
        <span className="basis-1/4 text-center text-sm">DATE ADDED</span>
        <div className="basis-1/6 flex justify-end text-xl">
          <AiOutlineClockCircle />
        </div>
        <div className="basis-1/12"></div>
      </div>
      <ul className={`flex flex-col`}>
        {favorite.favorites.favoriteSongs?.songs.map((song, index) => (
          <li className="py-2 hover:bg-[#2C2F32] px-4 rounded-md cursor-pointer">
            <SubFavouriteSongs
              id={song._id}
              rank={index + 1}
              image={song.imageUrl}
              songName={song.name}
              singerName={joinSingers(song.singers)}
              dateAdded={moment(song.createdAt).format("DD/MM/YYYY")}
              songTime={moment.unix(song.songTime).utc().format("mm:ss")}
              favorite={true}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavouriteSongs;
