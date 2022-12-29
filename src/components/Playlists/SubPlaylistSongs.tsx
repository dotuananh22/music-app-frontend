import React from "react";
// @ts-ignore
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import colors from "constants/color";
import noImage from "assets/images/no-image.jpg";
import { useDispatch } from "react-redux";
import favoriteThunk from "features/favorite/favoriteThunk";
import { AppDispatch } from "app/store";
import FavoriteType from "types/favorite/FavoriteType";

interface SubPlaylistSongsProps {
  id: string;
  rank: number;
  image: string;
  songName: string;
  singerName: string;
  dateAdded: string;
  favorite: boolean;
  songTime: string;
}

const SubPlaylistSongs = (props: SubPlaylistSongsProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleAddToFavorite = (id: string) => {
    dispatch(
      favoriteThunk.addFavoriteSong({
        songId: id,
        type: FavoriteType.AddToFavoriteIds,
      })
    );
  };

  const handleRemoveFromFavorite = (id: string) => {
    dispatch(
      favoriteThunk.removeFavoriteSong({
        songId: id,
        type: FavoriteType.RemoveFavoriteIds,
      })
    );
  };

  return (
    <div className="flex flex-row justify-between items-center">
      <div className={`flex flex-row gap-4 items-center basis-2/4`}>
        <span>{props.rank}</span>
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
      </div>
      <div className="basis-1/4 text-center">
        <p>{props.dateAdded}</p>
      </div>
      <div className="flex flex-row items-center gap-8 basis-1/4 justify-end">
        {props.favorite ? (
          <AiFillHeart
            className={`text-[${colors.greenColor}] text-xl`}
            onClick={() => handleRemoveFromFavorite(props.id)}
          />
        ) : (
          <AiOutlineHeart
            className={`hover:text-[${colors.greenColor}] text-xl`}
            onClick={() => handleAddToFavorite(props.id)}
          />
        )}
        <span>{props.songTime}</span>
      </div>
    </div>
  );
};

export default SubPlaylistSongs;
