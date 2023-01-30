import colors from "constants/color";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import Admin from "..";
import SubAllUsers from "./SubAllUsers";

const users = [
  {
    _id: "6390b068480bd289b00fd2da",
    username: "hello5423",
    role: "admin",
    deleted: false,
    createdAt: "2022-12-07T15:25:28.349Z",
    updatedAt: "2023-01-17T08:45:31.482Z",
    __v: 0,
    birthday: "2022-12-07T17:00:00.000Z",
    email: "123@example.com",
    fullName: "Phạm Quốc Ấn",
    imageUrl: "1234.png",
    phoneNumber: "0123456778",
  },
  {
    _id: "6391a84a133bdcf4e69fd57a",
    username: "hello5424",
    role: "user",
    deleted: false,
    createdAt: "2022-12-08T09:03:06.429Z",
    updatedAt: "2022-12-08T09:03:06.429Z",
    __v: 0,
  },
  {
    _id: "6391a84e133bdcf4e69fd57d",
    username: "hello5425",
    role: "user",
    deleted: false,
    createdAt: "2022-12-08T09:03:10.542Z",
    updatedAt: "2022-12-08T09:03:10.542Z",
    __v: 0,
  },
  {
    _id: "63c76ff4f1c34e41c39c2dd2",
    username: "hello5426",
    role: "user",
    deleted: false,
    createdAt: "2023-01-18T04:05:08.364Z",
    updatedAt: "2023-01-18T04:05:08.364Z",
    __v: 0,
  },
  {
    _id: "63c77034f1c34e41c39c2de0",
    username: "hello5427",
    role: "user",
    deleted: false,
    createdAt: "2023-01-18T04:06:12.938Z",
    updatedAt: "2023-01-18T04:06:12.938Z",
    __v: 0,
  },
  {
    _id: "63c771193ca07013a5df7314",
    username: "hello5429",
    role: "user",
    deleted: false,
    createdAt: "2023-01-18T04:10:01.472Z",
    updatedAt: "2023-01-18T04:10:01.472Z",
    __v: 0,
  },
  {
    _id: "6395253181f10e40fec69ef2",
    username: "tuananhsky",
    role: "admin",
    deleted: false,
    createdAt: "2022-12-11T00:32:49.721Z",
    updatedAt: "2023-01-21T01:49:18.437Z",
    __v: 0,
    birthday: "2001-02-21T17:00:00.000Z",
    email: "tuananhsky@gmail.com",
    fullName: "Đỗ Tuấn Anh",
    imageUrl: "123.png",
    phoneNumber: "0123456779",
  },
];

const UsersAdmin = () => {
  const [indexDropdown, setIndexDropdown] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const onShowModal = () => {
    setShowModal(true);
  };

  return (
    <div className="flex flex-col gap-6">
      <Admin active="Users" />
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
            <h2 className="text-xl font-semibold">Insert User</h2>
            <button onClick={() => setShowModal(false)}>
              <FaTimes className="text-xl m-1" />
            </button>
          </div>
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="username">Username</label>
              <input
                className="text-black border-none outline-none"
                type="text"
                name="username"
                placeholder="Username"
              ></input>
            </div>
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
              <label htmlFor="birthday">Birthday</label>
              <input
                className="text-black border-none outline-none"
                type="date"
                name="birthday"
                placeholder="Birthday"
              ></input>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email">Email</label>
              <input
                className="text-black border-none outline-none"
                type="email"
                name="email"
                placeholder="Email"
              ></input>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="phonenumber">Phone number</label>
              <input
                className="text-black border-none outline-none"
                type="text"
                name="phonenumber"
                placeholder="Phone number"
              ></input>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="role">Role</label>
              <select className="text-black" id="role" name="role">
                <option value="user">user</option>
                <option value="admin">admin</option>
              </select>
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
            <th className="text-left w-1/2 p-2 text-sm">USER</th>
            <th className="p-2 text-left text-sm">BIRTHDAY</th>
            <th className="w-[150px] p-2 text-sm">ROLE</th>
            <th className="p-2 w-[30px]"></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <SubAllUsers
              id={user._id}
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

export default UsersAdmin;
