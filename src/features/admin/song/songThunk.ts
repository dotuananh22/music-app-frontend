import { createAsyncThunk } from "@reduxjs/toolkit";
import songApi from "api/songApi";
import { songSchema } from "schema";
import QueryInput from "types/QueryInput";
import Song from "types/song/Song";

const getAllSongs = createAsyncThunk(
  "adminSong/getAllSongs",
  async (query: QueryInput<Song<string>>, thunkApi) => {
    try {
      const response = await songApi.getAllSongs(query);

      console.log(response.data);

      if (!response.success || !response.data) {
        return thunkApi.rejectWithValue(response.message);
      }

      return response.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

const updateSongById = createAsyncThunk(
  "adminSong/updateSongById",
  async (
    {
      id,
      updateInput,
    }: { id: string; updateInput: songSchema.UpdateSongInput },
    thunkApi
  ) => {
    try {
      const response = await songApi.updateSongById(id, updateInput);

      if (!response.success || !response.data) {
        return thunkApi.rejectWithValue(response.message);
      }

      return response.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

const deleteSongById = createAsyncThunk(
  "adminSong/deleteSongById",
  async (songId: string, thunkApi) => {
    try {
      const response = await songApi.deleteSongById(songId);

      if (!response.success) {
        return thunkApi.rejectWithValue(response.message);
      }

      return response.message;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

const songAdminThunk = {
  getAllSongs,
  updateSongById,
  deleteSongById,
};

export default songAdminThunk;
