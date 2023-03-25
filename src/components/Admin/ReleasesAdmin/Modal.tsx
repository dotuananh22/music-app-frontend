import { AppDispatch, IRootState } from "app/store";
import { FastField, Form, Formik } from "formik";
import React, { useState, useEffect } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import songThunk from "features/song/songThunk";
import moment from "moment";
import { songSchema } from "schema";
import storageFirebaseApi from "config/storage";
import songAdminThunk from "features/admin/song/songThunk";
import InputFormik from "components/Common/InputFormik";
import { Select } from "antd";
import { Option } from "antd/es/mentions";

interface ModalProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  songId: string;
}
const Modal = ({ showModal, setShowModal, songId }: ModalProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const song = useSelector((state: IRootState) => state.song.song.songById);
  const singers = useSelector((state: IRootState) => state.singer);
  const songAdmin = useSelector((state: IRootState) => state.adminSong);
  const [songImage, setSongImage] = useState<File>();
  const [songAudio, setSongAudio] = useState<File>();

  useEffect(() => {
    if (songId) {
      dispatch(songThunk.getSongById(songId));
    }
  }, [songId, dispatch]);

  return (
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
        {!song ? (
          <div>Not found music with this id</div>
        ) : (
          <Formik
            initialValues={{
              name: song.name,
              songTime: song.songTime,
              singers: song.singers.map((singer) => singer._id),
              imageUrl: song.imageUrl,
              songUrl: song.songUrl,
              publishTime: moment(song.publishTime).format("YYYY-MM-DD"),
              lyric: song.lyric,
            }}
            enableReinitialize
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
                  id: songId,
                  updateInput: {
                    ...values,
                    publishTime: moment(values.publishTime).toDate(),
                  },
                })
              );
            }}
          >
            {({ values, errors, touched, setFieldValue }) => {
              return (
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
                        value={values.singers}
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
              );
            }}
          </Formik>
        )}
      </div>
    </div>
  );
};

export default Modal;
