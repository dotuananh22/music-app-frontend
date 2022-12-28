import PaginationResponse from "types/PaginationResponse";
import Singer from "types/singer/Singer";
import Song from "./Song";

type GetAllSongResponse = {
  pagination: PaginationResponse;
  data: Song<Singer>[];
};

export default GetAllSongResponse;
