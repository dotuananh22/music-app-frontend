/* eslint-disable react-hooks/exhaustive-deps */
import Single from "components/Common/Single";
import React from "react";
import { IoMusicalNoteOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { IRootState } from "app/store";
import joinSingers from "utils/joinSingers";
import moment from "moment";
import Skeleton from "react-loading-skeleton";

const NewSingles = () => {
  const song = useSelector((state: IRootState) => state.song);

  return (
    <div>
      <div className="flex flex-row gap-3 items-center text-3xl mb-6">
        <IoMusicalNoteOutline className="text-[#25A56A] mt-1.5" />
        <span className="text-white hover:text-[#25A56A] cursor-pointer transition-all duration-300 ease-in-out">
          New singles
        </span>
      </div>
      {song.loading.getAllNewSingleSongs ? (
        <div className="flex flex-col gap-2">
          <Skeleton height={"60px"} />
          <Skeleton height={"60px"} />
          <Skeleton height={"60px"} />
        </div>
      ) : (
        song.songs.newSingleSongs.map(
          (song, i) => i < 5 && <Single song={song} />
        )
      )}
    </div>
  );
};

export default NewSingles;
