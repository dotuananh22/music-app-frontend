import QueryInput from "../types/QueryInput";
import axiosClient from "./axiosClient";
import { authSchema } from "../schema";

const getAll = async (query: QueryInput) => {
  return await axiosClient.get(
    `/admin/user?limit=${query.limit}&skip=${query.skip}&sort=${query.sort}`
  );
};

const loginWithUsernameAndPassword = async (
  body: authSchema.UserLoginInput["body"]
) => {
  return await axiosClient.post("/auth/login", body);
};

const registerWithUsernameAndPassword = async (
  body: authSchema.UserRegisterInput["body"]
) => {
  return await axiosClient.post("/auth/register", body);
};

const updateUser = async (body: authSchema.UserUpdateInput["body"]) => {
  return await axiosClient.put("/auth", body);
};

const deleteUser = async (params: authSchema.UserDeleteInput["params"]) => {
  return await axiosClient.delete(`/admin/user/${params.id}`);
};

const restoreUser = async (params: authSchema.UserRestoreInput["params"]) => {
  return await axiosClient.patch(`/admin/user/restore/${params.id}`);
};

export default {
  getAll,
  loginWithUsernameAndPassword,
  registerWithUsernameAndPassword,
  updateUser,
  deleteUser,
  restoreUser,
};
