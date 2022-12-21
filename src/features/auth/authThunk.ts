import { createAsyncThunk } from "@reduxjs/toolkit";
import ApiResponse from "../../types/ApiResponse";
import User from "../../types/user/User";
import userApi from "../../api/userApi";
import { userSchema } from "schema";

const getUser = createAsyncThunk("auth/getUser", async (_: void, thunkApi) => {
  try {
    const response: ApiResponse<User> = await userApi.getUser();

    if (!response.success || !response.data) {
      return thunkApi.rejectWithValue(response.message);
    }

    return response.data;
  } catch (error: any) {
    return thunkApi.rejectWithValue(error.message);
  }
});

const login = createAsyncThunk(
  "auth/login",
  async (loginBody: userSchema.UserLoginInput, thunkAPI) => {
    try {
      const response: ApiResponse<User> =
        await userApi.loginWithUsernameAndPassword(loginBody);

      console.log(response);
      if (!response.success || !response.data) {
        return thunkAPI.rejectWithValue(response.message);
      }

      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export default {
  login,
  getUser,
};
