import Artist from "components/Common/Artist";
import React from "react";
import { BsArrowRightShort } from "react-icons/bs";

const Artists = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-row justify-between items-center">
        <h2 className="text-white text-3xl">New Releases</h2>
        <span className="flex flex-row items-center gap-2 text-lg hover:text-white group">
          See all{" "}
          <BsArrowRightShort className="text-2xl group-hover:text-[#25A56A]" />
        </span>
      </div>
      <div className="grid grid-cols-6 gap-8">
        <Artist />
      </div>
    </div>
  );
};

export default Artists;
