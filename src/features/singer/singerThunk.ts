import { createAsyncThunk } from "@reduxjs/toolkit";
import singerApi from "api/singerApi";
import QueryInput from "types/QueryInput";

const getAllSingers = createAsyncThunk(
  "singer/getAllSingers",
  async (query: QueryInput, thunkApi) => {
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

export default {
  getAllSingers,
};
