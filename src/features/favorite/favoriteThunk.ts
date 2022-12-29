import { createAsyncThunk } from "@reduxjs/toolkit";
import favoriteApi from "api/favoriteApi";

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

export default {
  getAllFavoriteSongIds,
  getAllFavoriteSongs,
};
