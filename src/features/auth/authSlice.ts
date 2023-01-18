import { createSlice } from "@reduxjs/toolkit";
import User from "types/user/User";
import authThunk from "./authThunk";
import { toast } from "react-toastify";

interface UserState {
  loading: {
    login: boolean;
    getUser: boolean;
    updateUser: boolean;
    updateUserPassword: boolean;
    logout: boolean;
  };
  user: User | null;
  loggedIn: boolean;
}

const initialState: UserState = {
  loading: {
    login: false,
    getUser: false,
    updateUser: false,
    updateUserPassword: false,
    logout: false,
  },
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
      state.loading.getUser = true;
    },
    getUserSuccess: (state, action) => {
      state.loading.getUser = false;
      state.user = action.payload;
      state.loggedIn = true;
    },
    getUserFailure: (state) => {
      state.loading.getUser = false;
      state.user = null;
      state.loggedIn = false;
    },
  },
  extraReducers: (builder) => {
    // login
    builder.addCase(authThunk.login.pending, (state) => {
      state.loading.login = true;
    });
    builder.addCase(authThunk.login.fulfilled, (state, action) => {
      state.loading.login = false;
      state.user = action.payload;
      state.loggedIn = true;
    });
    builder.addCase(authThunk.login.rejected, (state, action) => {
      state.loading.login = false;
      toast.error(action.payload as string);
    });

    // register
    builder.addCase(authThunk.register.pending, (state) => {
      state.loading.login = true;
    });
    builder.addCase(authThunk.register.fulfilled, (state, action) => {
      state.loading.login = false;
      // state.user = action.payload;
      // state.loggedIn = true;
    });
    builder.addCase(authThunk.register.rejected, (state, action) => {
      state.loading.login = false;
      toast.error(action.payload as string);
    });

    // getUser
    builder.addCase(authThunk.getUser.pending, (state) => {
      state.loading.getUser = true;
    });
    builder.addCase(authThunk.getUser.fulfilled, (state, action) => {
      state.loading.getUser = false;
      state.user = action.payload;
      state.loggedIn = true;
    });
    builder.addCase(authThunk.getUser.rejected, (state, action) => {
      state.loading.getUser = false;
      state.user = null;
      state.loggedIn = false;
    });

    // updateUser
    builder.addCase(authThunk.update.pending, (state) => {
      state.loading.updateUser = true;
    });
    builder.addCase(authThunk.update.fulfilled, (state, action) => {
      state.loading.updateUser = false;
      state.user = {
        ...state.user,
        ...action.payload,
      };
      toast.success("Update user successfully");
    });
    builder.addCase(authThunk.update.rejected, (state, action) => {
      state.loading.updateUser = false;
      toast.error(action.payload as string);
    });

    // updatePassword
    builder.addCase(authThunk.updateUserPassword.pending, (state) => {
      state.loading.updateUserPassword = true;
    });
    builder.addCase(authThunk.updateUserPassword.fulfilled, (state, action) => {
      state.loading.updateUserPassword = false;
      toast.success("Update password successfully, you need to login again");
    });
    builder.addCase(authThunk.updateUserPassword.rejected, (state, action) => {
      state.loading.updateUserPassword = false;
      toast.error(action.payload as string);
    });

    // logout
    builder.addCase(authThunk.logout.pending, (state) => {
      state.loading.logout = true;
    });
    builder.addCase(authThunk.logout.fulfilled, (state, action) => {
      state.loading.logout = false;
      state.user = null;
      state.loggedIn = false;
    });
    builder.addCase(authThunk.logout.rejected, (state, action) => {
      state.loading.logout = false;
      state.user = null;
      state.loggedIn = false;
    });
  },
});

// export const { login, loginSuccess, loginFailure } = authSlice.actions;
export const authAction = authSlice.actions;
export default authSlice.reducer;
