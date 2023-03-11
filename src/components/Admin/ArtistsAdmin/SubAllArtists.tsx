import React, { useState } from "react";
import noImage from "assets/images/no-image.png";
import { FiMoreHorizontal } from "react-icons/fi";
import moment from "moment";
import { FaTimes } from "react-icons/fa";
import { BsFillCheckCircleFill } from "react-icons/bs";
import Singer from "types/singer/Singer";
import { FastField, Form, Formik } from "formik";
import { singerSchema } from "schema";
import InputFormik from "components/Common/InputFormik";
import { toast } from "react-toastify";
import storageFirebaseApi from "config/storage";
import { useDispatch } from "react-redux";
import { AppDispatch } from "app/store";
import singerAdminThunk from "features/admin/singer/singerThunk";

interface SubFavouriteSongsProps {
  id: string;
  rank: number;
  singer: Singer;
  indexDropdown: number;
  setIndexDropdown: React.Dispatch<React.SetStateAction<number>>;
}

const SubAllArtists = (props: SubFavouriteSongsProps) => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const [file, setFile] = useState<{
    avatar: File | null;
    imageCover: File | null;
  }>({
    avatar: null,
    imageCover: null,
  });

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
            src={props.singer.imageUrl || noImage}
            alt="music"
            className="h-10 w-10"
            onError={(e) => {
              e.currentTarget.src = noImage;
            }}
          />
          <div>
            <p className={`text-white font-semibold truncate w-[300px]`}>
              {props.singer.fullName}
            </p>
            <p
              className={`text-[#c0c0c0] truncate w-[300px] flex flex-row gap-2 items-center`}
            >
              {props.singer.nickname}
              {props.singer.tick && (
                <BsFillCheckCircleFill className="text-[#5489F2] text-sm" />
              )}
            </p>
          </div>
        </td>
        <td className="p-2">
          {moment(props.singer.birthday).format("DD/MM/YYYY")}
        </td>
        <td className="text-center p-2">
          <span className="text-center">{props.singer.follower}</span>
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
          <Formik
            validationSchema={singerSchema.updateSingerBody}
            initialValues={{
              fullName: props.singer.fullName,
              nickname: props.singer.nickname,
              bio: props.singer.bio,
              story: props.singer.story,
              birthday: moment(props.singer.birthday).format("yyyy-MM-DD"),
              country: props.singer.country,
              debutYear: props.singer.debutYear,
              website: props.singer.website,
              facebook: props.singer.facebook,
              twitter: props.singer.twitter,
              instagram: props.singer.instagram,
              youtube: props.singer.youtube,
              tick: props.singer.tick,
              gender: props.singer.gender,
              imageUrl: props.singer.imageUrl,
              imageCover: props.singer.imageCover,
            }}
            onSubmit={async (values) => {
              let imageUrl, imageCover;
              if (file.avatar) {
                imageUrl = await storageFirebaseApi.uploadFileToFirebase(
                  "singerAvatar",
                  file.avatar
                );
              }

              if (file.imageCover) {
                imageCover = await storageFirebaseApi.uploadFileToFirebase(
                  "singerCover",
                  file.imageCover
                );
              }

              dispatch(
                singerAdminThunk.updateSinger({
                  id: props.singer._id,
                  data: {
                    ...values,
                    birthday: moment(values.birthday).toDate(),
                    imageCover: imageCover || props.singer.imageCover,
                    imageUrl: imageUrl || props.singer.imageUrl,
                  },
                })
              );
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="grid grid-cols-4 gap-4 mb-4">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="fullName">Full name</label>
                    <FastField
                      name="fullName"
                      component={InputFormik}
                      type="text"
                      placeholder="Name"
                      title={touched.fullName && errors.fullName}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="nickname">Nickname</label>
                    <FastField
                      name="nickname"
                      component={InputFormik}
                      type="text"
                      placeholder="Nickname"
                      title={touched.nickname && errors.nickname}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="bio">Bio</label>
                    <FastField
                      name="bio"
                      component={InputFormik}
                      type="text"
                      placeholder="Bio"
                      title={touched.bio && errors.bio}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="story">Story</label>
                    <FastField name="story">
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
                          placeholder="story"
                          className="block pl-5 h-[42px] w-full text-white bg-[#222227] rounded-xl outline-none border-none resize-none"
                        />
                      )}
                    </FastField>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="birthday">Birthday</label>
                    <FastField
                      name="birthday"
                      component={InputFormik}
                      type="date"
                      title={touched.birthday && errors.birthday}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="country">Country</label>
                    <FastField
                      name="country"
                      component={InputFormik}
                      type="text"
                      placeholder="Country"
                      title={touched.country && errors.country}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="debutyear">Debut year</label>
                    <FastField
                      name="debutYear"
                      component={InputFormik}
                      type="number"
                      placeholder="Debut Year"
                      title={touched.debutYear && errors.debutYear}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="website">Website</label>
                    <FastField
                      name="website"
                      component={InputFormik}
                      type="text"
                      placeholder="Website"
                      title={touched.website && errors.website}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="facebook">Facebook</label>
                    <FastField
                      name="facebook"
                      component={InputFormik}
                      type="text"
                      placeholder="Facebook"
                      title={touched.facebook && errors.facebook}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="youtube">Youtube</label>
                    <FastField
                      name="youtube"
                      component={InputFormik}
                      type="text"
                      placeholder="Youtube"
                      title={touched.youtube && errors.youtube}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="instagram">Instagram</label>
                    <FastField
                      name="instagram"
                      component={InputFormik}
                      type="text"
                      placeholder="Instagram"
                      title={touched.instagram && errors.instagram}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="twitter">Twitter</label>
                    <FastField
                      name="twitter"
                      component={InputFormik}
                      type="text"
                      placeholder="Twitter"
                      title={touched.twitter && errors.twitter}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="tick">Tick</label>
                    <FastField name="tick">
                      {({ field }: { field: any }) => {
                        return (
                          <select className="text-black" {...field}>
                            <option value="false">False</option>
                            <option value="true">True</option>
                          </select>
                        );
                      }}
                    </FastField>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="gender">Gender</label>
                    <FastField name="gender">
                      {({ field }: { field: any }) => {
                        return (
                          <select className="text-black" {...field}>
                            <option value="0">Male</option>
                            <option value="1">Female</option>
                            <option value="2">Other</option>
                          </select>
                        );
                      }}
                    </FastField>
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
                      onChange={(e) => {
                        setFile({
                          ...file,
                          avatar: e.target.files ? e.target.files[0] : null,
                        });
                      }}
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
                      onChange={(e) => {
                        setFile({
                          ...file,
                          imageCover: e.target.files ? e.target.files[0] : null,
                        });
                      }}
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
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default SubAllArtists;
