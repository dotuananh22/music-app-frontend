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
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, IRootState } from "app/store";
import joinSingers from "utils/joinSingers";
import { ImSpinner2 } from "react-icons/im";
import ReactPlayer from "react-player";
import { BsExclamation } from "react-icons/bs";
import { setIndexListeningSong } from "features/song/songSlice";

const BottomMusicBar = () => {
  const song = useSelector((state: IRootState) => state.song);
  const [playClicked, setPlayClicked] = useState(false);
  const [repeat, setRepeat] = useState(false);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const [error, setError] = useState(true);
  const [index, setIndex] = useState(-1);
  const [audioKey, setAudioKey] = useState(0);
  const [loadingAudio, setLoadingAudio] = useState(false);
  const audioRef = useRef<ReactPlayer>(null);
  const [playlist, setPlaylist] = useState<string[]>([]);
  const dispatch = useDispatch<AppDispatch>();
  // const [audio] = useState(new Audio(song.song.chosenSong?.songUrl));

  // set index = indexListChosenSong
  useEffect(() => {
    setAudioKey(audioKey + 1);
    setPlaylist(song.song.listChosenSong.map((song) => song.songUrl));
    setIndex(song.song.indexListChosenSong);
    setLoadingAudio(true);
    // audio.load();
    // audio.src = song.song.chosenSong?.songUrl || "";
    // audio.addEventListener("canplaythrough", () => {
    //   setLoadingAudio(false);
    //   audio.duration && audio.play();
    //   audio.duration && setPlayClicked(true);
    // });
    // audio.addEventListener("error", () => setLoadingAudio(false));
    // setDuration(audio.duration ? audio.duration : 0);
    // return () => {
    //   audio.removeEventListener("canplaythrough", () => setLoadingAudio(false));
    // };
  }, [song.song.listChosenSong, song.song.indexListChosenSong]);

  // set time = 0 when index changes
  useEffect(() => {
    setTime(0);
  }, [index]);

  useEffect(() => {
    const repeatStorage = localStorage.getItem("repeat");
    const volumeStorage = localStorage.getItem("volume");
    setVolume(volumeStorage ? parseFloat(volumeStorage) : 0.5);
    setRepeat(repeatStorage ? repeatStorage === "true" : false);
    // audio.loop = repeatStorage ? repeatStorage === "true" : false;
    // // audio.addEventListener("ended", () => setPlayClicked(false));
    // audio.addEventListener("timeupdate", handleTimeUpdate);
    // audio.addEventListener("loadedmetadata", () => {
    //   audio.volume = volume < 0 ? 0 : volume;
    //   setDuration(audio.duration);
    // });
    // return () => {
    //   audio.removeEventListener("ended", () => setPlayClicked(false));
    // };
  }, []);

  // useEffect(() => {
  //   playClicked ? audio.play() : audio.pause();
  // }, [playClicked]);

  // const handleTimeUpdate = () => {
  //   setTime(audio.currentTime);
  //   if (audio.currentTime >= audio.duration) {
  //     audio.currentTime = 0;
  //     setPlayClicked(repeat);
  //   }
  // };

  const convertTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time - minutes * 60);
    const zero = seconds < 10 ? "0" : "";
    return minutes + ":" + zero + seconds;
  };

  const onChangeVolume = (e: any) => {
    audioRef.current?.setState({ volume: e.target.value });
    setVolume(e.target.value);
    localStorage.setItem("volume", e.target.value);
  };

  const setUnmute = () => {
    // audi.volume = -volume === 0.0 ? 0.5 : -volume;
    audioRef.current?.setState({ volume: -volume === 0.0 ? 0.5 : -volume });
    setVolume(-volume === 0.0 ? 0.5 : -volume);
    localStorage.setItem(
      "volume",
      (-volume === 0.0 ? 0.5 : -volume).toString()
    );
  };

  const setMute = () => {
    setVolume(-volume);
    // audio.volume = 0;
    audioRef.current?.setState({ volume: 0 });
    localStorage.setItem("volume", (-volume).toString());
  };

  return (
    <nav className="fixed bottom-0 w-full z-30 h-[100px] px-[30px] border border-[#222227] bg-[#16151A] flex flex-row justify-between items-center">
      <div className="basis-1/3">
        <div className="flex flex-row gap-4 items-center">
          <img
            src={
              index !== -1 ? song.song.listChosenSong[index]?.imageUrl : noImage
            }
            alt="test"
            className={`w-[58px] h-[58px] ${
              !loadingAudio && !error && playClicked && "animate-spin-slow"
            } rounded-full`}
            onError={(e) => {
              e.currentTarget.src = noImage;
            }}
          />
          <div>
            <h3 className="text-white font-semibold">
              {index !== -1 && song.song.listChosenSong[index]?.name}
            </h3>
            <span className="text-xs">
              {index !== -1 &&
                joinSingers(song.song.listChosenSong[index]?.singers || [])}
            </span>
          </div>
        </div>
      </div>
      <div className={"flex flex-col gap-2 items-center basis-1/3 text-xl"}>
        <div className={"flex flex-row gap-8 items-center"}>
          <FaRandom className="w-[20px] h-[20px] cursor-pointer hover:text-[#25A56A]" />
          <MdSkipPrevious
            className="w-[32px] h-[32px] cursor-pointer hover:text-[#25A56A]"
            onClick={() => {
              index - 1 >= 0 && setLoadingAudio(true);
              index - 1 >= 0 && setTime(0);
              setIndex(index - 1 >= 0 ? index - 1 : playlist.length - 1);
              setLoadingAudio(true);
              setError(false);
            }}
          />
          {!playClicked || loadingAudio || error ? (
            <div
              className="w-[36px] h-[36px] rounded-full bg-white grid place-items-center cursor-pointer"
              onClick={(e) => setPlayClicked(!playClicked)}
            >
              {error ? (
                <BsExclamation className="text-[#FF9494] text-4xl" />
              ) : !loadingAudio ? (
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
          <MdSkipNext
            className="w-[32px] h-[32px] cursor-pointer hover:text-[#25A56A]"
            onClick={() => {
              index + 1 !== playlist.length && setLoadingAudio(true);
              index + 1 !== playlist.length && setTime(0);
              setIndex(index + 1 === playlist.length ? 0 : index + 1);
              setLoadingAudio(true);
              setError(false);
            }}
          />
          <RiRepeat2Fill
            className={`w-[22px] h-[22px] cursor-pointer hover:text-[#25A56A] ${
              repeat && " text-[#25A56A]"
            }`}
            onClick={() => {
              // audio.loop = !repeat;
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
              // audio.pause();
              setPlayClicked(false);
            }}
            onChange={(e) => {
              setTime(parseFloat(e.target.value));
              // set current time of audio
              audioRef.current?.seekTo(parseFloat(e.target.value));
              // audio.currentTime = parseFloat(e.target.value);
            }}
            // play audio when dragging is done
            onMouseUp={(e) => {
              // audio.play();
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
        <ReactPlayer
          url={playlist[index]}
          playing={playClicked}
          key={audioKey}
          onError={(e) => {
            playlist.length > 1 && setAudioKey(audioKey + 1);
            setLoadingAudio(false);
            setError(true);
            playlist.length > 1 &&
              setIndex(index + 1 === playlist.length ? 0 : index + 1);
            setDuration(0);
            setTime(0);
            audioRef.current?.seekTo(0);
            setPlayClicked(false);
          }}
          // set on loading
          ref={audioRef}
          width={0}
          height={0}
          volume={volume < 0 ? 0 : volume}
          onReady={(e) => {
            setPlayClicked(true);
            setDuration(e.getDuration());
            setLoadingAudio(false);
            setError(false);
            index !== -1 &&
              index < playlist.length &&
              dispatch(setIndexListeningSong(index));
          }}
          onProgress={(e) => {
            setTime(e.playedSeconds);
            console.log("progress");
          }}
          loop={repeat}
          onEnded={() => {
            if (playlist.length > 1) {
              setAudioKey(audioKey + 1);
              setTime(0);
              if (index + 1 === playlist.length) {
                setLoadingAudio(true);
                setIndex(0);
                // pause audio
                setPlayClicked(false);
              } else {
                setLoadingAudio(true);
                setIndex(index + 1);
              }
            } else {
              setPlayClicked(false);
            }
          }}
        />
      </div>
    </nav>
  );
};

export default BottomMusicBar;

// how to hash tailwindcss classes in React
