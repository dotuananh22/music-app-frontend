import PaginationResponse from "types/PaginationResponse";
import Singer from "types/singer/Singer";
import Song from "./Song";

type GetSongsBySingerIdResponse = {
  data: Song<Singer>[];
  pagination: PaginationResponse;
};

export default GetSongsBySingerIdResponse;
