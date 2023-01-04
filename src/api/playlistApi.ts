import ApiResponse from "types/ApiResponse";
import Playlist from "types/playlist/Playlist";
import Singer from "types/singer/Singer";
import Song from "types/song/Song";
import { playlistSchema } from "schema";
import axiosClient from "./axiosClient";

const getAllPlaylists = async (): Promise<ApiResponse<Playlist<string>[]>> => {
  return await axiosClient.get("/playlist");
};

const getPlaylistsNotContainSong = async (
  songId: string
): Promise<ApiResponse<Playlist<string>[]>> => {
  return await axiosClient.get(`/playlist/not-contain/${songId}`);
};

const createPlaylist = async (
  name: string
): Promise<ApiResponse<Playlist<string>>> => {
  return await axiosClient.post("/playlist", {
    name,
  });
};

const removeSongFromPlaylist = async (
  input: playlistSchema.RemoveSongFromPlaylistInput
): Promise<ApiResponse<Playlist<string>>> => {
  return await axiosClient.put(`/playlist/delete/${input.playlistId}`, {
    songs: input.songIds,
  });
};

const addSongsToPlaylist = async (
  input: playlistSchema.AddSongsToPlaylistInput
): Promise<ApiResponse<string>> => {
  return await axiosClient.put(`/playlist/add/${input.playlistId}`, {
    songs: input.songIds,
  });
};

const updatePlaylist = async (
  input: playlistSchema.UpdatePlaylistInput
): Promise<ApiResponse<Playlist<Song<string>>>> => {
  return await axiosClient.put(`/playlist/${input.id}`);
};

const getOnePlaylist = async (
  id: string
): Promise<ApiResponse<Playlist<Song<Singer>>>> => {
  return await axiosClient.get(`/playlist/${id}`);
};

const playlistApi = {
  getAllPlaylists,
  getOnePlaylist,
  removeSongFromPlaylist,
  addSongsToPlaylist,
  getPlaylistsNotContainSong,
  createPlaylist,
  updatePlaylist,
};

export default playlistApi;
