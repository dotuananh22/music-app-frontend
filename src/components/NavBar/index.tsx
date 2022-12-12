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
import TestImage from "../../assets/images/anh-son-tung.jfif";
import { RiVolumeMuteLine, RiVolumeUpLine } from "react-icons/ri";
import { IoPauseOutline, IoPlayOutline } from "react-icons/io5";
// @ts-ignore
// import TestAudio from "../../assets/audio/TestAudio.mp3";

const NavBar = () => {
  const [playClicked, setPlayClicked] = useState(false);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const [audio] = useState(
    new Audio(
      "http://blast.volkovdesign.com/audio/12071151_epic-cinematic-trailer_by_audiopizza_preview.mp3"
    )
  );

  useEffect(() => {
    audio.addEventListener("ended", () => setPlayClicked(false));
    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("loadedmetadata", () => {
      audio.volume = volume;
      setDuration(audio.duration);
    });
    return () => {
      audio.removeEventListener("ended", () => setPlayClicked(false));
    };
  }, []);

  useEffect(() => {
    playClicked ? audio.play() : audio.pause();
  }, [playClicked]);

  const handleTimeUpdate = () => {
    setTime(audio.currentTime);
    if (audio.currentTime >= audio.duration) {
      audio.currentTime = 0;
      setPlayClicked(false);
    }
  };

  const convertTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time - minutes * 60);
    const zero = seconds < 10 ? "0" : "";
    return minutes + ":" + zero + seconds;
  };

  const onChangeVolume = (e: any) => {
    audio.volume = e.target.value;
    setVolume(e.target.value);
  };

  return (
    <Fragment>
      <nav className="h-full w-[300px] fixed border border-[#222227] z-20 bg-[#16151A] pl-[30px]">
        <div className="h-[70px] flex items-center border border-[#222227]">
          <img src={MainLogo} alt="main-logo" className="h-[40px]" />
        </div>
        <div className="pt-[30px] flex flex-col gap-6">
          <div className="flex flex-row gap-3 items-center text-lg">
            <BiHomeAlt className="text-2xl" />
            <span>Home</span>
          </div>
          <div className="flex flex-row gap-3 items-center text-lg">
            <MdOutlinePeopleAlt className="text-2xl" />
            <span>Artists</span>
          </div>
          <div className="flex flex-row gap-3 items-center text-lg">
            <HiOutlineMusicNote className="text-2xl" />
            <span>Releases</span>
          </div>
          <div className="flex flex-row gap-3 items-center text-lg">
            <GoCalendar className="text-2xl" />
            <span>Releases</span>
          </div>
          <div className="flex flex-row gap-3 items-center text-lg">
            <HiOutlineMicrophone className="text-2xl" />
            <span>Podcasts</span>
          </div>
          <div className="flex flex-row gap-3 items-center text-lg">
            <BiHeart className="text-2xl" />
            <span>My Favourite</span>
          </div>
        </div>
      </nav>
      <nav className="flex flex-row justify-between px-8 pl-[316px] h-[70px] py-4 border fixed border-[#222227] w-full z-10 bg-[#16151A]">
        <div className="flex flex-row gap-6 items-center">
          <p>Profile</p>
          <p>About</p>
          <p>Contact</p>
        </div>
        <div className="relative flex items-center">
          <input
            type="text"
            className="bg-[#222227] py-2 px-4 pr-20 rounded-lg"
            placeholder="Artist, track or podcast"
          />
          <FiSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-xl hover:text-[#25A56A] cursor-pointer" />
        </div>
        <NavLink to={""} className="flex flex-row gap-2 items-center group">
          <p>Sign in</p>
          <HiOutlineLogin className="text-2xl group-hover:text-[#25A56A]" />
        </NavLink>
      </nav>
      <nav className="fixed bottom-0 w-full z-30 h-[100px] px-[30px] border border-[#222227] bg-[#16151A] flex flex-row justify-between items-center">
        <div className="basis-1/3">
          <div className="flex flex-row gap-4 items-center">
            <img src={TestImage} alt="test-image" className="w-[58px]" />
            <div>
              <h3 className="text-white font-semibold">
                Ấn nút nhớ ... thả giấc mơ
              </h3>
              <span className="text-xs">Sơn Tùng MTP</span>
            </div>
          </div>
        </div>
        <div className={"flex flex-col gap-2 items-center basis-1/3 text-xl"}>
          <div className={"flex flex-row gap-8"}>
            <RxTrackPrevious />
            {!playClicked ? (
              <IoPlayOutline onClick={(e) => setPlayClicked(!playClicked)} />
            ) : (
              <IoPauseOutline onClick={(e) => setPlayClicked(!playClicked)} />
            )}
            <RxTrackNext />
          </div>
          <div className="w-full flex flex-row items-center gap-2 text-sm">
            <span>{convertTime(time)}</span>
            <input
              type="range"
              min={0}
              max={duration}
              value={time}
              // pause audio when dragging
              onMouseDown={(e) => {
                audio.pause();
                setPlayClicked(false);
              }}
              onChange={(e) => {
                console.log(e.target.value);
                setTime(parseFloat(e.target.value));
                audio.currentTime = parseFloat(e.target.value);
              }}
              // play audio when dragging is done
              onMouseUp={(e) => {
                audio.play();
                setPlayClicked(true);
              }}
              className="w-full h-1 bg-[#25A56A]"
            />
            <span>{convertTime(duration)}</span>
          </div>
        </div>
        <div className="basis-1/3 flex flex-row justify-end items-center gap-4 text-xl">
          {volume !== 0 ? <RiVolumeUpLine /> : <RiVolumeMuteLine />}
          <input
            type={"range"}
            min={0}
            max={1}
            step={0.01}
            className={"h-1"}
            defaultValue={0.5}
            onChange={onChangeVolume}
          />
        </div>
      </nav>
    </Fragment>
  );
};

export default NavBar;
