import React, { useState } from "react";
// @ts-ignore
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import colors from "constants/color";
import noImage from "assets/images/no-image.jpg";
import { useDispatch } from "react-redux";
import { AppDispatch } from "app/store";
import favoriteThunk from "features/favorite/favoriteThunk";
import FavoriteType from "types/favorite/FavoriteType";
import { FiMoreHorizontal } from "react-icons/fi";

interface SubFavouriteSongsProps {
  id: string;
  rank: number;
  image: string;
  songName: string;
  singerName: string;
  dateAdded: string;
  favorite: boolean;
  songTime: string;
}

const SubFavouriteSongs = (props: SubFavouriteSongsProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const [showDropdown, setShowDropdown] = useState(false);

  const removeFromFavorite = (id: string) => {
    dispatch(
      favoriteThunk.removeFavoriteSong({
        type: FavoriteType.RemoveFavoriteSongs,
        songId: id,
      })
    );
  };

  return (
    // <div className="flex flex-row justify-between items-center">
    //   <div className={`flex flex-row gap-4 items-center basis-1/2`}>
    //     <span>{props.rank}</span>
    //     <img
    //       src={props.image || noImage}
    //       alt="music"
    //       className="h-10 w-10"
    //       onError={(e) => {
    //         e.currentTarget.src = noImage;
    //       }}
    //     />
    //     <div>
    //       <p className={`text-white font-semibold truncate w-[300px]`}>
    //         {props.songName}
    //       </p>
    //       <p className={`text-[#c0c0c0] truncate w-[300px]`}>
    //         {props.singerName}
    //       </p>
    //     </div>
    //   </div>
    //   <div className="basis-1/4 text-center">
    //     <p>{props.dateAdded}</p>
    //   </div>
    //   <div className="flex flex-row items-center gap-8 basis-1/6 justify-end">
    //     {props.favorite ? (
    //       <AiFillHeart
    //         className={`text-[${colors.greenColor}] text-xl`}
    //         onClick={() => removeFromFavorite(props.id)}
    //       />
    //     ) : (
    //       <AiOutlineHeart
    //         className={`hover:text-[${colors.greenColor}] text-xl`}
    //       />
    //     )}
    //     <span>{props.songTime}</span>
    //   </div>
    //   <div className="flex basis-1/12 justify-end">
    //     <FiMoreHorizontal className="text-xl" />
    //   </div>
    // </div>

    <tr className="hover:bg-[#2C2F32] cursor-pointer group">
      <td className="p-2 rounded-l-md">{props.rank}</td>
      <td className="flex flex-row gap-4 items-center p-2">
        <img
          src={props.image || noImage}
          alt="music"
          className="h-10 w-10"
          onError={(e) => {
            e.currentTarget.src = noImage;
          }}
        />
        <div>
          <p className={`text-white font-semibold truncate w-[300px]`}>
            {props.songName}
          </p>
          <p className={`text-[#c0c0c0] truncate w-[300px]`}>
            {props.singerName}
          </p>
        </div>
      </td>
      <td className="p-2">{props.dateAdded}</td>
      <td>
        <div className="flex justify-center p-2 cursor-pointer">
          {props.favorite ? (
            <AiFillHeart
              className={`text-[${colors.greenColor}] text-xl`}
              onClick={() => removeFromFavorite(props.id)}
            />
          ) : (
            <AiOutlineHeart
              className={`hover:text-[${colors.greenColor}] text-xl`}
            />
          )}
        </div>
      </td>
      <td className="text-center p-2">
        <span className="text-center">{props.songTime}</span>
      </td>
      <td className="pr-2 py-2 rounded-r-md">
        <div className="justify-end items-center flex">
          <div className="hidden group-hover:inline-block relative">
            <FiMoreHorizontal
              className="text-xl cursor-pointer"
              onClick={() => setShowDropdown(!showDropdown)}
            />
            <ul
              className={`absolute right-0 bg-[#222227] w-52 rounded-sm text-sm ${
                !showDropdown && "hidden"
              }`}
            >
              <li className="py-3 px-4 hover:bg-gray-700 dark:hover:bg-gray-600 cursor-pointer">
                Add to your Playlist
              </li>
              <li
                className="py-3 px-4 hover:bg-gray-700 dark:hover:bg-gray-600 cursor-pointer"
                onClick={() => removeFromFavorite(props.id)}
              >
                Remove from your Favourite
              </li>
            </ul>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default SubFavouriteSongs;
