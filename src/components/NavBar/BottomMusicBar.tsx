import React, { useEffect, useRef, useState } from "react";
import { GiPauseButton } from "react-icons/gi";
import { FaPlay, FaRandom } from "react-icons/fa";
import {
  RiRepeat2Fill,
  RiVolumeMuteLine,
  RiVolumeUpLine,
} from "react-icons/ri";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import noImage from "assets/images/no-image.png";
import { useSelector } from "react-redux";
import { IRootState } from "app/store";
import joinSingers from "utils/joinSingers";
import Skeleton from "react-loading-skeleton";
import { ImSpinner2 } from "react-icons/im";

const BottomMusicBar = () => {
  const song = useSelector((state: IRootState) => state.song);
  const [playClicked, setPlayClicked] = useState(false);
  const [repeat, setRepeat] = useState(false);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const [loadingAudio, setLoadingAudio] = useState(false);
  const [audio] = useState(new Audio(song.song.chosenSong?.songUrl));

  useEffect(() => {
    setPlayClicked(false);
    setLoadingAudio(true);
    audio.load();
    audio.src = song.song.chosenSong?.songUrl || "";
    audio.addEventListener("canplaythrough", () => {
      setLoadingAudio(false);
      audio.duration && audio.play();
      audio.duration && setPlayClicked(true);
    });
    audio.addEventListener("error", () => setLoadingAudio(false));
    setDuration(audio.duration ? audio.duration : 0);
    return () => {
      audio.removeEventListener("canplaythrough", () => setLoadingAudio(false));
    };
  }, [song.song.chosenSong?.songUrl]);

  useEffect(() => {
    const repeatStorage = localStorage.getItem("repeat");
    const volumeStorage = localStorage.getItem("volume");
    setVolume(volumeStorage ? parseFloat(volumeStorage) : 0.5);
    setRepeat(repeatStorage ? repeatStorage === "true" : false);
    audio.loop = repeatStorage ? repeatStorage === "true" : false;
    // audio.addEventListener("ended", () => setPlayClicked(false));
    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("loadedmetadata", () => {
      audio.volume = volume < 0 ? 0 : volume;
      setDuration(audio.duration);
    });
    // return () => {
    //   audio.removeEventListener("ended", () => setPlayClicked(false));
    // };
  }, []);

  useEffect(() => {
    playClicked ? audio.play() : audio.pause();
  }, [playClicked]);

  const handleTimeUpdate = () => {
    setTime(audio.currentTime);
    if (audio.currentTime >= audio.duration) {
      audio.currentTime = 0;
      setPlayClicked(repeat);
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
    localStorage.setItem("volume", e.target.value);
  };

  const setUnmute = () => {
    audio.volume = -volume === 0.0 ? 0.5 : -volume;
    setVolume(-volume === 0.0 ? 0.5 : -volume);
    localStorage.setItem("volume", audio.volume.toString());
  };

  const setMute = () => {
    setVolume(-volume);
    audio.volume = 0;
    localStorage.setItem("volume", audio.volume.toString());
  };

  return (
    <nav className="fixed bottom-0 w-full z-30 h-[100px] px-[30px] border border-[#222227] bg-[#16151A] flex flex-row justify-between items-center">
      <div className="basis-1/3">
        <div className="flex flex-row gap-4 items-center">
          <img
            src={song.song.chosenSong?.imageUrl || noImage}
            alt="test"
            className="w-[58px]"
            onError={(e) => {
              e.currentTarget.src = noImage;
            }}
          />
          <div>
            <h3 className="text-white font-semibold">
              {song.song.chosenSong?.name}
            </h3>
            <span className="text-xs">
              {joinSingers(song.song.chosenSong?.singers || [])}
            </span>
          </div>
        </div>
      </div>
      <div className={"flex flex-col gap-2 items-center basis-1/3 text-xl"}>
        <div className={"flex flex-row gap-8 items-center"}>
          <FaRandom className="w-[20px] h-[20px] cursor-pointer hover:text-[#25A56A]" />
          <MdSkipPrevious className="w-[32px] h-[32px] cursor-pointer hover:text-[#25A56A]" />
          {!playClicked || loadingAudio ? (
            <div
              className="w-[36px] h-[36px] rounded-full bg-white grid place-items-center cursor-pointer"
              onClick={(e) => setPlayClicked(!playClicked)}
            >
              {!loadingAudio ? (
                <FaPlay className="w-[14px] h-[14px] text-black" />
              ) : (
                <ImSpinner2 className="text-[#25A56A] animate-spin" />
              )}
            </div>
          ) : (
            <div
              className="w-[36px] h-[36px] rounded-full bg-white grid place-items-center cursor-pointer"
              onClick={(e) => setPlayClicked(!playClicked)}
            >
              <GiPauseButton className="w-[18px] h-[18px] text-black" />
            </div>
          )}
          <MdSkipNext className="w-[32px] h-[32px] cursor-pointer hover:text-[#25A56A]" />
          <RiRepeat2Fill
            className={`w-[22px] h-[22px] cursor-pointer hover:text-[#25A56A] ${
              repeat && " text-[#25A56A]"
            }`}
            onClick={() => {
              audio.loop = !repeat;
              setRepeat(!repeat);
              localStorage.setItem("repeat", (!repeat).toString());
            }}
          />
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
              setTime(parseFloat(e.target.value));
              audio.currentTime = parseFloat(e.target.value);
            }}
            // play audio when dragging is done
            onMouseUp={(e) => {
              audio.play();
              setPlayClicked(true);
            }}
            disabled={duration === 0 || loadingAudio}
            className="w-full h-1 bg-[#25A56A] cursor-pointer"
          />
          <span>{convertTime(duration)}</span>
        </div>
      </div>
      <div className="basis-1/3 flex flex-row justify-end items-center gap-4 text-xl">
        {volume > 0 ? (
          <RiVolumeUpLine
            className="cursor-pointer hover:text-[#25A56A] delay-50 transition ease-in-out"
            onClick={setMute}
          />
        ) : (
          <RiVolumeMuteLine
            className="cursor-pointer hover:text-[#25A56A] delay-50 transition ease-in-out"
            onClick={setUnmute}
          />
        )}
        <input
          type={"range"}
          min={0}
          max={1}
          value={volume}
          step={0.01}
          className={"h-1 cursor-pointer"}
          onChange={onChangeVolume}
        />
      </div>
    </nav>
  );
};

export default BottomMusicBar;

// how to hash tailwindcss classes in React
