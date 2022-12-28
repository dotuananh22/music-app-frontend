import { createAsyncThunk } from "@reduxjs/toolkit";
import songApi from "api/songApi";
import ApiResponse from "types/ApiResponse";
import QueryInput from "types/QueryInput";
import Singer from "types/singer/Singer";
import GetAllSongInput from "types/song/GetAllSongInput";
import GetAllSongResponse from "types/song/GetAllSongResponse";
import Song from "types/song/Song";
import SongType from "types/song/SongType";

const getAllSongs = createAsyncThunk(
  "song/getAllSongs",
  async (songQuery: GetAllSongInput, thunkApi) => {
    try {
      const response: ApiResponse<GetAllSongResponse> =
        await songApi.getAllSongs(songQuery.query);

      if (!response.success || !response.data) {
        return thunkApi.rejectWithValue(response.message);
      }

      return {
        data: response.data,
        type: songQuery.type,
      };
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export default {
  getAllSongs,
};
