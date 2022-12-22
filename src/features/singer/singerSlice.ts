import { createSlice } from "@reduxjs/toolkit";
import PaginationResponse from "types/PaginationResponse";
import Singer from "types/singer/Singer";
import singerThunk from "./singerThunk";

interface SingerState {
  loading: boolean;
  singers: Singer[];
  pagination: PaginationResponse;
}

const initialState: SingerState = {
  loading: false,
  singers: [],
  pagination: {
    page: 0,
    limit: 0,
    total: 0,
    skip: 0,
    sort: {},
    totalPages: 0,
  },
};

const singerSlice = createSlice({
  name: "singer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(singerThunk.getAllSingers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(singerThunk.getAllSingers.fulfilled, (state, action) => {
      state.loading = false;
      state.singers = action.payload.data;
      state.pagination = action.payload.pagination;
    });
    builder.addCase(singerThunk.getAllSingers.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export default singerSlice.reducer;
