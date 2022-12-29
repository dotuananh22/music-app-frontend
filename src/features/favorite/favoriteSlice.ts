import { createSlice } from "@reduxjs/toolkit";
import Favorite from "types/favorite/Favorite";
import Singer from "types/singer/Singer";
import Song from "types/song/Song";
import favoriteThunk from "./favoriteThunk";

type FavoriteState = {
  loading: {
    getFavoriteSongs: boolean;
  };
  favorites: {
    favoriteSongs: Favorite<Song<Singer> | string> | null;
  };
};

const initialState: FavoriteState = {
  loading: {
    getFavoriteSongs: false,
  },
  favorites: {
    favoriteSongs: null,
  },
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(favoriteThunk.getAllFavoriteSongIds.pending, (state) => {
      state.loading.getFavoriteSongs = true;
    });
    builder.addCase(
      favoriteThunk.getAllFavoriteSongIds.fulfilled,
      (state, action) => {
        state.loading.getFavoriteSongs = false;
        state.favorites.favoriteSongs = action.payload;
      }
    );
    builder.addCase(favoriteThunk.getAllFavoriteSongIds.rejected, (state) => {
      state.loading.getFavoriteSongs = false;
    });

    builder.addCase(favoriteThunk.getAllFavoriteSongs.pending, (state) => {
      state.loading.getFavoriteSongs = true;
    });
    builder.addCase(
      favoriteThunk.getAllFavoriteSongs.fulfilled,
      (state, action) => {
        state.loading.getFavoriteSongs = false;
        state.favorites.favoriteSongs = action.payload;
      }
    );
    builder.addCase(favoriteThunk.getAllFavoriteSongs.rejected, (state) => {
      state.loading.getFavoriteSongs = false;
    });
  },
});

export default favoriteSlice.reducer;
