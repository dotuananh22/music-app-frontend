import QueryInput from "types/QueryInput";
import Song from "./Song";

type GetAllSongBySingerIdInput = {
  query: QueryInput<Song<string>>;
  singerId: string;
};

export default GetAllSongBySingerIdInput;
