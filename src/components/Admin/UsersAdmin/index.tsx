import { AppDispatch, IRootState } from "app/store";
import colors from "constants/color";
import userAdminThunk from "features/admin/user/userThunk";
import { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import Skeleton from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";
import Admin from "..";
import SubAllUsers from "./SubAllUsers";

const UsersAdmin = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [indexDropdown, setIndexDropdown] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [userInfo, setUserInfo] = useState({
    username: "",
    fullName: "",
    birthday: "",
    email: "",
    role: "",
    phoneNumber: "",
  });

  useEffect(() => {
    dispatch(
      userAdminThunk.getAllUsers({
        limit: 10,
        skip: 0,
        sort: ["createdAt"],
        order: [-1],
      })
    );
  }, [dispatch]);

  const userAdmin = useSelector((state: IRootState) => state.adminUser);

  const onShowModal = () => {
    setShowModal(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
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
                onChange={handleChange}
              ></input>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="fullName">Full name</label>
              <input
                className="text-black border-none outline-none"
                type="text"
                name="fullName"
                placeholder="Full name"
                onChange={handleChange}
              ></input>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="birthday">Birthday</label>
              <input
                className="text-black border-none outline-none"
                type="date"
                name="birthday"
                placeholder="Birthday"
                onChange={handleChange}
              ></input>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email">Email</label>
              <input
                className="text-black border-none outline-none"
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
              ></input>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="phoneNumber">Phone number</label>
              <input
                className="text-black border-none outline-none"
                type="text"
                name="phoneNumber"
                placeholder="Phone number"
                onChange={handleChange}
              ></input>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="role">Role</label>
              <select
                className="text-black"
                id="role"
                name="role"
                onChange={(e) => {
                  setUserInfo({ ...userInfo, role: e.target.value });
                }}
              >
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
          {userAdmin.loading.getAllUsers ? (
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
            userAdmin.users.map((user, index) => (
              <SubAllUsers
                id={user._id}
                rank={index + 1}
                user={user}
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

export default UsersAdmin;
