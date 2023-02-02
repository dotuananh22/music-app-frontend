import { createAsyncThunk } from "@reduxjs/toolkit";
import songApi from "api/songApi";
import QueryInput from "types/QueryInput";
import Song from "types/song/Song";

const getAllSongs = createAsyncThunk(
  "song/getAllSongs",
  async (query: QueryInput<Song<string>>, thunkApi) => {
    try {
      const response = await songApi.getAllSongs(query);

      if (!response.success || !response.data) {
        return thunkApi.rejectWithValue(response.message);
      }

      return response.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

const songAdminThunk = {
  getAllSongs,
};

export default songAdminThunk;
