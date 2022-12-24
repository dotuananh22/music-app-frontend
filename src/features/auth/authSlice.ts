import { createSlice } from "@reduxjs/toolkit";
import User from "types/user/User";
import authThunk from "./authThunk";
import { toast } from "react-toastify";

interface UserState {
  loading: boolean;
  user: User | null;
  loggedIn: boolean;
}

const initialState: UserState = {
  loading: false,
  user: null,
  loggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // login: (state, action) => {
    //   state.loading = true;
    // },
    // loginSuccess: (state, action) => {
    //   state.loading = false;
    //   state.user = action.payload;
    //   state.loggedIn = true;
    // },
    // loginFailure: (state, action) => {
    //   state.loading = false;
    // },

    getUserLoading: (state) => {
      state.loading = true;
    },

    getUserSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.loggedIn = true;
    },

    getUserFailure: (state) => {
      state.loading = false;
      state.user = null;
      state.loggedIn = false;
    },
  },
  extraReducers: (builder) => {
    // login
    builder.addCase(authThunk.login.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(authThunk.login.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.loggedIn = true;
    });
    builder.addCase(authThunk.login.rejected, (state, action) => {
      state.loading = false;
      toast.error(action.payload as string);
    });

    // getUser
    builder.addCase(authThunk.getUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(authThunk.getUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.loggedIn = true;
    });
    builder.addCase(authThunk.getUser.rejected, (state, action) => {
      state.loading = false;
      state.user = null;
      state.loggedIn = false;
    });

    // logout
    builder.addCase(authThunk.logout.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(authThunk.logout.fulfilled, (state, action) => {
      state.loading = false;
      state.user = null;
      state.loggedIn = false;
    });
    builder.addCase(authThunk.logout.rejected, (state, action) => {
      state.loading = false;
      state.user = null;
      state.loggedIn = false;
    });
  },
});

// export const { login, loginSuccess, loginFailure } = authSlice.actions;
export const authAction = authSlice.actions;
export default authSlice.reducer;
