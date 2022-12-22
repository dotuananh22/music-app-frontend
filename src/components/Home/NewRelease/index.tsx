import { IRootState } from "app/store";
import Music from "components/Common/Music";
import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import Skeleton from "react-loading-skeleton";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const NewRelease = () => {
  const song = useSelector((state: IRootState) => state.song);
  console.log(song.songs);
  return (
    <div className="flex flex-col gap-8 mt-6">
      <div className="flex flex-row justify-between items-center">
        <h2 className="text-white text-3xl font-normal">New Releases</h2>
        <NavLink to={"/releases"}>
          <span className="flex flex-row items-center gap-2 text-lg group cursor-pointer">
            See all{" "}
            <BsArrowRightShort className="text-2xl group-hover:text-[#25A56A]" />
          </span>
        </NavLink>
      </div>
      <div className="grid grid-cols-6 gap-8">
        {song.loading ? (
          <>
            <Skeleton height={"200px"} />
            <Skeleton height={"200px"} />
            <Skeleton height={"200px"} />
          </>
        ) : (
          song.songs.map((song, index) => (
            <Music id={song._id} song={song} key={index} />
          ))
        )}
      </div>
    </div>
  );
};

export default NewRelease;
