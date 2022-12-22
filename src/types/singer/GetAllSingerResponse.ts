import PaginationResponse from "types/PaginationResponse";
import Singer from "./Singer";

type GetAllSingerResponse = {
  pagination: PaginationResponse;
  data: Singer[];
};

export default GetAllSingerResponse;
