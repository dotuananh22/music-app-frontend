import PaginationResponse from "types/PaginationResponse";
import User from "./User";

type GetAllUserResponse = {
  data: User[];
  pagination: PaginationResponse;
};

export default GetAllUserResponse;
