import ApiResponse from "types/ApiResponse";
import QueryInput from "types/QueryInput";
import GetAllSingerResponse from "types/singer/GetAllSingerResponse";
import axiosClient from "./axiosClient";

const getAllSingers = async (
  query?: QueryInput
): Promise<ApiResponse<GetAllSingerResponse>> => {
  return await axiosClient.get(
    `/singer?limit=${query?.limit}&skip=${query?.skip}&sort=${query?.sort}&order=${query?.order}`
  );
};

const singerApi = {
  getAllSingers,
};

export default singerApi;
