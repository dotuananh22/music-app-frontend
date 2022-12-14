import React, { Fragment } from "react";
import LeftNavBar from "./LeftNavBar";
import TopNavBar from "./TopNavBar";
import BottomMusicBar from "./BottomMusicBar";
// @ts-ignore

const NavBar = () => {
  return (
    <Fragment>
      <LeftNavBar />
      <TopNavBar />
      <BottomMusicBar />
    </Fragment>
  );
};

export default NavBar;
