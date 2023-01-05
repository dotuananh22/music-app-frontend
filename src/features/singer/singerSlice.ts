import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import PaginationResponse from "types/PaginationResponse";
import Singer from "types/singer/Singer";
import singerThunk from "./singerThunk";

interface SingerState {
  loading: {
    loadingSingers: boolean;
    loadingSinger: boolean;
  };
  singers: {
    getAllSingers: Singer[];
  };
  singer: {
    getOneSinger: Singer | null;
  };
  pagination: PaginationResponse;
}

const initialState: SingerState = {
  loading: {
    loadingSingers: false,
    loadingSinger: false,
  },
  singers: {
    getAllSingers: [],
  },
  singer: {
    getOneSinger: null,
  },
  pagination: {
    page: 0,
    limit: 0,
    total: 0,
    skip: 0,
    sort: {},
    totalPages: 0,
  },
};

const singerSlice = createSlice({
  name: "singer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(singerThunk.getAllSingers.pending, (state) => {
      state.loading.loadingSingers = true;
    });
    builder.addCase(singerThunk.getAllSingers.fulfilled, (state, action) => {
      state.loading.loadingSingers = false;
      state.singers.getAllSingers = action.payload.data;
      state.pagination = action.payload.pagination;
    });
    builder.addCase(singerThunk.getAllSingers.rejected, (state, action) => {
      state.loading.loadingSingers = false;
    });

    //get one singer
    builder.addCase(singerThunk.getOneSinger.pending, (state) => {
      state.loading.loadingSinger = true;
    });
    builder.addCase(singerThunk.getOneSinger.fulfilled, (state, action) => {
      state.loading.loadingSinger = false;
      state.singer.getOneSinger = action.payload;
    });
    builder.addCase(singerThunk.getOneSinger.rejected, (state, action) => {
      state.loading.loadingSinger = false;
      toast.error(action.payload as string);
    });
  },
});

export default singerSlice.reducer;
