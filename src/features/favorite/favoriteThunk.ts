import { createAsyncThunk } from "@reduxjs/toolkit";
import favoriteApi from "api/favoriteApi";
import FavoriteType from "types/favorite/FavoriteType";

const getAllFavoriteSongIds = createAsyncThunk(
  "favorite/getAllFavoriteSongIds",
  async (_: void, thunkApi) => {
    try {
      const response = await favoriteApi.getAllFavoriteSongIds();

      if (!response.success || !response.data) {
        return thunkApi.rejectWithValue(response.message);
      }

      return response.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

const getAllFavoriteSongs = createAsyncThunk(
  "favorite/getAllFavoriteSongs",
  async (_: void, thunkApi) => {
    try {
      const response = await favoriteApi.getAllFavoriteSongs();

      if (!response.success || !response.data) {
        return thunkApi.rejectWithValue(response.message);
      }

      return response.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

const addFavoriteSong = createAsyncThunk(
  "favorite/addFavoriteSong",
  async (
    {
      songId,
      type,
    }: {
      songId: string;
      type: FavoriteType;
    },
    thunkApi
  ) => {
    try {
      const response = await favoriteApi.addFavoriteSong(songId);

      if (!response.success || !response.data) {
        return thunkApi.rejectWithValue(response.message);
      }

      return response.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

const removeFavoriteSong = createAsyncThunk(
  "favorite/removeFavoriteSong",
  async (
    {
      songId,
      type,
    }: {
      songId: string;
      type: FavoriteType;
    },
    thunkApi
  ) => {
    try {
      const response = await favoriteApi.removeFavoriteSong(songId);

      if (!response.success || !response.data) {
        return thunkApi.rejectWithValue(response.message);
      }

      return response.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

const removeAllFavoriteSong = createAsyncThunk(
  "favorite/removeAllFavoriteSong",
  async (_: void, thunkApi) => {
    try {
      const response = await favoriteApi.removeAllFavoriteSong();

      if (!response.success || !response.data) {
        return thunkApi.rejectWithValue(response.message);
      }

      return response.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export default {
  getAllFavoriteSongIds,
  getAllFavoriteSongs,
  addFavoriteSong,
  removeFavoriteSong,
  removeAllFavoriteSong,
};
