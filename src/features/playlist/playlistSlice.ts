import { createSlice } from "@reduxjs/toolkit";
import { remove } from "lodash";
import { toast } from "react-toastify";
import Playlist from "types/playlist/Playlist";
import Singer from "types/singer/Singer";
import Song from "types/song/Song";
import playlistThunk from "./playlistThunk";

interface PlaylistState {
  loading: {
    getAllPlaylists: boolean;
    getOnePlaylist: boolean;
    getPlaylistsNotContainSong: boolean;
  };
  playlists: {
    allPlaylists: Playlist<string | Song<string>>[];
    onePlaylist: Playlist<Song<Singer>> | null;
    playlistsNotContainSong: Playlist<string>[];
  };
}

const initialState: PlaylistState = {
  loading: {
    getAllPlaylists: false,
    getOnePlaylist: false,
    getPlaylistsNotContainSong: false,
  },
  playlists: {
    allPlaylists: [],
    onePlaylist: null,
    playlistsNotContainSong: [],
  },
};

const playlistSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Get all playlists
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

    // Get one playlist
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

    // Get playlists not contain song
    builder.addCase(
      playlistThunk.getPlaylistsNotContainSong.pending,
      (state) => {
        state.loading.getPlaylistsNotContainSong = true;
      }
    );
    builder.addCase(
      playlistThunk.getPlaylistsNotContainSong.fulfilled,
      (state, action) => {
        state.loading.getPlaylistsNotContainSong = false;
        state.playlists.playlistsNotContainSong = action.payload;
      }
    );
    builder.addCase(
      playlistThunk.getPlaylistsNotContainSong.rejected,
      (state) => {
        state.loading.getPlaylistsNotContainSong = false;
      }
    );

    // Add songs to playlist
    builder.addCase(
      playlistThunk.addSongsToPlaylist.rejected,
      (state, action) => {
        toast.error(action.payload as string);
      }
    );

    //Remove song from playlist
    builder.addCase(
      playlistThunk.removeSongFromPlaylist.fulfilled,
      (state, action) => {
        const { songIds } = action.meta.arg;

        if (!state.playlists.onePlaylist) return;

        remove(state.playlists.onePlaylist.songs, (song) =>
          songIds.includes(song._id)
        );
      }
    );
    builder.addCase(
      playlistThunk.removeSongFromPlaylist.rejected,
      (state, action) => {
        toast.error(action.payload as string);
      }
    );

    // Create new playlist
    builder.addCase(playlistThunk.createPlaylist.fulfilled, (state, action) => {
      state.playlists.allPlaylists = [
        action.payload,
        ...state.playlists.allPlaylists,
      ];
    });
    builder.addCase(playlistThunk.createPlaylist.rejected, (state, action) => {
      toast.error(action.payload as string);
    });

    // Update playlist
    builder.addCase(playlistThunk.updatePlaylist.fulfilled, (state, action) => {
      const index = state.playlists.allPlaylists.findIndex(
        (playlist) => playlist._id === action.meta.arg.id
      );
      state.playlists.allPlaylists[index] = action.payload;
    });
    builder.addCase(playlistThunk.updatePlaylist.rejected, (state, action) => {
      toast.error(action.payload as string);
    });
  },
});

export const playlistAction = playlistSlice.actions;
export default playlistSlice.reducer;
