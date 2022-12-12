import React, { Fragment, useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import {
  HiOutlineLogin,
  HiOutlineMicrophone,
  HiOutlineMusicNote,
  HiOutlinePlay,
  HiPlay,
} from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { BiHeart, BiHomeAlt } from "react-icons/bi";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { GoCalendar } from "react-icons/go";
import { BsPlay } from "react-icons/bs";
import MainLogo from "../../assets/images/logo/main-logo.png";
import { RxTrackNext, RxTrackPrevious } from "react-icons/rx";
// @ts-ignore
import { RiVolumeMuteLine, RiVolumeUpLine } from "react-icons/ri";
import { IoPauseOutline, IoPlayOutline } from "react-icons/io5";
import LeftNavBar from "./LeftNavBar";
import TopNavBar from "./TopNavBar";
import BottomMusicBar from "./BottomMusicBar";
// @ts-ignore
// import TestAudio from "../../assets/audio/TestAudio.mp3";

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
