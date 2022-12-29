import CommonTypeModel from "types/CommonTypeModel";

type Playlist<T> = {
  name: string;
  userId: string;
  description: string;
  songs: T[];
  totalTime: number;
  imageUrl: string;
  likes: number;
} & CommonTypeModel;

export default Playlist;
