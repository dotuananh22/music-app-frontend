import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import Favorite from "types/favorite/Favorite";
import FavoriteType from "types/favorite/FavoriteType";
import Singer from "types/singer/Singer";
import Song from "types/song/Song";
import favoriteThunk from "./favoriteThunk";
import { remove } from "lodash";
import songApi from "api/songApi";

type FavoriteState = {
  loading: {
    getFavoriteSongs: boolean;
    getFavoriteSongIds: boolean;
  };
  favorites: {
    favoriteSongs: Favorite<Song<Singer>> | null;
    favoriteSongIds: Favorite<string> | null;
  };
};

const initialState: FavoriteState = {
  loading: {
    getFavoriteSongs: false,
    getFavoriteSongIds: false,
  },
  favorites: {
    favoriteSongs: null,
    favoriteSongIds: null,
  },
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(favoriteThunk.getAllFavoriteSongIds.pending, (state) => {
      state.loading.getFavoriteSongIds = true;
    });
    builder.addCase(
      favoriteThunk.getAllFavoriteSongIds.fulfilled,
      (state, action) => {
        state.loading.getFavoriteSongIds = false;
        state.favorites.favoriteSongIds = action.payload;
      }
    );
    builder.addCase(favoriteThunk.getAllFavoriteSongIds.rejected, (state) => {
      state.loading.getFavoriteSongIds = false;
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

    builder.addCase(
      favoriteThunk.addFavoriteSong.fulfilled,
      (state, action) => {
        switch (action.meta.arg.type) {
          case FavoriteType.AddToFavoriteIds:
            if (!state.favorites.favoriteSongIds) return;
            state.favorites.favoriteSongIds.songs.push(action.payload._id);
            state.favorites.favoriteSongIds.totalTime +=
              action.payload.songTime;
            songApi.updateLike(action.payload._id, 1);
            break;
          case FavoriteType.AddToFavoriteSongs:
            if (!state.favorites.favoriteSongs) return;
            state.favorites.favoriteSongs.songs.push(action.payload);
            state.favorites.favoriteSongs.totalTime += action.payload.songTime;
            songApi.updateLike(action.payload._id, 1);
            break;
          default:
            break;
        }
      }
    );
    builder.addCase(favoriteThunk.addFavoriteSong.rejected, (state) => {
      toast.error("Add favorite song failed");
    });

    builder.addCase(
      favoriteThunk.removeFavoriteSong.fulfilled,
      (state, action) => {
        switch (action.meta.arg.type) {
          case FavoriteType.RemoveFavoriteIds:
            if (!state.favorites.favoriteSongIds) return;

            remove(state.favorites.favoriteSongIds.songs || [], (songId) => {
              return songId === action.payload._id;
            });
            state.favorites.favoriteSongIds.totalTime -=
              action.payload.songTime;
            songApi.updateLike(action.payload._id, -1);

            break;
          case FavoriteType.RemoveFavoriteSongs:
            if (!state.favorites.favoriteSongs) return;

            remove(
              state.favorites.favoriteSongs.songs || [],
              (song: Song<Singer>) => {
                return song._id === action.payload._id;
              }
            );

            state.favorites.favoriteSongs.totalTime -= action.payload.songTime;
            songApi.updateLike(action.payload._id, -1);

            break;
          default:
            break;
        }
      }
    );
    builder.addCase(
      favoriteThunk.removeFavoriteSong.rejected,
      (state, action) => {
        toast.error(action.payload as string);
      }
    );

    // remove all favorite
    builder.addCase(
      favoriteThunk.removeAllFavoriteSong.fulfilled,
      (state, action) => {
        state.favorites.favoriteSongs = action.payload;
        toast.success("Remove all favorite song success");
      }
    );
    builder.addCase(
      favoriteThunk.removeAllFavoriteSong.rejected,
      (state, action) => {
        toast.error(action.payload as string);
      }
    );
  },
});

export default favoriteSlice.reducer;
