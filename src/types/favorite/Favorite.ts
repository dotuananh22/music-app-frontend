import CommonTypeModel from "types/CommonTypeModel";

type Favorite<T> = {
  userId: string;
  songs: T[];
  totalTime: number;
} & CommonTypeModel;

export default Favorite;