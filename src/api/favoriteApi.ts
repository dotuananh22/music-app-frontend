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

const addFavoriteSong = async (
  songId: string
): Promise<ApiResponse<Song<Singer>>> => {
  return await axiosClient.put("/favorite/song", { songId });
};

const removeFavoriteSong = async (
  songId: string
): Promise<ApiResponse<Song<Singer>>> => {
  return await axiosClient.delete("/favorite/song", { data: { songId } });
};

const favoriteApi = {
  getAllFavoriteSongIds,
  getAllFavoriteSongs,
  addFavoriteSong,
  removeFavoriteSong,
};

export default favoriteApi;
