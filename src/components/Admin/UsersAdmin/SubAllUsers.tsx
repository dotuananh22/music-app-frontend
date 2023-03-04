import React, { useState } from "react";
import noImage from "assets/images/no-image.png";
import { FiMoreHorizontal } from "react-icons/fi";
import moment from "moment";
import { FaTimes } from "react-icons/fa";
import User from "types/user/User";
import { FastField, Form, Formik } from "formik";
import { userSchema } from "schema";
import InputFormik from "components/Common/InputFormik";
import { useDispatch } from "react-redux";
import { AppDispatch } from "app/store";
import userAdminThunk from "features/admin/user/userThunk";

interface SubFavouriteSongsProps {
  id: string;
  rank: number;
  user: User;
  indexDropdown: number;
  setIndexDropdown: React.Dispatch<React.SetStateAction<number>>;
}

const SubAllUsers = (props: SubFavouriteSongsProps) => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  const onShowModal = () => {
    setShowModal(true);
  };

  const handleDeleteUser = () => {
    dispatch(userAdminThunk.deleteUser(props.user._id));
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
            src={props.user.imageUrl || noImage}
            alt="avatar"
            className="h-10 w-10"
            onError={(e) => {
              e.currentTarget.src = noImage;
            }}
          />
          <div>
            <p className={`text-white font-semibold truncate w-[300px]`}>
              {props.user.username}
            </p>
            <p className={`text-[#c0c0c0] truncate w-[300px]`}>
              {props.user.fullName}
            </p>
          </div>
        </td>
        <td className="p-2">
          {moment(props.user.birthday).format("DD/MM/YYYY")}
        </td>
        <td className="text-center p-2">
          <span className="text-center">{props.user.role}</span>
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
                  onClick={handleDeleteUser}
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
            <h2 className="text-xl font-semibold">Update User</h2>
            <button onClick={() => setShowModal(false)}>
              <FaTimes className="text-xl m-1" />
            </button>
          </div>
          <Formik
            initialValues={{
              username: props.user.username,
              fullName: props.user.fullName,
              birthday: props.user.birthday,
              email: props.user.email,
              phoneNumber: props.user.phoneNumber,
              role: props.user.role,
            }}
            validationSchema={userSchema.adminUpdateUserSchema}
            onSubmit={(values) => {
              dispatch(
                userAdminThunk.updateUser({
                  userId: props.user._id,
                  updateBody: values,
                })
              );
              setShowModal(false);
            }}
          >
            {(formikProps) => {
              const { values, errors, touched } = formikProps;

              return (
                <Form>
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="username">Username</label>
                      <FastField
                        name="username"
                        component={InputFormik}
                        type="text"
                        placeholder="Username"
                        title={touched.username && errors.username}
                        disabled={true}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="fullName">Full Name</label>
                      <FastField
                        name="fullName"
                        component={InputFormik}
                        type="text"
                        placeholder="Full Name"
                        title={touched.fullName && errors.fullName}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="birthday">Birthday</label>
                      <FastField
                        name="birthday"
                        component={InputFormik}
                        type="date"
                        placeholder="Birthday"
                        patern="dd/MM/yyyy"
                        title={touched.birthday && errors.birthday}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email">Email</label>
                      <FastField
                        name="email"
                        component={InputFormik}
                        type="email"
                        placeholder="Email"
                        title={touched.email && errors.email}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="phoneNumber">Phone Number</label>
                      <FastField
                        name="phoneNumber"
                        component={InputFormik}
                        type="tel"
                        placeholder="Phone Number"
                        title={touched.phoneNumber && errors.phoneNumber}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="role">Role</label>
                      <FastField name="role">
                        {({ field }: { field: any }) => {
                          return (
                            <select className="text-black" {...field}>
                              <option value="user">user</option>
                              <option value="admin">admin</option>
                            </select>
                          );
                        }}
                      </FastField>
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
              );
            }}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default SubAllUsers;
