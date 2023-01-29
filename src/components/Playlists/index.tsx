/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { useParams } from "react-router-dom";
import PlaylistSongs from "./PlaylistSongs";
import { FiMoreHorizontal } from "react-icons/fi";
import noImage from "assets/images/no-image.png";
import { useDispatch, useSelector } from "react-redux";
import playlistThunk from "features/playlist/playlistThunk";
import { AppDispatch, IRootState } from "app/store";
import calculateHoursSongs from "utils/calculateHoursSongs";
import favoriteThunk from "features/favorite/favoriteThunk";
import { FaTimes } from "react-icons/fa";
import NoImage from "assets/images/no-image.png";
import { FastField, Form, Formik } from "formik";
import { playlistSchema } from "schema";
import InputFormik from "components/Common/InputFormik";
import { setListChosenSong } from "features/song/songSlice";

const Playlists = () => {
  const param = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const playlist = useSelector((state: IRootState) => state.playlist);
  const [showPlaylistModal, setShowPlaylistModal] = useState(false);
  const [showMoreOptionModal, setShowMoreOptionModal] = useState(false);

  useEffect(() => {
    dispatch(playlistThunk.getOnePlaylist(param.id as string));
    dispatch(favoriteThunk.getAllFavoriteSongIds());
  }, [dispatch]);

  const handleChangeName = () => {
    setShowPlaylistModal(true);
  };

  const handleSubmit = (values: any) => {
    dispatch(
      playlistThunk.updatePlaylist({
        id: values.id,
        name: values.name,
        description: values.description,
        imageUrl: values.imageUrl,
      })
    );
    !playlist.loading.updatePlaylist && setShowPlaylistModal(false);
  };

  return (
    <div>
      <div className="gradient-green-color w-full h-[300px] flex flex-row items-end gap-6 pl-8 pb-6">
        <div className="w-[220px] h-[220px] shadow-xl grid place-items-center">
          <img
            src={playlist.playlists.onePlaylist?.imageUrl || noImage}
            alt="image"
            className="w-full h-full object-contain"
            onError={(e) => {
              e.currentTarget.src = noImage;
            }}
          />
        </div>
        <div className="flex flex-col gap-8 text-white w-[800px]">
          <div>
            <span className="font-semibold text-sm">PLAYLIST</span>
            <h3
              className="text-6xl font-bold uppercase cursor-pointer truncate"
              onClick={handleChangeName}
            >
              {playlist.playlists.onePlaylist?.name}
            </h3>
            <div
              id="defaultModal"
              tabIndex={-1}
              aria-hidden="true"
              className={`${
                showPlaylistModal ? "fixed" : "hidden"
              } top-0 left-0 right-0 bottom-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full bg-black/20`}
              onClick={(e) => {
                // hide object when click outside

                setShowPlaylistModal(false);
              }}
            >
              {!playlist.loading.getOnePlaylist && (
                <Formik
                  initialValues={{
                    name: playlist.playlists.onePlaylist?.name,
                    id: param.id,
                    imageUrl: playlist.playlists.onePlaylist?.imageUrl,
                    description: playlist.playlists.onePlaylist?.description,
                  }}
                  validationSchema={playlistSchema.updatePlaylistBody}
                  onSubmit={(values) => handleSubmit(values)}
                >
                  {(formikProps) => {
                    const { values, errors, touched, isSubmitting } =
                      formikProps;
                    return (
                      <Form
                        className="relative max-w-xl w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 rounded-lg bg-[#2C2F32] text-white flex flex-col gap-4"
                        id="modalContent"
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                      >
                        <div className="flex justify-between items-center mb-4">
                          <h2 className="text-xl font-semibold">
                            Edit your playlist
                          </h2>
                          <button onClick={() => setShowPlaylistModal(false)}>
                            <FaTimes className="text-xl m-1" />
                          </button>
                        </div>
                        <div className="flex flex-row gap-4 h-[180px]">
                          <div>
                            <img
                              src={values.imageUrl || NoImage}
                              alt="no image"
                              className={"h-[180px] rounded-xl"}
                              onError={(e) => {
                                e.currentTarget.src = NoImage;
                              }}
                            />
                          </div>
                          <div className="flex flex-col gap-4 flex-1">
                            <FastField
                              name="name"
                              component={InputFormik}
                              type="text"
                              disabled={false}
                              placeholder={"Name"}
                              title={touched.name && errors.name}
                            />
                            <FastField name="description">
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
                                  placeholder="Add an description"
                                  className="block pl-5 w-full min-h-[120px] text-white bg-[#222227] rounded-xl outline-none border-none resize-none"
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
                            {playlist.loading.updatePlaylist
                              ? "UPDATING..."
                              : "Save"}
                          </button>
                        </div>
                      </Form>
                    );
                  }}
                </Formik>
              )}
            </div>
          </div>
          <div className="flex flex-col">
            <div className="text-base mb-2 truncate">
              <h3>
                <i>{playlist.playlists.onePlaylist?.description}</i>
              </h3>
            </div>
            <div className="flex flex-row gap-2 items-end text-sm">
              <span className="font-semibold">
                {playlist.playlists.onePlaylist?.songs.length} songs
              </span>
              <span className="text-[6px]">&#9898;</span>
              <span className="">
                {calculateHoursSongs(playlist.playlists.onePlaylist?.songs)}
              </span>
            </div>
          </div>
        </div>
      </div>
      {playlist.playlists.onePlaylist?.songs.length !== 0 ? (
        <>
          <div className="flex flex-row gap-8 items-center mt-8 ml-8">
            <button
              className={`w-[58px] h-[58px] rounded-full border-none outline-none hover:scale-105 bg-[#1ED760] grid place-items-center transition-all duration-200 ease-in-out`}
              onClick={() =>
                dispatch(
                  setListChosenSong({
                    indexListChosenSong:
                      playlist.playlists.onePlaylist?.songs.length === 0
                        ? -1
                        : 0,
                    listChosenSong: playlist.playlists.onePlaylist?.songs || [],
                  })
                )
              }
            >
              <BsFillPlayFill className="text-black text-3xl" />
            </button>
            <div
              className="flex flex-col"
              onMouseLeave={() => setShowMoreOptionModal(false)}
              onClick={() => setShowMoreOptionModal(!showMoreOptionModal)}
            >
              <FiMoreHorizontal className="relative text-3xl cursor-pointer" />
              <div className="w-40" onClick={(e) => e.stopPropagation()}>
                <ul
                  className={`bg-[#222227] w-40 rounded-sm text-sm ${
                    showMoreOptionModal ? "absolute" : "hidden"
                  }`}
                >
                  <li
                    className="py-3 px-4 hover:bg-gray-700 dark:hover:bg-gray-600 cursor-pointer"
                    onClick={handleChangeName}
                  >
                    Edit playlist
                  </li>
                  <li className="py-3 px-4 hover:bg-gray-700 dark:hover:bg-gray-600 cursor-pointer">
                    Remove playlist
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <PlaylistSongs
            songs={playlist.playlists.onePlaylist?.songs}
            loading={playlist.loading.getOnePlaylist}
          />
        </>
      ) : (
        <div className="pt-8 text-xl font-semibold">
          There are no songs in {playlist.playlists.onePlaylist.name}.
        </div>
      )}
    </div>
  );
};

export default Playlists;
