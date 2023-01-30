import React, { useState } from "react";
import noImage from "assets/images/no-image.png";
import { FiMoreHorizontal } from "react-icons/fi";
import moment from "moment";
import { FaTimes } from "react-icons/fa";
import { BsFillCheckCircleFill } from "react-icons/bs";

interface SubFavouriteSongsProps {
  id: string;
  rank: number;
  indexDropdown: number;
  setIndexDropdown: React.Dispatch<React.SetStateAction<number>>;
}

const SubAllArtists = (props: SubFavouriteSongsProps) => {
  const [showModal, setShowModal] = useState(false);

  const onShowModal = () => {
    setShowModal(true);
  };

  return (
    <>
      <tr
        className="hover:bg-[#2C2F32] cursor-pointer group"
        onMouseLeave={() => {
          props.setIndexDropdown(0);
        }}
      >
        <td className="p-2 rounded-l-md">{props.rank}</td>
        <td className="flex flex-row gap-4 items-center p-2">
          <img
            src={
              "https://firebasestorage.googleapis.com/v0/b/music2507-4a63a.appspot.com/o/songs%2FChungTaCuaHienTai.jpg?alt=media&token=333ffb63-c912-4df4-ba5f-cb5fa48d6100" ||
              noImage
            }
            alt="music"
            className="h-10 w-10"
            onError={(e) => {
              e.currentTarget.src = noImage;
            }}
          />
          <div>
            <p className={`text-white font-semibold truncate w-[300px]`}>
              Nguyễn Thanh Tùng
            </p>
            <p
              className={`text-[#c0c0c0] truncate w-[300px] flex flex-row gap-2 items-center`}
            >
              Sơn Tùng MTP
              <BsFillCheckCircleFill className="text-[#5489F2] text-sm" />
            </p>
          </div>
        </td>
        <td className="p-2">
          {moment("2001-02-22T08:51:52.799Z").format("DD/MM/YYYY")}
        </td>
        <td className="text-center p-2">
          <span className="text-center">2,000,000</span>
        </td>
        <td className="pr-2 py-2 rounded-r-md">
          <div className="justify-end items-center flex">
            <div className="hidden group-hover:inline-block relative">
              <FiMoreHorizontal
                className="text-xl cursor-pointer"
                onClick={(e) => {
                  if (props.indexDropdown !== props.rank)
                    props.setIndexDropdown(props.rank);
                  else props.setIndexDropdown(0);
                  e.stopPropagation();
                }}
              />
              <ul
                className={`absolute right-0 bg-[#222227] w-[84px] rounded-sm text-sm ${
                  props.indexDropdown !== props.rank && "hidden"
                }`}
              >
                <li
                  className="py-3 px-4 hover:bg-gray-700 dark:hover:bg-gray-600 cursor-pointer"
                  onClick={() => onShowModal()}
                >
                  Update
                </li>
                <li className="py-3 px-4 hover:bg-gray-700 dark:hover:bg-gray-600 cursor-pointer">
                  Delete
                </li>
              </ul>
            </div>
          </div>
        </td>
      </tr>
      <div
        id="defaultModal"
        tabIndex={-1}
        aria-hidden="true"
        className={`${
          showModal ? "fixed" : "hidden"
        } top-0 left-0 right-0 bottom-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full bg-black/20`}
        onClick={(e) => {
          setShowModal(false);
        }}
      >
        <div
          className="relative max-w-5xl max-h-screen w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 rounded-lg bg-[#2C2F32] text-white flex flex-col gap-4"
          id="modalContent"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-xl font-semibold">Update Artist</h2>
            <button onClick={() => setShowModal(false)}>
              <FaTimes className="text-xl m-1" />
            </button>
          </div>
          <div className="grid grid-cols-4 gap-4 mb-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="fullName">Full name</label>
              <input
                className="text-black border-none outline-none"
                type="text"
                name="fullName"
                placeholder="Full name"
              ></input>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="nickname">Nickname</label>
              <input
                className="text-black border-none outline-none"
                type="text"
                name="nickname"
                placeholder="Nickname"
              ></input>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="bio">Bio</label>
              <input
                className="text-black border-none outline-none"
                type="text"
                name="bio"
                placeholder="Bio"
              ></input>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="story">Story</label>
              <textarea
                className="h-10 min-h-[40px] max-h-28 text-black border-none outline-none"
                name="story"
                placeholder="Story"
              ></textarea>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="birthday">Birthday</label>
              <input
                className="text-black border-none outline-none"
                type="date"
                name="birthday"
              ></input>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="country">Country</label>
              <input
                className="text-black border-none outline-none"
                type="text"
                name="country"
                placeholder="Country"
              ></input>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="debutyear">Debut year</label>
              <input
                className="text-black border-none outline-none"
                type="number"
                name="debutyear"
                placeholder="Debut year"
              ></input>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="website">Website</label>
              <input
                className="text-black border-none outline-none"
                type="text"
                name="website"
                placeholder="Website"
              ></input>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="facebook">Facebook</label>
              <input
                className="text-black border-none outline-none"
                type="text"
                name="facebook"
                placeholder="Facebook"
              ></input>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="youtube">Youtube</label>
              <input
                className="text-black border-none outline-none"
                type="text"
                name="youtube"
                placeholder="Youtube"
              ></input>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="instagram">Instagram</label>
              <input
                className="text-black border-none outline-none"
                type="text"
                name="instagram"
                placeholder="Instagram"
              ></input>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="twitter">Twitter</label>
              <input
                className="text-black border-none outline-none"
                type="text"
                name="twitter"
                placeholder="Twitter"
              ></input>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="tick">Tick</label>
              <select className="text-black" id="tick" name="tick">
                <option value="false">False</option>
                <option value="true">True</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="gender">Gender</label>
              <select className="text-black" id="gender" name="gender">
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="block" htmlFor="avatar">
                Avatar
              </label>
              <input
                className="block w-full text-[#C0C0C0] bg-[#222227] border-none rounded-lg cursor-pointer focus:outline-none"
                id="avatar"
                name="avatar"
                type="file"
                accept="image/*"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="block" htmlFor="imageCover">
                Image cover
              </label>
              <input
                className="block w-full text-[#C0C0C0] bg-[#222227] border-none rounded-lg cursor-pointer focus:outline-none"
                id="imageCover"
                name="imageCover"
                type="file"
                accept="image/*"
              />
            </div>
          </div>
          <div className="flex justify-end">
            <button
              className="px-8 py-2 ml-auto bg-[#25A56A] border-transparent rounded-full font-semibold text-white text-sm transition ease-linear delay-50 hover:text-[#25A56A] hover:bg-[#222227]"
              type="submit"
            >
              UPDATE
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubAllArtists;
