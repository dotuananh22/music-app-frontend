import React, { useEffect } from "react";
// @ts-ignore
import ProfileImage from "assets/images/anh-son-tung.jfif";
import SubFavouriteSongs from "./SubFavouriteSongs";
import { AiOutlineClockCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import favoriteThunk from "features/favorite/favoriteThunk";
import { AppDispatch, IRootState } from "app/store";
import { get } from "lodash";
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
        <span className="basis-2/4 pl-6 text-sm">TITLE</span>
        <span className="basis-1/4 text-center text-sm">DATE ADDED</span>
        <div className="basis-1/4 flex justify-end text-xl">
          <AiOutlineClockCircle />
        </div>
      </div>
      <ul className={`flex flex-col`}>
        {favorite.favorites.favoriteSongs?.songs.map((song, index) => (
          <li className="py-2 hover:bg-[#2C2F32] px-4 rounded-md cursor-pointer">
            <SubFavouriteSongs
              rank={index + 1}
              image={get(song, "imageUrl", ProfileImage)}
              songName={get(song, "name", "")}
              singerName={joinSingers(get(song, "singers", []))}
              dateAdded={moment(get(song, "createdAt", "")).format(
                "DD/MM/YYYY"
              )}
              songTime={moment
                .unix(get(song, "songTime", 0))
                .utc()
                .format("mm:ss")}
              favorite={true}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavouriteSongs;
