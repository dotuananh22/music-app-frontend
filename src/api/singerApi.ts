import ApiResponse from "types/ApiResponse";
import QueryInput from "types/QueryInput";
import GetAllSingerResponse from "types/singer/GetAllSingerResponse";
import Singer from "types/singer/Singer";
import axiosClient from "./axiosClient";

const getAllSingers = async (
  query: QueryInput<Singer>
): Promise<ApiResponse<GetAllSingerResponse>> => {
  return await axiosClient.get(
    `/singer?limit=${query.limit}&skip=${query.skip}&sort=${JSON.stringify(
      query.sort
    )}&order=${JSON.stringify(query.order)}`
  );
};

const singerApi = {
  getAllSingers,
};

export default singerApi;
