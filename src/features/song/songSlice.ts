import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import PaginationResponse from "types/PaginationResponse";
import Singer from "types/singer/Singer";
import Song from "types/song/Song";
import SongType from "types/song/SongType";
import songThunk from "./songThunk";

interface SongState {
  loading: {
    getAllSongs: boolean;
    getAllTopSingleSongs: boolean;
    getAllNewSingleSongs: boolean;
    getSongById: boolean;
  };
  songs: {
    allSongs: Song<Singer | string>[];
    topSingleSongs: Song<Singer | string>[];
    newSingleSongs: Song<Singer | string>[];
  };
  song: {
    chosenSong: Song<Singer> | null;
    songById: Song<Singer> | null;
  };
  pagination: PaginationResponse;
}

const initialState: SongState = {
  loading: {
    getAllSongs: false,
    getAllTopSingleSongs: false,
    getAllNewSingleSongs: false,
    getSongById: false,
  },
  songs: {
    allSongs: [],
    topSingleSongs: [],
    newSingleSongs: [],
  },
  song: {
    chosenSong: null,
    songById: null,
  },
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
  reducers: {
    setChosenSong(state, action) {
      state.song.chosenSong = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(songThunk.getAllSongs.pending, (state, action) => {
      switch (action.meta.arg.type) {
        case SongType.ALL:
          state.loading.getAllSongs = true;
          break;
        case SongType.TOP_SINGLE:
          state.loading.getAllTopSingleSongs = true;
          break;
        case SongType.NEW_SINGLE:
          state.loading.getAllNewSingleSongs = true;
          break;
        default:
          break;
      }
    });
    builder.addCase(songThunk.getAllSongs.fulfilled, (state, action) => {
      switch (action.payload.type) {
        case SongType.ALL:
          state.loading.getAllSongs = false;
          state.songs.allSongs = action.payload.data.data;
          state.pagination = action.payload.data.pagination;
          break;
        case SongType.TOP_SINGLE:
          state.loading.getAllTopSingleSongs = false;
          state.songs.topSingleSongs = action.payload.data.data;
          state.pagination = action.payload.data.pagination;
          break;
        case SongType.NEW_SINGLE:
          state.loading.getAllNewSingleSongs = false;
          state.songs.newSingleSongs = action.payload.data.data;
          state.pagination = action.payload.data.pagination;
          break;
        default:
          break;
      }
    });
    builder.addCase(songThunk.getAllSongs.rejected, (state, action) => {
      switch (action.meta.arg.type) {
        case SongType.ALL:
          state.loading.getAllSongs = false;
          break;
        case SongType.TOP_SINGLE:
          state.loading.getAllTopSingleSongs = true;
          break;
        case SongType.NEW_SINGLE:
          state.loading.getAllNewSingleSongs = true;
          break;
        default:
          break;
      }
      toast.error(action.payload as string);
    });

    // get song by id
    builder.addCase(songThunk.getSongById.pending, (state, action) => {
      state.loading.getSongById = true;
    });
    builder.addCase(songThunk.getSongById.fulfilled, (state, action) => {
      state.loading.getSongById = false;
      state.song.songById = action.payload;
    });
    builder.addCase(songThunk.getSongById.rejected, (state, action) => {
      state.loading.getSongById = false;
      toast.error(action.payload as string);
    });
  },
});

export const { setChosenSong } = songSlice.actions;
export default songSlice.reducer;
