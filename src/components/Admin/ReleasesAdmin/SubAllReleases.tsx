import React, { useState, useEffect } from "react";
import noImage from "assets/images/no-image.png";
import { FiMoreHorizontal } from "react-icons/fi";
import moment from "moment";
import { FaTimes } from "react-icons/fa";
import Song from "types/song/Song";
import Singer from "types/singer/Singer";
import joinSingers from "utils/joinSingers";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, IRootState } from "app/store";
import songAdminThunk from "features/admin/song/songThunk";
import { FastField, Form, Formik } from "formik";
import { songSchema } from "schema";
import InputFormik from "components/Common/InputFormik";
import { Select } from "antd";
import singerAdminThunk from "features/admin/singer/singerThunk";
import singerThunk from "features/singer/singerThunk";
import storageFirebaseApi from "config/storage";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

interface SubFavouriteSongsProps {
  id: string;
  rank: number;
  song: Song<Singer>;
  indexDropdown: number;
  setIndexDropdown: React.Dispatch<React.SetStateAction<number>>;
}

const { Option } = Select;

const SubAllReleases = (props: SubFavouriteSongsProps) => {
  const songAdmin = useSelector((state: IRootState) => state.adminSong);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const singers = useSelector((state: IRootState) => state.singer);
  const [query, setQuery] = useState("");
  const [songAudio, setSongAudio] = useState<File>();
  const [songImage, setSongImage] = useState<File>();
  const [singerOptions, setSingerOptions] = useState<
    {
      value: string;
      label: string;
    }[]
  >([]);

  const onShowModal = () => {
    setShowModal(true);
  };

  const handleDeleteSong = () => {
    dispatch(songAdminThunk.deleteSongById(props.song._id));
  };

  useEffect(() => {
    dispatch(
      singerThunk.searchSingers({
        query: query,
        limit: 10,
        sort: ["createdAt"],
        order: [-1],
      })
    ).then((res) => {
      setSingerOptions(
        // @ts-ignore
        res.payload.map((singer) => {
          return {
            value: singer._id,
            label: singer.nickname,
          };
        })
      );
    });
  }, [dispatch, query]);

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
            src={props.song.imageUrl || noImage}
            alt="music"
            className="h-10 w-10"
            onError={(e) => {
              e.currentTarget.src = noImage;
            }}
          />
          <div>
            <p className={`text-white font-semibold truncate w-[300px]`}>
              {props.song.name}
            </p>
            <p className={`text-[#c0c0c0] truncate w-[300px]`}>
              {joinSingers(props.song.singers)}
            </p>
          </div>
        </td>
        <td className="p-2">
          {moment(props.song.createdAt).format("DD/MM/YYYY")}
        </td>
        <td className="text-center p-2">
          <span className="text-center">
            {moment.unix(props.song.songTime).utc().format("mm:ss")}
          </span>
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
                <li
                  className="py-3 px-4 hover:bg-gray-700 dark:hover:bg-gray-600 cursor-pointer"
                  onClick={handleDeleteSong}
                >
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
          className="relative max-w-4xl max-h-screen w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 rounded-lg bg-[#2C2F32] text-white flex flex-col gap-4"
          id="modalContent"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-xl font-semibold">Update Release</h2>
            <button onClick={() => setShowModal(false)}>
              <FaTimes className="text-xl m-1" />
            </button>
          </div>
          <Formik
            initialValues={{
              name: props.song.name,
              songTime: props.song.songTime,
              singers: props.song.singers.map((singer) => singer._id),
              imageUrl: props.song.imageUrl,
              songUrl: props.song.songUrl,
              publishTime: moment(props.song.publishTime).format("YYYY-MM-DD"),
              lyric: props.song.lyric,
            }}
            validationSchema={songSchema.updateSongSchema}
            onSubmit={async (values) => {
              if (songImage && songAudio) {
                const getSongImageUrl = storageFirebaseApi
                  .uploadFileToFirebase("song/images", songImage)
                  .then((res) => {
                    values = { ...values, imageUrl: res as string };
                  });
                const getSongAudioUrl = storageFirebaseApi
                  .uploadFileToFirebase("song/audio", songAudio)
                  .then((res) => {
                    values = { ...values, songUrl: res as string };
                  });

                await Promise.all([getSongImageUrl, getSongAudioUrl]);
              }

              values = {
                ...values,
                lyric: values.lyric ? values.lyric.replace(/\n/g, "<br/>") : "",
              };

              dispatch(
                songAdminThunk.updateSongById({
                  id: props.song._id,
                  updateInput: {
                    ...values,
                    publishTime: moment(values.publishTime).toDate(),
                  },
                })
              );
            }}
          >
            {({ values, errors, touched, setFieldValue }) => (
              <Form>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name">Name</label>
                    <FastField
                      name="name"
                      component={InputFormik}
                      type="text"
                      placeholder="Name"
                      title={touched.name && errors.name}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="songTime">Song time</label>
                    <FastField
                      name="songTime"
                      component={InputFormik}
                      type="number"
                      placeholder="Song time"
                      title={touched.songTime && errors.songTime}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="singers">Singers</label>
                    <Select
                      mode="multiple"
                      size="large"
                      placeholder="Singers"
                      // loading={singers.loading.searchSingers}
                      value={props.song.singers.map((singer) => singer._id)}
                      onSearch={(value) => {
                        setTimeout(() => {
                          setQuery(value);
                        }, 1000);
                      }}
                      onChange={(value) => {
                        setFieldValue("singers", value);
                      }}
                    >
                      {singers.singers.searchSingers.map((singer) => (
                        <Option key={singer._id} value={singer._id}>
                          {singer.nickname}
                        </Option>
                      ))}
                    </Select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="publishTime">Publish Time</label>
                    <FastField
                      name="publishTime"
                      component={InputFormik}
                      type="date"
                      placeholder="Publish Time"
                      title={touched.publishTime && errors.publishTime}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="songUrl">Song File</label>
                    <input
                      className="block w-full text-[#C0C0C0] bg-[#222227] border-none rounded-lg cursor-pointer focus:outline-none"
                      id="songUrl"
                      name="songUrl"
                      onChange={(e) => {
                        if (e.target.files) {
                          setSongAudio(e.target.files[0]);
                        }
                      }}
                      // onChange={(e) => {
                      //   console.log(e.target.files);
                      //   if (e.target.files) {
                      //     setImageFile(e.target.files[0]);
                      //   }
                      // }}
                      type="file"
                      // accept audio
                      accept="audio/*"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="block" htmlFor="imageUrl">
                      Image
                    </label>
                    <input
                      className="block w-full text-[#C0C0C0] bg-[#222227] border-none rounded-lg cursor-pointer focus:outline-none"
                      id="imageUrl"
                      name="imageUrl"
                      onChange={(e) => {
                        if (e.target.files) {
                          setSongImage(e.target.files[0]);
                        }
                      }}
                      type="file"
                      accept="image/*"
                    />
                  </div>
                  <div className="flex flex-col gap-2 col-span-3">
                    <label htmlFor="lyric">Lyric</label>
                    <FastField name="lyric">
                      {({
                        field,
                        form,
                        meta,
                      }: {
                        field: any;
                        form: any;
                        meta: any;
                      }) => (
                        <textarea
                          {...field}
                          placeholder="lyric"
                          className="block pl-5 w-full h-[100px] text-white bg-[#222227] rounded-xl outline-none border-none resize-none"
                        />
                      )}
                    </FastField>
                  </div>
                </div>
                <div className="flex justify-end">
                  <button
                    className="px-8 py-2 ml-auto bg-[#25A56A] border-transparent rounded-full font-semibold text-white text-sm transition ease-linear delay-50 hover:text-[#25A56A] hover:bg-[#222227]"
                    type="submit"
                  >
                    {songAdmin.loading.updateSong ? (
                      <AiOutlineLoading3Quarters />
                    ) : (
                      "UPDATE"
                    )}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default SubAllReleases;
