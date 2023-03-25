import { Select } from "antd";
import { Option } from "antd/es/mentions";
import { AppDispatch, IRootState } from "app/store";
import InputFormik from "components/Common/InputFormik";
import Pagination from "components/Common/Pagination";
import storageFirebaseApi from "config/storage";

import colors from "constants/color";
import songAdminThunk from "features/admin/song/songThunk";
import singerThunk from "features/singer/singerThunk";
import { FastField, Form, Formik } from "formik";
import moment from "moment";
import { useState, useEffect } from "react";
import {
  AiOutlineClockCircle,
  AiOutlineLoading3Quarters,
} from "react-icons/ai";
import { FaTimes } from "react-icons/fa";
import Skeleton from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";
import { songSchema } from "schema";
import QueryInput from "types/QueryInput";
import Song from "types/song/Song";
import Admin from "..";
import Modal from "./Modal";
import SubAllReleases from "./SubAllReleases";

const ReleasesAdmin = () => {
  const singers = useSelector((state: IRootState) => state.singer);
  const [indexDropdown, setIndexDropdown] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [showInsertModal, setShowInsertModal] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const songAdmin = useSelector((state: IRootState) => state.adminSong);
  const [songAudio, setSongAudio] = useState<File>();
  const [songImage, setSongImage] = useState<File>();
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [songId, setSongId] = useState<string>();
  const [singerOptions, setSingerOptions] = useState<
    {
      value: string;
      label: string;
    }[]
  >([]);

  const [pagination, setPagination] = useState<QueryInput<Song<string>>>({
    limit: 12,
    skip: 0,
    sort: ["publishTime"],
    order: [-1],
  });

  const onShowModal = () => {
    setShowModal(true);
  };

  useEffect(() => {
    dispatch(songAdminThunk.getAllSongs(pagination));
  }, [pagination, dispatch]);

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

  const handlePagination = (page: number) => {
    setPagination({
      ...pagination,
      skip: (page - 1) * pagination.limit,
    });
    setCurrentPage(page);
  };

  return (
    <div className="flex flex-col gap-6">
      <Admin active="Releases" />
      <button
        className={`mr-auto px-4 py-1 text-base font-semibold hover:bg-[#222227] bg-[${colors.greenColor}] rounded-lg delay-100 transition-all ease-linear`}
        onClick={() => {
          setShowInsertModal(true);
        }}
      >
        Insert
      </button>
      <div
        id="defaultModal"
        tabIndex={-1}
        aria-hidden="true"
        className={`${
          showInsertModal ? "fixed" : "hidden"
        } top-0 left-0 right-0 bottom-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full bg-black/20`}
        onClick={(e) => {
          setShowInsertModal(false);
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
            <button onClick={() => setShowInsertModal(false)}>
              <FaTimes className="text-xl m-1" />
            </button>
          </div>
          <Formik
            initialValues={{
              name: "",
              songTime: 0,
              singers: [],
              imageUrl: "",
              songUrl: "",
              publishTime: moment(Date.now()).format("YYYY-MM-DD"),
              lyric: "",
            }}
            validationSchema={songSchema.createSongSchema}
            onSubmit={async (values) => {
              console.log(values);
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
                songAdminThunk.createSong({
                  ...values,
                  publishTime: moment(values.publishTime).toDate(),
                })
              );
            }}
          >
            {({ errors, touched, setFieldValue, values }) => (
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
                    {songAdmin.loading.createSong ? (
                      <AiOutlineLoading3Quarters />
                    ) : (
                      "INSERT"
                    )}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
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
            <>
              {songAdmin.songs.map((song, index) => (
                <SubAllReleases
                  song={song}
                  id={song._id}
                  rank={index + 1}
                  indexDropdown={indexDropdown}
                  setIndexDropdown={setIndexDropdown}
                  setShowModal={setShowModal}
                  setSongId={setSongId}
                />
              ))}
            </>
          )}
        </tbody>
      </table>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        songId={songId as string}
      />
      <Pagination
        totalPage={songAdmin.pagination.totalPages}
        currentPage={currentPage}
        onPageChange={handlePagination}
      />
    </div>
  );
};

export default ReleasesAdmin;
