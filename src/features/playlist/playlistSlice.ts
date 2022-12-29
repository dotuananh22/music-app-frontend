import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import Playlist from "types/playlist/Playlist";
import Singer from "types/singer/Singer";
import Song from "types/song/Song";
import playlistThunk from "./playlistThunk";

interface PlaylistState {
  loading: {
    getAllPlaylists: boolean;
    getOnePlaylist: boolean;
  };
  playlists: {
    allPlaylists: Playlist<string | Song<string>>[];
    onePlaylist: Playlist<Song<Singer>> | null;
  };
}

const initialState: PlaylistState = {
  loading: {
    getAllPlaylists: false,
    getOnePlaylist: false,
  },
  playlists: {
    allPlaylists: [],
    onePlaylist: null,
  },
};

const playlistSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(playlistThunk.getAllPlaylists.pending, (state) => {
      state.loading.getAllPlaylists = true;
    });
    builder.addCase(
      playlistThunk.getAllPlaylists.fulfilled,
      (state, action) => {
        state.loading.getAllPlaylists = false;
        state.playlists.allPlaylists = action.payload;
      }
    );
    builder.addCase(playlistThunk.getAllPlaylists.rejected, (state) => {
      state.loading.getAllPlaylists = false;
    });

    builder.addCase(playlistThunk.getOnePlaylist.pending, (state) => {
      state.loading.getOnePlaylist = true;
    });
    builder.addCase(playlistThunk.getOnePlaylist.fulfilled, (state, action) => {
      state.loading.getOnePlaylist = false;
      state.playlists.onePlaylist = action.payload;
    });
    builder.addCase(playlistThunk.getOnePlaylist.rejected, (state, action) => {
      state.loading.getOnePlaylist = false;
      toast.error(action.payload as string);
    });
  },
});

export const playlistAction = playlistSlice.actions;
export default playlistSlice.reducer;
