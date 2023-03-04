/* eslint-disable import/no-anonymous-default-export */
import { songSchema } from "schema";
import ApiResponse from "types/ApiResponse";
import PaginationResponse from "types/PaginationResponse";
import QueryInput from "types/QueryInput";
import Singer from "types/singer/Singer";
import GetAllSongResponse from "types/song/GetAllSongResponse";
import GetAllSongBySingerIdInput from "types/song/GetAllSongsBySingerIdInput";
import GetSongsBySingerIdResponse from "types/song/GetSongsBySingerIdResponse";
import Song from "types/song/Song";
import axiosClient from "./axiosClient";

const getAllSongs = async (
  query: QueryInput<Song<string>>
): Promise<ApiResponse<GetAllSongResponse>> => {
  return await axiosClient.get(
    `/song?limit=${query?.limit}&skip=${query.skip}&sort=${JSON.stringify(
      query.sort
    )}&order=${JSON.stringify(query.order)}`
  );
};

const getAllSongsBySingerId = async (
  query: QueryInput<Song<string>>,
  singerId: string
): Promise<ApiResponse<GetSongsBySingerIdResponse>> => {
  return await axiosClient.get(
    `/song/singer/${singerId}?limit=${query?.limit}&skip=${
      query.skip
    }&sort=${JSON.stringify(query.sort)}&order=${JSON.stringify(query.order)}`
  );
};

const getSongById = async (id: string): Promise<ApiResponse<Song<Singer>>> => {
  return await axiosClient.get(`/song/${id}`);
};

const addOneListen = async (id: string): Promise<ApiResponse<Song<string>>> => {
  return await axiosClient.patch(`/song/listen/${id}`);
};

const updateSongById = async (
  id: string,
  body: songSchema.UpdateSongInput
): Promise<ApiResponse<Song<Singer>>> => {
  return await axiosClient.put(`/admin/song/${id}`, body);
};

const updateLike = async (
  id: string,
  like: number
): Promise<ApiResponse<Song<string>>> => {
  return await axiosClient.patch(`/song/like/${id}`, {
    likes: like,
  });
};

const deleteSongById = async (
  songId: string
): Promise<ApiResponse<Song<Singer>>> => {
  return await axiosClient.delete(`/admin/song/${songId}`);
};

export default {
  getAllSongs,
  getSongById,
  getAllSongsBySingerId,
  addOneListen,
  updateSongById,
  updateLike,
  deleteSongById,
};
