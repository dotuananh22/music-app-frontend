import QueryInput from "types/QueryInput";
import Song from "./Song";
import SongType from "./SongType";

type GetAllSongInput = { query: QueryInput<Song<string>>; type: SongType };

export default GetAllSongInput;
