import { createAsyncThunk } from "@reduxjs/toolkit";
import singerApi from "api/singerApi";
import { singerSchema } from "schema";
import QueryInput from "types/QueryInput";
import Singer from "types/singer/Singer";

const getAllSingers = createAsyncThunk(
  "adminSinger/getAllSingers",
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

const createSinger = createAsyncThunk(
  "adminSinger/createSinger",
  async (data: singerSchema.SingerCreateInput["body"], thunkApi) => {
    try {
      const response = await singerApi.createSinger(data);

      if (!response.success || !response.data) {
        return thunkApi.rejectWithValue(response.message);
      }

      return response.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

const updateSinger = createAsyncThunk(
  "adminSinger/updateSinger",
  async (
    data: { id: string; data: singerSchema.SingerUpdateInput["body"] },
    thunkApi
  ) => {
    try {
      const response = await singerApi.updateSinger(data.id, data.data);

      if (!response.success || !response.data) {
        return thunkApi.rejectWithValue(response.message);
      }

      return response.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
const singerAdminThunk = {
  getAllSingers,
  createSinger,
  updateSinger,
};

export default singerAdminThunk;
