import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import Singer from "types/singer/Singer";
import Song from "types/song/Song";
import songThunk from "./songThunk";

interface SongState {
  loading: boolean;
  songs: Song<Singer | string>[];
}

const initialState: SongState = {
  loading: false,
  songs: [],
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
      state.songs = action.payload;
    });
    builder.addCase(songThunk.getAllSongs.rejected, (state, action) => {
      state.loading = false;
      toast.error(action.payload as string);
    });
  },
});

export default songSlice.reducer;
