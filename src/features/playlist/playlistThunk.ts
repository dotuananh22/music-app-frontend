import { createAsyncThunk } from "@reduxjs/toolkit";
import playlistApi from "api/playlistApi";

const getAllPlaylists = createAsyncThunk(
  "playlist/getAllPlaylist",
  async (_, thunkApi) => {
    try {
      const response = await playlistApi.getAllPlaylists();

      if (!response.success || !response.data) {
        return thunkApi.rejectWithValue(response.message);
      }

      return response.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

const getOnePlaylist = createAsyncThunk(
  "playlist/getOnePlaylist",
  async (id: string, thunkApi) => {
    try {
      const response = await playlistApi.getOnePlaylist(id);

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
  getAllPlaylists,
  getOnePlaylist,
};
