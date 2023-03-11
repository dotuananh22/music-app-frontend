import { AppDispatch, IRootState } from "app/store";
import InputFormik from "components/Common/InputFormik";
import storageFirebaseApi from "config/storage";
import colors from "constants/color";
import singerAdminThunk from "features/admin/singer/singerThunk";
import { FastField, Form, Formik } from "formik";
import moment from "moment";
import { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import Skeleton from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";
import { singerSchema } from "schema";
import Admin from "..";
import SubAllArtists from "./SubAllArtists";

const singers = [
  {
    _id: "638ff35c259a9d01ff88c4d5",
    fullName: "Nguyễn Thị Vân Anh",
    nickname: "VAnh",
    bio: "Game là dễ",
    story: "Không có",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/music2507-4a63a.appspot.com/o/singers%2Fvanh.jpg?alt=media&token=c42480c6-0486-4095-a251-06601c017e63",
    imageCover:
      "https://firebasestorage.googleapis.com/v0/b/music2507-4a63a.appspot.com/o/singers%2Fvanh-cover.jpg?alt=media&token=0c017d42-69c3-40c9-9924-34c061039b52",
    tick: true,
    gender: 1,
    birthday: "1999-02-22T00:00:00.000Z",
    country: "Việt Nam",
    debutYear: 2021,
    follower: 220000,
    deleted: false,
    createdAt: "2022-12-07T01:58:52.373Z",
    updatedAt: "2022-12-14T07:28:38.141Z",
    __v: 0,
  },
  {
    _id: "6390b17b480bd289b00fd2fd",
    fullName: "Đỗ Tuấn Anh",
    nickname: "Tuấn Anh Skyyy",
    bio: "Game là dễ",
    story: "Không có",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/music2507-4a63a.appspot.com/o/songs%2FQuenAnhDi.jpg?alt=media&token=007e9749-819b-479e-a305-2531c0c61120",
    imageCover:
      "https://firebasestorage.googleapis.com/v0/b/music2507-4a63a.appspot.com/o/songs%2FQuenAnhDi.jpg?alt=media&token=007e9749-819b-479e-a305-2531c0c61120",
    tick: true,
    gender: 0,
    birthday: "2022-12-07T00:36:39.342Z",
    country: "Việt Nam",
    debutYear: 2022,
    follower: 3000,
    deleted: false,
    createdAt: "2022-12-07T15:30:03.377Z",
    updatedAt: "2022-12-07T15:30:28.250Z",
    __v: 0,
  },
  {
    _id: "63cb53f157fbe4f16e8c0449",
    fullName: "Nguyễn Thanh Tùng",
    nickname: "Sơn Tùng MTP 9",
    bio: "Game là dễ",
    story: "Không có",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/music2507-4a63a.appspot.com/o/singers%2Fsontungmtp.jpg?alt=media&token=fe8d3382-5b84-4f40-a579-c7111eef7a18",
    imageCover:
      "https://firebasestorage.googleapis.com/v0/b/music2507-4a63a.appspot.com/o/singers%2Fsontungmtp-cover.jpg?alt=media&token=8cc00be2-5909-46b4-9c2e-445ebc2c281c",
    tick: true,
    gender: 0,
    birthday: "1994-07-05T02:59:34.912Z",
    country: "Việt Nam",
    debutYear: 2010,
    follower: 2150589,
    deleted: false,
    createdAt: "2022-12-07T00:36:39.342Z",
    updatedAt: "2022-12-07T01:52:35.528Z",
    __v: 0,
  },
  {
    _id: "63cb53f657fbe4f16e8c044a",
    fullName: "Nguyễn Thanh Tùng",
    nickname: "Sơn Tùng MTP 8",
    bio: "Game là dễ",
    story: "Không có",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/music2507-4a63a.appspot.com/o/singers%2Fsontungmtp.jpg?alt=media&token=fe8d3382-5b84-4f40-a579-c7111eef7a18",
    imageCover:
      "https://firebasestorage.googleapis.com/v0/b/music2507-4a63a.appspot.com/o/singers%2Fsontungmtp-cover.jpg?alt=media&token=8cc00be2-5909-46b4-9c2e-445ebc2c281c",
    tick: true,
    gender: 0,
    birthday: "1994-07-05T02:59:34.912Z",
    country: "Việt Nam",
    debutYear: 2010,
    follower: 2150589,
    deleted: false,
    createdAt: "2022-12-07T00:36:39.342Z",
    updatedAt: "2022-12-07T01:52:35.528Z",
    __v: 0,
  },
  {
    _id: "63cb53d557fbe4f16e8c0446",
    fullName: "Nguyễn Thanh Tùng",
    nickname: "Sơn Tùng MTP 7",
    bio: "Game là dễ",
    story: "Không có",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/music2507-4a63a.appspot.com/o/singers%2Fsontungmtp.jpg?alt=media&token=fe8d3382-5b84-4f40-a579-c7111eef7a18",
    imageCover:
      "https://firebasestorage.googleapis.com/v0/b/music2507-4a63a.appspot.com/o/singers%2Fsontungmtp-cover.jpg?alt=media&token=8cc00be2-5909-46b4-9c2e-445ebc2c281c",
    tick: true,
    gender: 0,
    birthday: "1994-07-05T02:59:34.912Z",
    country: "Việt Nam",
    debutYear: 2010,
    follower: 2150589,
    deleted: false,
    createdAt: "2022-12-07T00:36:39.342Z",
    updatedAt: "2022-12-07T01:52:35.528Z",
    __v: 0,
  },
  {
    _id: "63cb53ae57fbe4f16e8c0443",
    fullName: "Nguyễn Thanh Tùng",
    nickname: "Sơn Tùng MTP 6",
    bio: "Game là dễ",
    story: "Không có",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/music2507-4a63a.appspot.com/o/singers%2Fsontungmtp.jpg?alt=media&token=fe8d3382-5b84-4f40-a579-c7111eef7a18",
    imageCover:
      "https://firebasestorage.googleapis.com/v0/b/music2507-4a63a.appspot.com/o/singers%2Fsontungmtp-cover.jpg?alt=media&token=8cc00be2-5909-46b4-9c2e-445ebc2c281c",
    tick: true,
    gender: 0,
    birthday: "1994-07-05T02:59:34.912Z",
    country: "Việt Nam",
    debutYear: 2010,
    follower: 2150589,
    deleted: false,
    createdAt: "2022-12-07T00:36:39.342Z",
    updatedAt: "2022-12-07T01:52:35.528Z",
    __v: 0,
  },
  {
    _id: "63cb53a357fbe4f16e8c0441",
    fullName: "Nguyễn Thanh Tùng",
    nickname: "Sơn Tùng MTP 4",
    bio: "Game là dễ",
    story: "Không có",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/music2507-4a63a.appspot.com/o/singers%2Fsontungmtp.jpg?alt=media&token=fe8d3382-5b84-4f40-a579-c7111eef7a18",
    imageCover:
      "https://firebasestorage.googleapis.com/v0/b/music2507-4a63a.appspot.com/o/singers%2Fsontungmtp-cover.jpg?alt=media&token=8cc00be2-5909-46b4-9c2e-445ebc2c281c",
    tick: true,
    gender: 0,
    birthday: "1994-07-05T02:59:34.912Z",
    country: "Việt Nam",
    debutYear: 2010,
    follower: 2150589,
    deleted: false,
    createdAt: "2022-12-07T00:36:39.342Z",
    updatedAt: "2022-12-07T01:52:35.528Z",
    __v: 0,
  },
  {
    _id: "63cb539b57fbe4f16e8c0440",
    fullName: "Nguyễn Thanh Tùng",
    nickname: "Sơn Tùng MTP 3",
    bio: "Game là dễ",
    story: "Không có",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/music2507-4a63a.appspot.com/o/singers%2Fsontungmtp.jpg?alt=media&token=fe8d3382-5b84-4f40-a579-c7111eef7a18",
    imageCover:
      "https://firebasestorage.googleapis.com/v0/b/music2507-4a63a.appspot.com/o/singers%2Fsontungmtp-cover.jpg?alt=media&token=8cc00be2-5909-46b4-9c2e-445ebc2c281c",
    tick: true,
    gender: 0,
    birthday: "1994-07-05T02:59:34.912Z",
    country: "Việt Nam",
    debutYear: 2010,
    follower: 2150589,
    deleted: false,
    createdAt: "2022-12-07T00:36:39.342Z",
    updatedAt: "2022-12-07T01:52:35.528Z",
    __v: 0,
  },
  {
    _id: "63cb539657fbe4f16e8c043f",
    fullName: "Nguyễn Thanh Tùng",
    nickname: "Sơn Tùng MTP 2",
    bio: "Game là dễ",
    story: "Không có",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/music2507-4a63a.appspot.com/o/singers%2Fsontungmtp.jpg?alt=media&token=fe8d3382-5b84-4f40-a579-c7111eef7a18",
    imageCover:
      "https://firebasestorage.googleapis.com/v0/b/music2507-4a63a.appspot.com/o/singers%2Fsontungmtp-cover.jpg?alt=media&token=8cc00be2-5909-46b4-9c2e-445ebc2c281c",
    tick: true,
    gender: 0,
    birthday: "1994-07-05T02:59:34.912Z",
    country: "Việt Nam",
    debutYear: 2010,
    follower: 2150589,
    deleted: false,
    createdAt: "2022-12-07T00:36:39.342Z",
    updatedAt: "2022-12-07T01:52:35.528Z",
    __v: 0,
  },
  {
    _id: "63cb540b57fbe4f16e8c044d",
    fullName: "Nguyễn Thanh Tùng",
    nickname: "Sơn Tùng MTP 13",
    bio: "Game là dễ",
    story: "Không có",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/music2507-4a63a.appspot.com/o/singers%2Fsontungmtp.jpg?alt=media&token=fe8d3382-5b84-4f40-a579-c7111eef7a18",
    imageCover:
      "https://firebasestorage.googleapis.com/v0/b/music2507-4a63a.appspot.com/o/singers%2Fsontungmtp-cover.jpg?alt=media&token=8cc00be2-5909-46b4-9c2e-445ebc2c281c",
    tick: true,
    gender: 0,
    birthday: "1994-07-05T02:59:34.912Z",
    country: "Việt Nam",
    debutYear: 2010,
    follower: 2150589,
    deleted: false,
    createdAt: "2022-12-07T00:36:39.342Z",
    updatedAt: "2022-12-07T01:52:35.528Z",
    __v: 0,
  },
  {
    _id: "63cb540557fbe4f16e8c044c",
    fullName: "Nguyễn Thanh Tùng",
    nickname: "Sơn Tùng MTP 11",
    bio: "Game là dễ",
    story: "Không có",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/music2507-4a63a.appspot.com/o/singers%2Fsontungmtp.jpg?alt=media&token=fe8d3382-5b84-4f40-a579-c7111eef7a18",
    imageCover:
      "https://firebasestorage.googleapis.com/v0/b/music2507-4a63a.appspot.com/o/singers%2Fsontungmtp-cover.jpg?alt=media&token=8cc00be2-5909-46b4-9c2e-445ebc2c281c",
    tick: true,
    gender: 0,
    birthday: "1994-07-05T02:59:34.912Z",
    country: "Việt Nam",
    debutYear: 2010,
    follower: 2150589,
    deleted: false,
    createdAt: "2022-12-07T00:36:39.342Z",
    updatedAt: "2022-12-07T01:52:35.528Z",
    __v: 0,
  },
  {
    _id: "63cb53fc57fbe4f16e8c044b",
    fullName: "Nguyễn Thanh Tùng",
    nickname: "Sơn Tùng MTP 10",
    bio: "Game là dễ",
    story: "Không có",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/music2507-4a63a.appspot.com/o/singers%2Fsontungmtp.jpg?alt=media&token=fe8d3382-5b84-4f40-a579-c7111eef7a18",
    imageCover:
      "https://firebasestorage.googleapis.com/v0/b/music2507-4a63a.appspot.com/o/singers%2Fsontungmtp-cover.jpg?alt=media&token=8cc00be2-5909-46b4-9c2e-445ebc2c281c",
    tick: true,
    gender: 0,
    birthday: "1994-07-05T02:59:34.912Z",
    country: "Việt Nam",
    debutYear: 2010,
    follower: 2150589,
    deleted: false,
    createdAt: "2022-12-07T00:36:39.342Z",
    updatedAt: "2022-12-07T01:52:35.528Z",
    __v: 0,
  },
];

const ArtistsAdmin = () => {
  const [indexDropdown, setIndexDropdown] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const singerAdmin = useSelector((state: IRootState) => state.adminSinger);
  const [file, setFile] = useState<{
    avatar: File | null;
    imageCover: File | null;
  }>({
    avatar: null,
    imageCover: null,
  });

  useEffect(() => {
    dispatch(
      singerAdminThunk.getAllSingers({
        limit: 10,
        skip: 0,
        order: [-1],
        sort: ["follower"],
      })
    );
  }, [dispatch]);

  const onShowModal = () => {
    setShowModal(true);
  };

  return (
    <div className="flex flex-col gap-6">
      <Admin active="Artists" />
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
          className="relative max-w-5xl max-h-screen w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 rounded-lg bg-[#2C2F32] text-white flex flex-col gap-4"
          id="modalContent"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-xl font-semibold">Insert Artist</h2>
            <button onClick={() => setShowModal(false)}>
              <FaTimes className="text-xl m-1" />
            </button>
          </div>
          <Formik
            validationSchema={singerSchema.createSingerBody}
            initialValues={{
              fullName: "",
              nickname: "",
              bio: "",
              story: "",
              birthday: moment(Date.now()).format("yyyy-MM-DD"),
              country: "",
              debutYear: 0,
              website: "",
              facebook: "",
              twitter: "",
              instagram: "",
              youtube: "",
              tick: false,
              gender: 0,
              imageUrl: "",
              imageCover: "",
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
                singerAdminThunk.createSinger({
                  ...values,
                  imageUrl: imageUrl || "",
                  imageCover: imageCover || "",
                  birthday: moment(values.birthday).toDate(),
                  follower: 0,
                })
              );
            }}
          >
            {({ errors, touched }) => {
              return (
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
                            imageCover: e.target.files
                              ? e.target.files[0]
                              : null,
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
                      INSERT
                    </button>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
      <table className="table-auto w-full">
        <thead>
          <tr className="border-b border-[#222227]">
            <th className="w-[20px] p-2"></th>
            <th className="text-left w-1/2 p-2 text-sm">TITLE</th>
            <th className="p-2 text-left text-sm">BIRTHDAY</th>
            <th className="w-[150px] p-2 text-sm">FOLLOWER</th>
            <th className="p-2 w-[30px]"></th>
          </tr>
        </thead>
        <tbody>
          {singerAdmin.loading.allSingers ? (
            <>
              <tr>
                <td colSpan={5}>
                  <Skeleton height={"52px"} />
                </td>
              </tr>{" "}
              <tr>
                <td colSpan={5}>
                  <Skeleton height={"52px"} />
                </td>
              </tr>{" "}
              <tr>
                <td colSpan={5}>
                  <Skeleton height={"52px"} />
                </td>
              </tr>
            </>
          ) : (
            singerAdmin.singers.map((singer, index) => (
              <SubAllArtists
                id={singer._id}
                singer={singer}
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

export default ArtistsAdmin;
