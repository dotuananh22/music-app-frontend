import React from "react";
import noImage from "assets/images/no-image.png";
import Singer from "types/singer/Singer";

interface ArtistProps {
  id: string;
  singer: Singer;
}

const Artist = (props: ArtistProps) => {
  return (
    <div className="flex flex-col gap-2 cursor-pointer group">
      <div
        className="relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:opacity-0 group-hover:before:opacity-100 
      group-hover:before:bg-gradient-to-t before:from-[#25A56A]/30 before:to-black/5 before:transition-all before:duration-500 before:ease-in-out overflow-hidden rounded-lg"
      >
        <img
          src={props.singer.imageUrl || noImage}
          alt="demo"
          onError={(e) => {
            e.currentTarget.src = noImage;
          }}
        />
      </div>
      <div>
        <h5 className="text-white text-base text-center group-hover:text-[#25A56A] transition-all duration-500 ease-in-out">
          {props.singer.nickname
            ? props.singer.nickname
            : props.singer.fullName}
        </h5>
      </div>
    </div>
  );
};

export default Artist;
