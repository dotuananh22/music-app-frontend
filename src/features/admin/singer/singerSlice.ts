import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import Singer from "types/singer/Singer";
import singerAdminThunk from "./singerThunk";

interface SingerState {
  loading: {
    allSingers: boolean;
  };
  singers: Singer[];
}

const initialState: SingerState = {
  loading: {
    allSingers: false,
  },
  singers: [],
};

const singerSlice = createSlice({
  name: "singer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // get all singers
    builder.addCase(singerAdminThunk.getAllSingers.pending, (state) => {
      state.loading.allSingers = true;
    });
    builder.addCase(
      singerAdminThunk.getAllSingers.fulfilled,
      (state, action) => {
        state.loading.allSingers = false;
        state.singers = action.payload?.data;
      }
    );
    builder.addCase(singerAdminThunk.getAllSingers.rejected, (state) => {
      state.loading.allSingers = false;
      toast.error("Failed to get all singers");
    });
  },
});

export default singerSlice.reducer;
