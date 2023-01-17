/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
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
  const [indexDropdown, setIndexDropdown] = useState(0);

  useEffect(() => {
    dispatch(favoriteThunk.getAllFavoriteSongs());
  }, []);

  return (
    <table className="table-auto w-full mt-8">
      <thead>
        <tr className="border-b border-[#222227]">
          <th className="w-[20px] p-2"></th>
          <th className="text-left w-1/2 p-2 text-sm">TITLE</th>
          <th className="p-2 text-left text-sm">DATE ADDED</th>
          <th className="p-2 w-[20px]"></th>
          <th className="w-[100px] p-2 text-lg">
            <AiOutlineClockCircle className="m-auto" />
          </th>
          <th className="p-2 w-[30px]"></th>
        </tr>
      </thead>
      <tbody>
        {favorite.favorites.favoriteSongs?.songs.map((song, index) => (
          <SubFavouriteSongs
            id={song._id}
            rank={index + 1}
            favorite={true}
            indexDropdown={indexDropdown}
            song={song}
            setIndexDropdown={setIndexDropdown}
          />
        ))}
      </tbody>
    </table>
  );
};

export default FavouriteSongs;
