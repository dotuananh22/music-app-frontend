import { singerSchema } from "schema";
import ApiResponse from "types/ApiResponse";
import QueryInput from "types/QueryInput";
import SearchQuery from "types/SearchQuery";
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

const createSinger = async (
  data: singerSchema.SingerCreateInput["body"]
): Promise<ApiResponse<Singer>> => {
  return await axiosClient.post(`/singer/create`, data);
};

const searchSingers = async (
  query: SearchQuery<Singer>
): Promise<ApiResponse<Singer[]>> => {
  return await axiosClient.get(
    `/singer/search?query=${query.query}&limit=${
      query.limit
    }&sort=${JSON.stringify(query.sort)}&order=${JSON.stringify(query.order)}`
  );
};

const getOneSinger = async (id: string): Promise<ApiResponse<Singer>> => {
  return await axiosClient.get(`/singer/${id}`);
};

const updateSinger = async (
  id: string,
  data: singerSchema.SingerUpdateInput["body"]
): Promise<ApiResponse<Singer>> => {
  return await axiosClient.put(`/singer/${id}`, data);
};

const singerApi = {
  getAllSingers,
  searchSingers,
  createSinger,
  getOneSinger,
  updateSinger,
};

export default singerApi;
