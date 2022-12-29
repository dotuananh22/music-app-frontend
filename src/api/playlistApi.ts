import ApiResponse from "types/ApiResponse";
import Playlist from "types/playlist/Playlist";
import Singer from "types/singer/Singer";
import Song from "types/song/Song";
import axiosClient from "./axiosClient";

const getAllPlaylists = async (): Promise<ApiResponse<Playlist<string>[]>> => {
  return await axiosClient.get("/playlist");
};

const getOnePlaylist = async (
  id: string
): Promise<ApiResponse<Playlist<Song<Singer>>>> => {
  return await axiosClient.get(`/playlist/${id}`);
};

const playlistApi = {
  getAllPlaylists,
  getOnePlaylist,
};

export default playlistApi;
