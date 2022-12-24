import { createAsyncThunk } from "@reduxjs/toolkit";
import songApi from "api/songApi";
import ApiResponse from "types/ApiResponse";
import QueryInput from "types/QueryInput";
import Singer from "types/singer/Singer";
import Song from "types/song/Song";

const getAllSongs = createAsyncThunk(
  "song/getAllSongs",
  async (query: QueryInput<Song<string>>, thunkApi) => {
    try {
      const response: ApiResponse<Song<Singer>[]> = await songApi.getAllSongs(
        query
      );

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
  getAllSongs,
};
