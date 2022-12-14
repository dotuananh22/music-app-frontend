/* eslint-disable jsx-a11y/anchor-is-valid */
import Music from "components/Common/Music";
import BreadCrumb from "components/Common/BreadCrumb";
import Pagination from "components/Common/Pagination";
import React from "react";
import SubNavBar from "components/Common/SubNavBar";
import NewSingles from "./NewSingles";

const Releases = () => {
  return (
    <div className="flex flex-col gap-10">
      <BreadCrumb path="/" baseAddress="Home" mainAddress="Releases" />
      <div className="flex flex-col gap-8 mt-6">
        <h2 className="text-4xl text-white">Releases</h2>
        <SubNavBar />
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
      <NewSingles />
    </div>
  );
};

export default Releases;
