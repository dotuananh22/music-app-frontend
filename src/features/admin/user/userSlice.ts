import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import User from "types/user/User";
import userAdminThunk from "./userThunk";

interface UserState {
  loading: {
    getAllUsers: boolean;
    deleteUser: boolean;
  };
  users: User[];
}

const initialState: UserState = {
  loading: {
    getAllUsers: false,
    deleteUser: false,
  },
  users: [],
};

const userSlice = createSlice({
  name: "adminUser",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userAdminThunk.getAllUsers.pending, (state) => {
      state.loading.getAllUsers = true;
    });
    builder.addCase(userAdminThunk.getAllUsers.fulfilled, (state, action) => {
      state.loading.getAllUsers = false;
      state.users = action.payload?.data;
    });
    builder.addCase(userAdminThunk.getAllUsers.rejected, (state) => {
      state.loading.getAllUsers = false;
    });

    builder.addCase(userAdminThunk.deleteUser.pending, (state) => {
      state.loading.deleteUser = true;
    });
    builder.addCase(userAdminThunk.deleteUser.fulfilled, (state, action) => {
      state.loading.deleteUser = false;
      state.users = state.users.filter((user) => user._id !== action.meta.arg);
      toast.success(action.payload);
    });
    builder.addCase(userAdminThunk.deleteUser.rejected, (state) => {
      state.loading.deleteUser = false;
      toast.error("Failed to delete user");
    });
  },
});

export default userSlice.reducer;
