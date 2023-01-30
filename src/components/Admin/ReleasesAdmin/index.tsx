import colors from "constants/color";
import { useState } from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";
import Admin from "..";
import SubAllReleases from "./SubAllReleases";

const songs = [
  {
    _id: "6322e7a86671e669eda0462a",
    name: "Chúng ta của hiện tại",
    singers: [
      {
        _id: "638fe0178909719d8a30ab8e",
        nickname: "Sơn Tùng MTP",
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/music2507-4a63a.appspot.com/o/singers%2Fsontungmtp.jpg?alt=media&token=fe8d3382-5b84-4f40-a579-c7111eef7a18",
      },
    ],
    songTime: 286,
    publishTime: "2022-01-01T00:00:00.000Z",
    likes: 1000002,
    listens: 200087,
    downloads: 0,
    songUrl:
      "https://firebasestorage.googleapis.com/v0/b/music2507-4a63a.appspot.com/o/songs%2FChungTaCuaHienTai.mp3?alt=media&token=fc4aa098-4ce9-4304-977a-b3737a011c6e",
    mvUrl: "",
    deleted: false,
    createdAt: "2022-09-15T08:51:52.799Z",
    updatedAt: "2023-01-27T02:03:43.060Z",
    slug: "chung-ta-cua-hien-tai",
    __v: 0,
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/music2507-4a63a.appspot.com/o/songs%2FChungTaCuaHienTai.jpg?alt=media&token=333ffb63-c912-4df4-ba5f-cb5fa48d6100",
  },
  {
    _id: "6322e7ac6671e669eda0462d",
    name: "Waiting for you",
    singers: [
      {
        _id: "638fe0178909719d8a30ab8e",
        nickname: "Sơn Tùng MTP",
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/music2507-4a63a.appspot.com/o/singers%2Fsontungmtp.jpg?alt=media&token=fe8d3382-5b84-4f40-a579-c7111eef7a18",
      },
      {
        _id: "638ff35c259a9d01ff88c4d5",
        nickname: "VAnh",
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/music2507-4a63a.appspot.com/o/singers%2Fvanh.jpg?alt=media&token=c42480c6-0486-4095-a251-06601c017e63",
      },
    ],
    songTime: 305,
    publishTime: "2021-12-20T00:00:00.000Z",
    likes: 1000000,
    listens: 15000026,
    downloads: 0,
    songUrl:
      "https://firebasestorage.googleapis.com/v0/b/music2507-4a63a.appspot.com/o/songs%2FWaitingForYou.mp3?alt=media&token=65c6ab2f-f03f-4f80-b743-a0df22e15d8b",
    mvUrl: "",
    deleted: false,
    createdAt: "2022-09-15T08:51:56.233Z",
    updatedAt: "2023-01-27T01:53:06.615Z",
    slug: "chung-ta-cua-hien-tai-5LRuhCHgF",
    __v: 0,
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/music2507-4a63a.appspot.com/o/songs%2FWaitingForYou.jpg?alt=media&token=de215713-74c5-4e26-81e2-f0540f4765e6",
  },
  {
    _id: "6322e7d30537eccc3cbcc9a2",
    name: "Muộn rồi mà sao còn",
    singers: [
      {
        _id: "638ff35c259a9d01ff88c4d5",
        nickname: "VAnh",
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/music2507-4a63a.appspot.com/o/singers%2Fvanh.jpg?alt=media&token=c42480c6-0486-4095-a251-06601c017e63",
      },
    ],
    songTime: 310,
    publishTime: "1970-01-01T00:00:02.020Z",
    likes: 2500000,
    listens: 11000060,
    downloads: 0,
    songUrl:
      "https://firebasestorage.googleapis.com/v0/b/music2507-4a63a.appspot.com/o/songs%2FMuonRoiMaSaoCon.mp3?alt=media&token=31a387b4-3af9-409a-af66-f9e10727ae8c",
    mvUrl: "",
    deleted: false,
    createdAt: "2022-09-15T08:51:52.799Z",
    updatedAt: "2023-01-21T16:12:58.995Z",
    slug: "chung-ta-cua-hien-tai-aa",
    __v: 0,
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/music2507-4a63a.appspot.com/o/songs%2FMuonRoiMaSaoCon.png?alt=media&token=20d98e08-f605-4659-9cf4-823b31b68da4",
  },
  {
    _id: "6322e7d80537eccc3cbcc9a3",
    name: "Nơi này có anh",
    singers: [
      {
        _id: "638fe0178909719d8a30ab8e",
        nickname: "Sơn Tùng MTP",
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/music2507-4a63a.appspot.com/o/singers%2Fsontungmtp.jpg?alt=media&token=fe8d3382-5b84-4f40-a579-c7111eef7a18",
      },
    ],
    songTime: 308,
    publishTime: "2020-05-06T00:00:00.000Z",
    likes: 1500000,
    listens: 500030,
    downloads: 0,
    songUrl:
      "https://firebasestorage.googleapis.com/v0/b/music2507-4a63a.appspot.com/o/songs%2FNoiNayCoAnh.mp3?alt=media&token=c7ab85e9-21dc-4fd2-86e9-b43d8b076399",
    mvUrl: "",
    deleted: false,
    createdAt: "2022-09-15T08:51:52.799Z",
    updatedAt: "2023-01-27T01:53:09.091Z",
    slug: "chung-ta-cua-hien-tai-aaa",
    __v: 0,
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/music2507-4a63a.appspot.com/o/songs%2FNoiNayCoAnh.jpg?alt=media&token=41f5a885-57dc-4392-a8d7-bffe0ebcd769",
    deletedAt: null,
  },
  {
    _id: "639c3fcc621f2820343f2c38",
    name: "Quên anh đi",
    singers: [],
    songTime: 300,
    publishTime: "2022-12-16T09:51:58.777Z",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/music2507-4a63a.appspot.com/o/songs%2FQuenAnhDi.jpg?alt=media&token=007e9749-819b-479e-a305-2531c0c61120",
    likes: 1,
    listens: 31,
    downloads: 0,
    songUrl:
      "https://firebasestorage.googleapis.com/v0/b/music2507-4a63a.appspot.com/o/songs%2FQuenAnhDi.mp3?alt=media&token=256bbea1-6674-43b2-b271-07d1887245f8",
    deleted: false,
    deletedAt: null,
    createdAt: "2022-12-16T09:52:12.314Z",
    updatedAt: "2023-01-27T01:52:58.460Z",
    __v: 0,
  },
  {
    _id: "63cb536457fbe4f16e8c0439",
    name: "Chúng ta của hiện tại",
    singers: [
      {
        _id: "6390b17b480bd289b00fd2fd",
        nickname: "Tuấn Anh Skyyy",
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/music2507-4a63a.appspot.com/o/songs%2FQuenAnhDi.jpg?alt=media&token=007e9749-819b-479e-a305-2531c0c61120",
      },
    ],
    songTime: 294,
    publishTime: "1970-01-01T00:00:02.020Z",
    likes: 1000000,
    listens: 800049,
    downloads: 0,
    songUrl:
      "https://firebasestorage.googleapis.com/v0/b/music2507-4a63a.appspot.com/o/songs%2FChungTaCuaHienTai.mp3?alt=media&token=fc4aa098-4ce9-4304-977a-b3737a011c6e",
    mvUrl: "",
    deleted: false,
    createdAt: "2022-09-15T08:51:52.799Z",
    updatedAt: "2023-01-21T03:23:52.381Z",
    slug: "chung-ta-cua-hien-tai-aaaa",
    __v: 0,
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/music2507-4a63a.appspot.com/o/songs%2FChungTaCuaHienTai.jpg?alt=media&token=333ffb63-c912-4df4-ba5f-cb5fa48d6100",
  },
];

const ReleasesAdmin = () => {
  const [indexDropdown, setIndexDropdown] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const onShowModal = () => {
    setShowModal(true);
  };

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
          className="relative max-w-xl w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 rounded-lg bg-[#2C2F32] text-white flex flex-col gap-4"
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
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" placeholder="Release name"></input>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="songTime">Song time</label>
              <input
                type="number"
                name="songTime"
                placeholder="Song time"
              ></input>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="singers">Singers</label>
              <input type="text" name="singers" placeholder="Singers"></input>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="publishTime">Publish Time</label>
              <input
                type="date"
                name="publishTime"
                placeholder="Publish Time"
              ></input>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="lyric">Lyric</label>
              <textarea
                className="h-[42px]"
                name="lyric"
                placeholder="Lyric"
              ></textarea>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="songUrl">Song Url</label>
              <input type="text" name="songUrl" placeholder="Song Url"></input>
            </div>
            <div className="flex flex-col gap-2">
              <label className="block" htmlFor="image">
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
          {songs.map((song, index) => (
            <SubAllReleases
              id={song._id}
              rank={index + 1}
              indexDropdown={indexDropdown}
              setIndexDropdown={setIndexDropdown}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReleasesAdmin;
