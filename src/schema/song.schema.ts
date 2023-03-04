import { array, date, InferType, number, object, string } from "yup";

const updateSongSchema = object({
  name: string().required("Name is required"),
  singers: array().of(string()).required("Singers is required"),
  songTime: number().required(),
  imageUrl: string().required(),
  songUrl: string().required(),
  publishTime: date().required(),
  lyric: string(),
});

type UpdateSongInput = InferType<typeof updateSongSchema>;

export type { UpdateSongInput };
export { updateSongSchema };
