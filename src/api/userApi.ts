/* eslint-disable import/no-anonymous-default-export */
import QueryInput from "types/QueryInput";
import axiosClient from "./axiosClient";
import { userSchema } from "schema";
import ApiResponse from "types/ApiResponse";
import User from "types/user/User";

const getAll = async (query: QueryInput<User>) => {
  return await axiosClient.get(
    `/admin/user?limit=${query.limit}&skip=${query.skip}&sort=${query.sort}`
  );
};

const getUser = async (): Promise<ApiResponse<User & { token: string }>> => {
  return await axiosClient.get("/auth", {
    withCredentials: true,
  });
};

const loginWithUsernameAndPassword = async (
  body: userSchema.UserLoginInput
): Promise<ApiResponse<User>> => {
  return await axiosClient.post("/auth/login", body);
};

const registerWithUsernameAndPassword = async (
  body: userSchema.UserLoginInput
): Promise<ApiResponse<User>> => {
  return await axiosClient.post("/auth/register", body);
};

const updateUser = async (
  body: userSchema.UserUpdateInput
): Promise<ApiResponse<User>> => {
  return await axiosClient.put("/auth", body);
};

const updateUserPassword = async (
  body: userSchema.UserUpdatePasswordInput
): Promise<ApiResponse<undefined>> => {
  return await axiosClient.put("/auth/password", body);
};

const logout = async (): Promise<ApiResponse<User>> => {
  return await axiosClient.post("/auth/logout");
};

// const deleteUser = async (params: userSchema.UserDeleteInput["params"]) => {
//   return await axiosClient.delete(`/admin/user/${params.id}`);
// };

// const restoreUser = async (params: userSchema.UserRestoreInput["params"]) => {
//   return await axiosClient.patch(`/admin/user/restore/${params.id}`);
// };

export default {
  getAll,
  getUser,
  loginWithUsernameAndPassword,
  registerWithUsernameAndPassword,
  updateUser,
  updateUserPassword,
  logout,
  // deleteUser,
  // restoreUser,
};
