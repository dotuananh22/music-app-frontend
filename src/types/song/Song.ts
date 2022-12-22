import CommonTypeModel from "types/CommonTypeModel";

type Song<T> = {
  name: string;
  singers: T[];
  lyric: string;
  songTime: number;
  publishTime: Date;
  imageUrl: string;
  likes: number;
  listens: number;
  downloads: number;
  songUrl: string;
  createdAt: Date;
  updatedAt: Date;
} & CommonTypeModel;

export default Song;
