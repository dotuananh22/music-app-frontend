import React, { useState, useEffect } from "react";
import noImage from "assets/images/no-image.png";
import { FiMoreHorizontal } from "react-icons/fi";
import moment from "moment";
import { FaTimes } from "react-icons/fa";
import Song from "types/song/Song";
import Singer from "types/singer/Singer";
import joinSingers from "utils/joinSingers";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, IRootState } from "app/store";
import songAdminThunk from "features/admin/song/songThunk";
import { FastField, Form, Formik } from "formik";
import { songSchema } from "schema";
import InputFormik from "components/Common/InputFormik";
import { Select } from "antd";
import singerAdminThunk from "features/admin/singer/singerThunk";
import singerThunk from "features/singer/singerThunk";
import storageFirebaseApi from "config/storage";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

interface SubFavouriteSongsProps {
  id: string;
  rank: number;
  song: Song<Singer>;
  indexDropdown: number;
  setSongId: React.Dispatch<React.SetStateAction<string | undefined>>;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  setIndexDropdown: React.Dispatch<React.SetStateAction<number>>;
}

const SubAllReleases = (props: SubFavouriteSongsProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const [query, setQuery] = useState("");

  const onShowModal = () => {
    props.setSongId(props.id);
    props.setShowModal(true);
  };

  const handleDeleteSong = () => {
    dispatch(songAdminThunk.deleteSongById(props.song._id));
  };

  useEffect(() => {
    dispatch(
      singerThunk.searchSingers({
        query: query,
        limit: 10,
        sort: ["createdAt"],
        order: [-1],
      })
    );
  }, [dispatch, query]);

  return (
    <>
      <tr
        className="hover:bg-[#2C2F32] cursor-pointer group"
        onMouseLeave={() => {
          props.setIndexDropdown(0);
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
                className={`absolute right-0 bg-[#222227] w-[84px] rounded-sm text-sm ${
                  props.indexDropdown !== props.rank && "hidden"
                }`}
              >
                <li
                  className="py-3 px-4 hover:bg-gray-700 dark:hover:bg-gray-600 cursor-pointer"
                  onClick={() => {
                    onShowModal();
                  }}
                >
                  Update
                </li>
                <li
                  className="py-3 px-4 hover:bg-gray-700 dark:hover:bg-gray-600 cursor-pointer"
                  onClick={handleDeleteSong}
                >
                  Delete
                </li>
              </ul>
            </div>
          </div>
        </td>
      </tr>
    </>
  );
};

export default SubAllReleases;
