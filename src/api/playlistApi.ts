import ApiResponse from "types/ApiResponse";
import Playlist from "types/playlist/Playlist";
import Singer from "types/singer/Singer";
import Song from "types/song/Song";
import {playlistSchema} from 'schema';
import axiosClient from "./axiosClient";

const getAllPlaylists = async (): Promise<ApiResponse<Playlist<string>[]>> => {
  return await axiosClient.get("/playlist");
};

const createPlaylist = async(name: string): Promise<ApiResponse<Playlist<string>>> => {
  return await axiosClient.post("/playlist", {
    name
  })
}

const updatePlaylist = async(input: playlistSchema.UpdatePlaylistInput): Promise<ApiResponse<Playlist<Song<string>>>> => {
  return await axiosClient.put(`/playlist/${input.id}`);
}

const getOnePlaylist = async (
  id: string
): Promise<ApiResponse<Playlist<Song<Singer>>>> => {
  return await axiosClient.get(`/playlist/${id}`);
};

const playlistApi = {
  getAllPlaylists,
  getOnePlaylist,
  createPlaylist,
  updatePlaylist
};

export default playlistApi;
