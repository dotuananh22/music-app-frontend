import { IRootState } from "app/store";
import Artist from "components/Common/Artist";
import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

const Artists = () => {
  const singer = useSelector((state: IRootState) => state.singer);

  return (
    <div className="flex flex-col gap-8 mt-6">
      <div className="flex flex-row justify-between items-center">
        <h2 className="text-white text-3xl">Artists</h2>
        <NavLink to={"/artists"}>
          <span className="flex flex-row items-center gap-2 text-lg group cursor-pointer">
            See all{" "}
            <BsArrowRightShort className="text-2xl group-hover:text-[#25A56A]" />
          </span>
        </NavLink>
      </div>
      <div className="grid grid-cols-6 gap-8">
        {singer.loading ? (
          <>
            <Skeleton height={"200px"} />
            <Skeleton height={"200px"} />
            <Skeleton height={"200px"} />
          </>
        ) : (
          singer.singers.map((singer, index) => (
            <Artist id={singer._id} singer={singer} key={index} />
          ))
        )}

        {/* <Artist />
        <Artist />
        <Artist />
        <Artist />
        <Artist />
        <Artist />
        <Artist />
        <Artist />
        <Artist />
        <Artist />
        <Artist /> */}
      </div>
    </div>
  );
};

export default Artists;
