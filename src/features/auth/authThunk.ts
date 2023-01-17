import { createAsyncThunk } from "@reduxjs/toolkit";
import ApiResponse from "../../types/ApiResponse";
import User from "../../types/user/User";
import userApi from "../../api/userApi";
import { userSchema } from "schema";
import setAuthToken from "utils/setAuthToken";

const getUser = createAsyncThunk("auth/getUser", async (_: void, thunkApi) => {
  try {
    const response: ApiResponse<User & { token: string }> =
      await userApi.getUser();

    if (!response.success || !response.data) {
      return thunkApi.rejectWithValue(response.message);
    }

    setAuthToken(response.data.token);

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

const logout = createAsyncThunk("auth/logout", async (_: void, thunkApi) => {
  try {
    const response: ApiResponse<User> = await userApi.logout();

    if (!response.success) {
      return thunkApi.rejectWithValue(response.message);
    }

    return response.message;
  } catch (error: any) {
    return thunkApi.rejectWithValue(error.message);
  }
});

const update = createAsyncThunk(
  "auth/update",
  async (user: userSchema.UserUpdateInput, thunkApi) => {
    try {
      const response: ApiResponse<User> = await userApi.updateUser(user);

      if (!response.success || !response.data) {
        return thunkApi.rejectWithValue(response.message);
      }

      return response.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

const updateUserPassword = createAsyncThunk(
  "auth/updatePassword",
  async (user: userSchema.UserUpdatePasswordInput, thunkApi) => {
    try {
      const response: ApiResponse<undefined> = await userApi.updateUserPassword(
        user
      );

      if (!response.success) {
        return thunkApi.rejectWithValue(response.message);
      }

      return response.message;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export default {
  login,
  logout,
  getUser,
  update,
  updateUserPassword,
};
