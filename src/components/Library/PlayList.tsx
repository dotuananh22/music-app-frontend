import React from "react";
import { BsFillPlayFill } from "react-icons/bs";
import noImage from "assets/images/no-image.png";
import { useNavigate } from "react-router-dom";

interface PlaylistProps {
  id: string;
  image: string;
  name: string;
}

const PlayList = (props: PlaylistProps) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-3 p-4 rounded-md bg-[#202020] hover:bg-[#282828] group overflow-hidden h-[250px]">
      <div className="w-full relative">
        <img
          src={props.image || noImage}
          alt="playlist"
          className="rounded-md w-full h-44 object-cover"
          onError={(e) => {
            e.currentTarget.src = noImage;
          }}
        />
        <button
          className={`w-[50px] h-[50px] hover:scale-105 rounded-full bg-[#1ED760] place-items-center absolute right-2 bottom-0 group-hover:bottom-2 group-hover:opacity-100 grid opacity-0 transition-all duration-200 ease-in-out`}
          onClick={() => {
            navigate(`/playlist/${props.id}`);
          }}
        >
          <BsFillPlayFill className="text-black text-3xl" />
        </button>
      </div>
      <div>
        <h6 className="text-white text-lg font-semibold truncate">
          {props.name}
        </h6>
      </div>
    </div>
  );
};

export default PlayList;
