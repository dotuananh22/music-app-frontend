import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import Singer from "types/singer/Singer";
import singerAdminThunk from "./singerThunk";

interface SingerState {
  loading: {
    allSingers: boolean;
    searchSingers: boolean;
    createSinger: boolean;
    updateSinger: boolean;
  };
  singers: Singer[];
}

const initialState: SingerState = {
  loading: {
    allSingers: false,
    searchSingers: false,
    createSinger: false,
    updateSinger: false,
  },
  singers: [],
};

const singerSlice = createSlice({
  name: "adminSinger",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // get all singers
    builder.addCase(singerAdminThunk.getAllSingers.pending, (state) => {
      state.loading.allSingers = true;
    });
    builder.addCase(
      singerAdminThunk.getAllSingers.fulfilled,
      (state, action) => {
        state.loading.allSingers = false;
        state.singers = action.payload?.data;
      }
    );
    builder.addCase(singerAdminThunk.getAllSingers.rejected, (state) => {
      state.loading.allSingers = false;
      toast.error("Failed to get all singers");
    });

    //create singer
    builder.addCase(singerAdminThunk.createSinger.pending, (state) => {
      state.loading.createSinger = true;
    });
    builder.addCase(
      singerAdminThunk.createSinger.fulfilled,
      (state, action) => {
        state.loading.createSinger = false;
        state.singers = [...state.singers, action.payload];
        toast.success("Created singer successfully");
      }
    );
    builder.addCase(singerAdminThunk.createSinger.rejected, (state, action) => {
      state.loading.createSinger = false;
      toast.error(action.payload as string);
    });

    // update singer
    builder.addCase(singerAdminThunk.updateSinger.pending, (state) => {
      state.loading.updateSinger = true;
    });
    builder.addCase(
      singerAdminThunk.updateSinger.fulfilled,
      (state, action) => {
        state.loading.updateSinger = false;
        state.singers = state.singers.map((singer) => {
          if (singer._id === action.meta.arg.id) {
            singer = {
              ...action.payload,
            };

            return singer;
          }

          return singer;
        });

        toast.success("Updated singer successfully");
      }
    );
    builder.addCase(singerAdminThunk.updateSinger.rejected, (state, action) => {
      state.loading.updateSinger = false;
      toast.error(action.payload as string);
    });
  },
});

export default singerSlice.reducer;
