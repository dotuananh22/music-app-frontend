/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from "react";
import noImage from "assets/images/no-image.png";
import {
  BsFillCloudArrowUpFill,
  BsFillPlayFill,
  BsMusicNoteBeamed,
} from "react-icons/bs";
import { FiMoreHorizontal } from "react-icons/fi";
import { AiOutlineClockCircle, AiOutlineHeart } from "react-icons/ai";
import { FaHeadphonesAlt, FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import songThunk from "features/song/songThunk";
import { AppDispatch, IRootState } from "app/store";
import moment from "moment";
import FavoriteType from "types/favorite/FavoriteType";
import favoriteThunk from "features/favorite/favoriteThunk";
import joinSingers from "utils/joinSingers";
import Skeleton from "react-loading-skeleton";
import colors from "constants/color";
import playlistThunk from "features/playlist/playlistThunk";
import { BiDownload } from "react-icons/bi";
import { GiMicrophone } from "react-icons/gi";
import { changeLikeSong, setListChosenSong } from "features/song/songSlice";

const DetailSong = () => {
  const dispatch = useDispatch<AppDispatch>();
  const song = useSelector((state: IRootState) => state.song);
  const playlist = useSelector((state: IRootState) => state.playlist);
  const [showModal, setShowModal] = useState(false);
  const [playlists, setPlaylists] = useState<string[]>([]);
  const favoriteSongIds = useSelector(
    (state: IRootState) => state.favorite.favorites.favoriteSongIds
  );
  const [showMoreOptionModal, setShowMoreOptionModal] = useState(false);
  const param = useParams();

  useEffect(() => {
    dispatch(songThunk.getSongById(param.id as string));
    dispatch(favoriteThunk.getAllFavoriteSongIds());
  }, [dispatch]);

  if (song.loading.getSongById) return <div>Loading...</div>;

  if (!song.song.songById) return <div>Song Not Found</div>;

  const songById = song.song.songById;

  const handleAddToFavorite = () => {
    dispatch(
      favoriteThunk.addFavoriteSong({
        songId: songById._id,
        type: FavoriteType.AddToFavoriteIds,
      })
    ).then((res) => {
      if (res.meta.requestStatus === "fulfilled") {
        dispatch(changeLikeSong(1));
      }
    });
  };

  const onShowModal = () => {
    setShowModal(true);
    dispatch(playlistThunk.getPlaylistsNotContainSong(songById._id));
  };

  const handleRemoveFromFavorite = () => {
    dispatch(
      favoriteThunk.removeFavoriteSong({
        songId: songById._id,
        type: FavoriteType.RemoveFavoriteIds,
      })
    ).then((res) => {
      if (res.meta.requestStatus === "fulfilled") {
        dispatch(changeLikeSong(-1));
      }
    });
  };

  const handleAddSongToPlaylists = () => {
    const promises = playlists.map((playlistId) => {
      return dispatch(
        playlistThunk.addSongsToPlaylist({
          playlistId,
          songIds: [songById._id],
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

  const handlePlayMusic = () => {
    dispatch(
      setListChosenSong({
        indexListChosenSong: 0,
        listChosenSong: [songById],
      })
    );
  };
  return (
    <div>
      <div className="gradient-green-color w-full h-[300px] flex flex-row items-end gap-6 pl-8 pb-6">
        <div className="w-[220px] h-[220px] shadow-xl grid place-items-center">
          <img
            src={songById.imageUrl || noImage}
            alt="image"
            className="w-full h-full object-contain"
            onError={(e) => {
              e.currentTarget.src = noImage;
            }}
          />
        </div>
        <div className="flex flex-col gap-8 text-white w-[800px]">
          <div className="flex flex-col gap-2">
            <h3 className="text-5xl font-bold truncate leading-normal">
              {songById.name}
            </h3>
            <span className="text-base">{joinSingers(songById.singers)}</span>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row gap-8 text-sm font-semibold">
              <span className="flex flex-row items-center gap-1">
                <AiOutlineClockCircle className="text-lg" />
                {moment.unix(songById.songTime).utc().format("mm:ss")}
              </span>
              <span className="flex flex-row items-center gap-1">
                <AiOutlineHeart className="text-lg" />
                {songById.likes.toLocaleString("en-US")}
              </span>
              <span className="flex flex-row items-center gap-1">
                <FaHeadphonesAlt className="text-lg" />{" "}
                {songById.listens.toLocaleString("en-US")}
              </span>
              <span className="flex flex-row items-center gap-1">
                <BiDownload className="text-lg" />
                {songById.downloads.toLocaleString("en-US")}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-8 items-center mt-8 ml-8">
        <button
          className={`w-[58px] h-[58px] rounded-full border-none outline-none hover:scale-105 bg-[#1ED760] grid place-items-center transition-all duration-200 ease-in-out`}
          onClick={handlePlayMusic}
        >
          <BsFillPlayFill className="text-black text-3xl" />
        </button>
        <div
          className="flex flex-col"
          onMouseLeave={() => setShowMoreOptionModal(false)}
          onClick={() => setShowMoreOptionModal(!showMoreOptionModal)}
        >
          <FiMoreHorizontal className="relative text-3xl cursor-pointer" />
          <div className="w-52" onClick={(e) => e.stopPropagation()}>
            <ul
              className={`bg-[#222227] w-52 rounded-sm text-sm ${
                showMoreOptionModal ? "absolute" : "hidden"
              }`}
            >
              <li
                className="py-3 px-4 hover:bg-gray-700 dark:hover:bg-gray-600 cursor-pointer"
                // onClick={handleChangeName}
                onClick={() => onShowModal()}
              >
                Add to your playlists
              </li>
              {!favoriteSongIds?.songs.includes(songById._id) ? (
                <li
                  className="py-3 px-4 hover:bg-gray-700 dark:hover:bg-gray-600 cursor-pointer"
                  onClick={handleAddToFavorite}
                >
                  Add to your Favourite
                </li>
              ) : (
                <li
                  className="py-3 px-4 hover:bg-gray-700 dark:hover:bg-gray-600 cursor-pointer"
                  onClick={handleRemoveFromFavorite}
                >
                  Remove from your Favourite
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-12 flex flex-col gap-4">
        <div className="flex flex-row gap-4 items-center text-xl">
          <BsMusicNoteBeamed />
          <h3>{songById.name}</h3>
        </div>
        <div className="flex flex-row gap-4 items-center text-xl">
          <GiMicrophone />
          <h3>{joinSingers(songById.singers)}</h3>
        </div>
        <div className="flex flex-row gap-4 items-center text-xl">
          <BsFillCloudArrowUpFill />
          <h3>{moment(songById.publishTime).format("DD/MM/YYYY")}</h3>
        </div>
        <div className="mt-4">
          <h3 className="text-2xl text-white font-semibold mb-2">Lyric</h3>
          <p
            className="text-justify text-base"
            dangerouslySetInnerHTML={{
              __html: songById.lyric || "Lyric not found",
            }}
          >
            {/* {songById.lyric || "Lyric not found"} */}
          </p>
        </div>
      </div>
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
            ) : playlist.playlists.playlistsNotContainSong.length == 0 ? (
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
    </div>
  );
};

export default DetailSong;
