import React, { useEffect } from "react";
import Banner from "assets/images/banner/banner1.jpg";
import { BsFillCheckCircleFill, BsFillPlayFill } from "react-icons/bs";
import { FiMoreHorizontal } from "react-icons/fi";
import noImage from "assets/images/no-image.png";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, IRootState } from "app/store";
import { useParams } from "react-router-dom";
import singerThunk from "features/singer/singerThunk";
import moment from "moment";

const Information = () => {
  const dispatch = useDispatch<AppDispatch>();
  const singer = useSelector(
    (state: IRootState) => state.singer.singer.getOneSinger
  );
  const param = useParams();

  useEffect(() => {
    dispatch(singerThunk.getOneSinger(param.id as string));
  }, [dispatch]);
  return (
    <div>
      <div className="h-96 overflow-hidden flex flex-row items-center mb-8 border border-[#222227]">
        <div className="basis-1/4 flex flex-col gap-2 items-center text-white">
          <div className="flex flex-col gap-3 items-center">
            <img
              src={singer?.imageUrl || noImage}
              alt="profile"
              className="w-32 h-32 rounded-full"
              onError={(e) => {
                e.currentTarget.src = noImage;
              }}
            />
            <h2 className="text-base uppercase font-semibold flex flex-row items-center gap-1.5">
              {singer?.nickname}{" "}
              {singer?.tick && (
                <BsFillCheckCircleFill className="text-[#5489F2] text-sm" />
              )}
            </h2>
          </div>
          <div className="text-center text-sm mt-4">
            <p>Sinh nhật: {moment(singer?.birthday).format("DD/MM/YYYY")}</p>
            <p>Giới tính: {singer?.gender !== 0 ? "Nữ" : "Nam"}</p>
            <p>Quốc gia: {singer?.country}</p>
          </div>
          <div className="text-xl mt-8">
            <span className="font-semibold">{singer?.follower}</span> followers
          </div>
        </div>
        <div className="basis-3/4">
          <img
            src={singer?.imageCover || noImage}
            alt="Banner"
            className="w-full"
            onError={(e) => {
              e.currentTarget.src = noImage;
            }}
          />
        </div>
      </div>
      <div className="flex flex-row gap-10 items-center">
        <button
          className={`w-[50px] h-[50px] rounded-full bg-[#1ED760] grid place-items-center hover:scale-110 transition-all duration-200 ease-in-out`}
        >
          <BsFillPlayFill className="text-black text-3xl" />
        </button>
        <button
          className={`w-auto h-[28px] text-sm rounded-sm border border-white hover:bg-[#222227] transition-all duration-200 ease-in-out`}
        >
          <span className="px-6 text-sm font-semibold">FOLLOW</span>
        </button>
        <FiMoreHorizontal className="cursor-pointer text-2xl" />
      </div>
      <div className="flex flex-col gap-6 py-10">
        <h2 className="text-4xl text-white">Bio</h2>
        <p className="text-justify">{singer?.bio}</p>
      </div>
    </div>
  );
};

export default Information;
