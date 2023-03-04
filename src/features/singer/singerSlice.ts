import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import PaginationResponse from "types/PaginationResponse";
import Singer from "types/singer/Singer";
import singerThunk from "./singerThunk";

interface SingerState {
  loading: {
    loadingSingers: boolean;
    loadingSinger: boolean;
    searchSingers: boolean;
  };
  singers: {
    getAllSingers: Singer[];
    searchSingers: Singer[];
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
    searchSingers: false,
  },
  singers: {
    getAllSingers: [],
    searchSingers: [],
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

    //search singers
    builder.addCase(singerThunk.searchSingers.pending, (state) => {
      state.loading.searchSingers = true;
    });
    builder.addCase(
      singerThunk.searchSingers.fulfilled,
      (state, action: PayloadAction<Singer[]>) => {
        state.loading.searchSingers = false;
        state.singers.searchSingers = action.payload;
      }
    );
    builder.addCase(singerThunk.searchSingers.rejected, (state, action) => {
      state.loading.searchSingers = false;
      toast.error(action.payload as string);
    });
  },
});

export default singerSlice.reducer;
