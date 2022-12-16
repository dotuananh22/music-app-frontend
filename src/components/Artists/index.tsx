/* eslint-disable jsx-a11y/anchor-is-valid */
import Artist from "components/Common/Artist";
import BreadCrumb from "components/Common/BreadCrumb";
import Pagination from "components/Common/Pagination";
import SubNavBar from "components/Common/SubNavBar";
import React from "react";

const Artists = () => {
  return (
    <div className="flex flex-col gap-6">
      <BreadCrumb path="/" baseAddress="Home" mainAddress="Artists" />
      <div className="flex flex-col gap-8 mt-6">
        <h2 className="text-4xl text-white">Artists</h2>
        <SubNavBar />
        <div className="flex flex-col gap-4 items-center">
          <div className="grid grid-cols-6 gap-8">
            <Artist />
            <Artist />
            <Artist />
            <Artist />
            <Artist />
            <Artist />
            <Artist />
            <Artist />
            <Artist />
            <Artist />
            <Artist />
            <Artist />
          </div>
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default Artists;
