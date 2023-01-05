import { createAsyncThunk } from "@reduxjs/toolkit";
import singerApi from "api/singerApi";
import QueryInput from "types/QueryInput";
import Singer from "types/singer/Singer";

const getAllSingers = createAsyncThunk(
  "singer/getAllSingers",
  async (query: QueryInput<Singer>, thunkApi) => {
    try {
      const response = await singerApi.getAllSingers(query);

      if (!response.success || !response.data) {
        return thunkApi.rejectWithValue(response.message);
      }

      return response.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

const getOneSinger = createAsyncThunk(
  "singer/getOneSinger",
  async (id: string, thunkApi) => {
    try {
      const response = await singerApi.getOneSinger(id);

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
  getAllSingers,
  getOneSinger,
};
