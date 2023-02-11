import { createAsyncThunk } from "@reduxjs/toolkit";
import userApi from "api/userApi";
import QueryInput from "types/QueryInput";
import User from "types/user/User";

const getAllUsers = createAsyncThunk(
  "adminUser/getAllUsers",
  async (query: QueryInput<User>, thunkApi) => {
    try {
      const response = await userApi.getAll(query);

      if (!response.success || !response.data) {
        return thunkApi.rejectWithValue(response.message);
      }

      return response.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

const deleteUser = createAsyncThunk(
  "adminUser/deleteUser",
  async (userId: string, thunkApi) => {
    try {
      const response = await userApi.deleteUser(userId);

      if (!response.success) {
        return thunkApi.rejectWithValue(response.message);
      }

      return response.message;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

const userAdminThunk = {
  getAllUsers,
  deleteUser,
};

export default userAdminThunk;
