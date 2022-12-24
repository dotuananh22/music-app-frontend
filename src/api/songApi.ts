import ApiResponse from "types/ApiResponse";
import QueryInput from "types/QueryInput";
import Singer from "types/singer/Singer";
import Song from "types/song/Song";
import axiosClient from "./axiosClient";

const getAllSongs = async (
  query: QueryInput<Song<string>>
): Promise<ApiResponse<Song<Singer>[]>> => {
  return await axiosClient.get(
    `/song?limit=${query?.limit}&skip=${query.skip}&sort=${JSON.stringify(
      query.sort
    )}&order=${JSON.stringify(query.order)}`
  );
};

export default {
  getAllSongs,
};
