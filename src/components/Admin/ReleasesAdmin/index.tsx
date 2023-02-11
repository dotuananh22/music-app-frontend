import { AppDispatch, IRootState } from "app/store";

import colors from "constants/color";
import songAdminThunk from "features/admin/song/songThunk";
import { useState, useEffect } from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";
import Skeleton from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";
import Admin from "..";
import SubAllReleases from "./SubAllReleases";

const ReleasesAdmin = () => {
  const [indexDropdown, setIndexDropdown] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const songAdmin = useSelector((state: IRootState) => state.adminSong);

  const onShowModal = () => {
    setShowModal(true);
  };

  useEffect(() => {
    dispatch(
      songAdminThunk.getAllSongs({
        limit: 10,
        skip: 0,
        sort: ["publishTime"],
        order: [-1],
      })
    );
  }, [dispatch]);

  return (
    <div className="flex flex-col gap-6">
      <Admin active="Releases" />
      <button
        className={`mr-auto px-4 py-1 text-base font-semibold hover:bg-[#222227] bg-[${colors.greenColor}] rounded-lg delay-100 transition-all ease-linear`}
        onClick={onShowModal}
      >
        Insert
      </button>
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
          className="relative max-w-4xl max-h-screen w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 rounded-lg bg-[#2C2F32] text-white flex flex-col gap-4"
          id="modalContent"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-xl font-semibold">Insert Release</h2>
            <button onClick={() => setShowModal(false)}>
              <FaTimes className="text-xl m-1" />
            </button>
          </div>
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="name">Name</label>
              <input
                className="text-black border-none outline-none"
                type="text"
                name="name"
                placeholder="Release name"
              ></input>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="songTime">Song time</label>
              <input
                className="text-black border-none outline-none"
                type="number"
                name="songTime"
                placeholder="Song time"
              ></input>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="singers">Singers</label>
              <input
                className="text-black border-none outline-none"
                type="text"
                name="singers"
                placeholder="Singers"
              ></input>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="publishTime">Publish Time</label>
              <input
                className="text-black border-none outline-none"
                type="date"
                name="publishTime"
                placeholder="Publish Time"
              ></input>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="songUrl">Song Url</label>
              <input
                className="text-black border-none outline-none"
                type="text"
                name="songUrl"
                placeholder="Song Url"
              ></input>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="lyric">Lyric</label>
              <textarea
                className="h-10 min-h-[40px] max-h-28 text-black border-none outline-none"
                name="lyric"
                placeholder="Lyric"
              ></textarea>
            </div>
            <div className="flex flex-col gap-2">
              <label className="block" htmlFor="imageUrl">
                Image
              </label>
              <input
                className="block w-full text-[#C0C0C0] bg-[#222227] border-none rounded-lg cursor-pointer focus:outline-none"
                id="imageUrl"
                name="imageUrl"
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
              INSERT
            </button>
          </div>
        </div>
      </div>
      <table className="table-auto w-full">
        <thead>
          <tr className="border-b border-[#222227]">
            <th className="w-[20px] p-2"></th>
            <th className="text-left w-1/2 p-2 text-sm">TITLE</th>
            <th className="p-2 text-left text-sm">DATE ADDED</th>
            <th className="w-[100px] p-2 text-lg">
              <AiOutlineClockCircle className="m-auto" />
            </th>
            <th className="p-2 w-[30px]"></th>
          </tr>
        </thead>
        <tbody>
          {songAdmin.loading.allSongs && !songAdmin.songs ? (
            <>
              <tr>
                <td colSpan={5}>
                  <Skeleton height={"52px"} />
                </td>
              </tr>
              <tr>
                <td colSpan={5}>
                  <Skeleton height={"52px"} />
                </td>
              </tr>
              <tr>
                <td colSpan={5}>
                  <Skeleton height={"52px"} />
                </td>
              </tr>
            </>
          ) : (
            songAdmin.songs.map((song, index) => (
              <SubAllReleases
                song={song}
                id={song._id}
                rank={index + 1}
                indexDropdown={indexDropdown}
                setIndexDropdown={setIndexDropdown}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ReleasesAdmin;
