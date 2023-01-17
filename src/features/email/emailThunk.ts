import { createAsyncThunk } from "@reduxjs/toolkit";
import emailApi from "api/emailApi";
import { emailSchema } from "schema";

const sendEmail = createAsyncThunk(
  "email/sendEmail",
  async (body: emailSchema.SendEmailInput, thunkApi) => {
    try {
      const response = await emailApi.sendEmail(body);

      if (!response.success) {
        return thunkApi.rejectWithValue(response.message);
      }

      return response.message;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

const emailThunk = {
  sendEmail,
};

export default emailThunk;
