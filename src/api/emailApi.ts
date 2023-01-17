import { emailSchema } from "schema";
import ApiResponse from "types/ApiResponse";
import axiosClient from "./axiosClient";

const sendEmail = async (
  body: emailSchema.SendEmailInput
): Promise<ApiResponse<undefined>> => {
  return await axiosClient.post("/email/send-email", body);
};

const emailApi = {
  sendEmail,
};

export default emailApi;
