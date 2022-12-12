import React, { useEffect, useState } from "react";
import { IoPauseOutline, IoPlayOutline } from "react-icons/io5";
import { RiVolumeMuteLine, RiVolumeUpLine } from "react-icons/ri";
import { RxTrackNext, RxTrackPrevious } from "react-icons/rx";
// @ts-ignore
import TestImage from "../../assets/images/anh-son-tung.jfif";

const BottomMusicBar = () => {
  const [playClicked, setPlayClicked] = useState(false);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const [audio] = useState(
    new Audio(
      "https://firebasestorage.googleapis.com/v0/b/music2507-4a63a.appspot.com/o/songs%2FChungTaCuaHienTai.mp3?alt=media&token=fc4aa098-4ce9-4304-977a-b3737a011c6e"
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

  const setUnmute = () => {
    setVolume(0.5);
    audio.volume = 0.5;
  };

  const setMute = () => {
    setVolume(0);
    audio.volume = 0;
  };
  return (
    <nav className="fixed bottom-0 w-full z-30 h-[100px] px-[30px] border border-[#222227] bg-[#16151A] flex flex-row justify-between items-center">
      <div className="basis-1/3">
        <div className="flex flex-row gap-4 items-center">
          <img src={TestImage} alt="test-image" className="w-[58px]" />
          <div>
            <h3 className="text-white font-semibold">Chúng ta của hiện tại</h3>
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
        {volume != 0 ? (
          <RiVolumeUpLine onClick={setMute} />
        ) : (
          <RiVolumeMuteLine onClick={setUnmute} />
        )}
        <input
          type={"range"}
          min={0}
          max={1}
          value={volume}
          step={0.01}
          className={"h-1"}
          onChange={onChangeVolume}
        />
      </div>
    </nav>
  );
};

export default BottomMusicBar;
