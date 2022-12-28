import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import PaginationResponse from "types/PaginationResponse";
import Singer from "types/singer/Singer";
import Song from "types/song/Song";
import songThunk from "./songThunk";

interface SongState {
  loading: boolean;
  songs: Song<Singer | string>[];
  pagination: PaginationResponse;
}

const initialState: SongState = {
  loading: false,
  songs: [],
  pagination: {
    page: 0,
    limit: 0,
    total: 0,
    skip: 0,
    sort: {},
    totalPages: 0,
  },
};

const songSlice = createSlice({
  name: "song",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(songThunk.getAllSongs.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(songThunk.getAllSongs.fulfilled, (state, action) => {
      state.loading = false;
      state.songs = action.payload.data;
      state.pagination = action.payload.pagination;
    });
    builder.addCase(songThunk.getAllSongs.rejected, (state, action) => {
      state.loading = false;
      toast.error(action.payload as string);
    });
  },
});

export default songSlice.reducer;
