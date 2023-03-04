import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import Singer from "types/singer/Singer";
import Song from "types/song/Song";
import songAdminThunk from "./songThunk";

interface SongState {
  loading: {
    allSongs: boolean;
    deleteSong: boolean;
    updateSong: boolean;
  };
  songs: Song<Singer>[];
}

const initialState: SongState = {
  loading: {
    allSongs: false,
    deleteSong: false,
    updateSong: false,
  },
  songs: [],
};

const songSlice = createSlice({
  name: "adminSong",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Get all songs
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

    // Update song by id
    builder.addCase(songAdminThunk.updateSongById.pending, (state) => {
      state.loading.updateSong = true;
    });
    builder.addCase(
      songAdminThunk.updateSongById.fulfilled,
      (state, action) => {
        state.loading.updateSong = false;
        state.songs = state.songs.map((song) => {
          if (song._id === action.meta.arg.id) {
            // @ts-ignore
            song = {
              // @ts-ignore
              ...action.payload,
              singers: song.singers,
            };

            return song;
          }
          return song;
        });
        toast.success("Update song successfully");
      }
    );
    builder.addCase(songAdminThunk.updateSongById.rejected, (state) => {
      state.loading.updateSong = false;
      toast.error("Failed to update song");
    });

    // Delete song by id
    builder.addCase(songAdminThunk.deleteSongById.pending, (state) => {
      state.loading.deleteSong = true;
    });
    builder.addCase(
      songAdminThunk.deleteSongById.fulfilled,
      (state, action) => {
        state.loading.deleteSong = false;
        state.songs = state.songs.filter(
          (song) => song._id !== action.meta.arg
        );
        toast.success(action.payload);
      }
    );
    builder.addCase(songAdminThunk.deleteSongById.rejected, (state) => {
      state.loading.deleteSong = false;
      toast.error("Failed to delete song");
    });
  },
});

export default songSlice.reducer;
