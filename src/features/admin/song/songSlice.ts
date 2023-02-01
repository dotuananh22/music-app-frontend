import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import Singer from "types/singer/Singer";
import Song from "types/song/Song";
import songAdminThunk from "./songThunk";

interface SongState {
  loading: {
    allSongs: boolean;
  };
  songs: Song<Singer>[];
}

const initialState: SongState = {
  loading: {
    allSongs: false,
  },
  songs: [],
};

const songSlice = createSlice({
  name: "song",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(songAdminThunk.getAllSongs.pending, (state) => {
      state.loading.allSongs = true;
    });
    builder.addCase(songAdminThunk.getAllSongs.fulfilled, (state, action) => {
      state.loading.allSongs = false;
      state.songs = action.payload?.data;
    });
    builder.addCase(songAdminThunk.getAllSongs.rejected, (state) => {
      state.loading.allSongs = false;
      toast.error("Failed to get all songs");
    });
  },
});

export default songSlice.reducer;
