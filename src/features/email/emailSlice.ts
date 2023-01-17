import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import emailThunk from "./emailThunk";

type EmailState = {
  loading: {
    sendEmail: boolean;
  };
};

const initialState: EmailState = {
  loading: {
    sendEmail: false,
  },
};

const emailSlice = createSlice({
  name: "email",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(emailThunk.sendEmail.pending, (state) => {
      state.loading.sendEmail = true;
    });
    builder.addCase(emailThunk.sendEmail.fulfilled, (state) => {
      state.loading.sendEmail = false;
      toast.success("Email sent successfully");
    });
    builder.addCase(emailThunk.sendEmail.rejected, (state, action) => {
      state.loading.sendEmail = false;
      toast.error(action.payload as string);
    });
  },
});

const emailReducer = emailSlice.reducer;

export default emailReducer;
