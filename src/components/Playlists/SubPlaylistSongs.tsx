import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import colors from "constants/color";
import noImage from "assets/images/no-image.png";
import { useDispatch, useSelector } from "react-redux";
import favoriteThunk from "features/favorite/favoriteThunk";
import { AppDispatch, IRootState } from "app/store";
import FavoriteType from "types/favorite/FavoriteType";
import { FiMoreHorizontal } from "react-icons/fi";
import { FaTimes } from "react-icons/fa";
import playlistThunk from "features/playlist/playlistThunk";
import Skeleton from "react-loading-skeleton";
import Song from "types/song/Song";
import Singer from "types/singer/Singer";
import joinSingers from "utils/joinSingers";
import moment from "moment";

interface SubPlaylistSongsProps {
  index: number;
  rank: number;
  song: Song<Singer | string>;
  playlistId: string;
  favorite: boolean;
  indexDropdown: number;
  setIndexDropdown: React.Dispatch<React.SetStateAction<number>>;
  handlePlayMusic: (index: number) => void;
}

const SubPlaylistSongs = (props: SubPlaylistSongsProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const playlist = useSelector((state: IRootState) => state.playlist);
  const [playlists, setPlaylists] = useState<string[]>([]);

  const [showModal, setShowModal] = useState(false);

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

  const onShowModal = () => {
    setShowModal(true);
    dispatch(playlistThunk.getPlaylistsNotContainSong(props.song._id));
  };

  const handleRemoveFromPlaylist = () => {
    dispatch(
      playlistThunk.removeSongFromPlaylist({
        playlistId: props.playlistId,
        songIds: [props.song._id],
      })
    );
    props.setIndexDropdown(0);
  };

  const handleAddSongToPlaylists = () => {
    const promises = playlists.map((playlistId) => {
      return dispatch(
        playlistThunk.addSongsToPlaylist({
          playlistId,
          songIds: [props.song._id],
        })
      );
    });
    Promise.all(promises)
      .then(() => {
        setShowModal(false);
      })
      .catch(() => {
        setShowModal(false);
      });
  };

  return (
    <>
      <tr
        className="hover:bg-[#2C2F32] cursor-pointer group"
        onMouseLeave={() => {
          props.setIndexDropdown(0);
        }}
        onClick={() => {
          props.handlePlayMusic(props.index);
        }}
      >
        <td className="p-2 rounded-l-md">{props.rank}</td>
        <td className="flex flex-row gap-4 items-center p-2">
          <img
            src={props.song.imageUrl || noImage}
            alt="music"
            className="h-10 w-10"
            onError={(e) => {
              e.currentTarget.src = noImage;
            }}
          />
          <div>
            <p className={`text-white font-semibold truncate w-[300px]`}>
              {props.song.name}
            </p>
            <p className={`text-[#c0c0c0] truncate w-[300px]`}>
              {joinSingers(props.song.singers)}
            </p>
          </div>
        </td>
        <td className="p-2">
          {moment(props.song.createdAt).format("DD/MM/YYYY")}
        </td>
        <td>
          <div className="flex justify-center p-2 cursor-pointer">
            {props.favorite ? (
              <AiFillHeart
                className={`text-[${colors.greenColor}] text-xl`}
                onClick={() => handleRemoveFromFavorite(props.song._id)}
              />
            ) : (
              <AiOutlineHeart
                className={`hover:text-[${colors.greenColor}] text-xl`}
                onClick={() => handleAddToFavorite(props.song._id)}
              />
            )}
          </div>
        </td>
        <td className="text-center p-2">
          <span className="text-center">
            {moment.unix(props.song.songTime).utc().format("mm:ss")}
          </span>
        </td>
        <td className="pr-2 py-2 rounded-r-md">
          <div className="justify-end items-center flex">
            <div className="hidden group-hover:inline-block relative">
              <FiMoreHorizontal
                className="text-xl cursor-pointer"
                onClick={(e) => {
                  if (props.indexDropdown !== props.rank)
                    props.setIndexDropdown(props.rank);
                  else props.setIndexDropdown(0);
                  e.stopPropagation();
                }}
              />
              <ul
                className={`absolute right-0 bg-[#222227] w-52 rounded-sm text-sm ${
                  props.indexDropdown !== props.rank && "hidden"
                }`}
              >
                <li
                  className="py-3 px-4 hover:bg-gray-700 dark:hover:bg-gray-600 cursor-pointer"
                  onClick={() => onShowModal()}
                >
                  Add to other playlists
                </li>
                <li
                  className="py-3 px-4 hover:bg-gray-700 dark:hover:bg-gray-600 cursor-pointer"
                  onClick={handleRemoveFromPlaylist}
                >
                  Remove from this playlist
                </li>
                {!props.favorite ? (
                  <li
                    className="py-3 px-4 hover:bg-gray-700 dark:hover:bg-gray-600 cursor-pointer"
                    onClick={() => handleAddToFavorite(props.song._id)}
                  >
                    Add to your Favourite
                  </li>
                ) : (
                  <li
                    className="py-3 px-4 hover:bg-gray-700 dark:hover:bg-gray-600 cursor-pointer"
                    onClick={() => handleRemoveFromFavorite(props.song._id)}
                  >
                    Remove from your Favourite
                  </li>
                )}
              </ul>
            </div>
          </div>
        </td>
      </tr>
      <div
        id="defaultModal"
        tabIndex={-1}
        aria-hidden="true"
        className={`${
          showModal ? "fixed" : "hidden"
        } top-0 left-0 right-0 bottom-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full bg-black/20`}
        onClick={(e) => {
          // hide object when click outside

          setShowModal(false);
        }}
      >
        <div
          className="relative max-w-xl w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 rounded-lg bg-[#2C2F32] text-white flex flex-col gap-4"
          id="modalContent"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-xl font-semibold">Add to your playlists</h2>
            <button onClick={() => setShowModal(false)}>
              <FaTimes className="text-xl m-1" />
            </button>
          </div>
          <div className="flex flex-col gap-2">
            {playlist.loading.getPlaylistsNotContainSong ? (
              <>
                <Skeleton height={"20px"} />
                <Skeleton height={"20px"} />
                <Skeleton height={"20px"} />
              </>
            ) : playlist.playlists.playlistsNotContainSong.length === 0 ? (
              <p>Already on all your playlists.</p>
            ) : (
              playlist.playlists.playlistsNotContainSong.map((item, index) => (
                <div className="flex items-center mb-4">
                  <input
                    id={`default-checkbox-${index}`}
                    type="checkbox"
                    value={item._id}
                    className={`w-4 h-4 text-[${colors.greenColor}] bg-[#222227] rounded focus:ring-green-500 focus:ring-2`}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setPlaylists([...playlists, item._id]);
                      } else {
                        setPlaylists(
                          playlists.filter((playlist) => playlist !== item._id)
                        );
                      }
                    }}
                  />
                  <label
                    htmlFor={`default-checkbox-${index}`}
                    className="ml-2 text-sm font-medium text-white"
                  >
                    {item.name}
                  </label>
                </div>
              ))
            )}
          </div>
          <div className="flex justify-end">
            {playlist.playlists.playlistsNotContainSong.length !== 0 ? (
              <button
                className="px-8 py-2 ml-auto bg-[#25A56A] border-transparent rounded-full font-semibold text-white text-sm transition ease-linear delay-50 hover:text-[#25A56A] hover:bg-[#222227]"
                type="submit"
                onClick={handleAddSongToPlaylists}
              >
                SAVE
              </button>
            ) : (
              <button
                className="px-8 py-2 ml-auto bg-[#25A56A] border-transparent rounded-full font-semibold text-white text-sm transition ease-linear delay-50 hover:text-[#25A56A] hover:bg-[#222227]"
                onClick={() => setShowModal(false)}
              >
                OK
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SubPlaylistSongs;
