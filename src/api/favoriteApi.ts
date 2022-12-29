import ApiResponse from "types/ApiResponse";
import Favorite from "types/favorite/Favorite";
import Singer from "types/singer/Singer";
import Song from "types/song/Song";
import axiosClient from "./axiosClient";

const getAllFavoriteSongIds = async (): Promise<
  ApiResponse<Favorite<string>>
> => {
  return await axiosClient.get("/favorite/song/id");
};

const getAllFavoriteSongs = async (): Promise<
  ApiResponse<Favorite<Song<Singer>>>
> => {
  return await axiosClient.get("/favorite/song");
};

const favoriteApi = {
  getAllFavoriteSongIds,
  getAllFavoriteSongs,
};

export default favoriteApi;
