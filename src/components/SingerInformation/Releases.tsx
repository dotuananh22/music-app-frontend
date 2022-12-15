/* eslint-disable jsx-a11y/anchor-is-valid */
import Music from "components/Common/Music";
import Pagination from "components/Common/Pagination";
import React from "react";

const Releases = () => {
  return (
    <div className="flex flex-col gap-10 mt-6 pt-4 border-t border-[#222227]">
      <div className="flex flex-col gap-8 mt-2">
        <h2 className="text-4xl text-white">Releases</h2>
        <div className="flex flex-col gap-4 items-center">
          <div className="grid grid-cols-6 gap-8">
            <Music />
            <Music />
            <Music />
            <Music />
            <Music />
            <Music />
            <Music />
            <Music />
            <Music />
            <Music />
            <Music />
            <Music />
          </div>
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default Releases;
