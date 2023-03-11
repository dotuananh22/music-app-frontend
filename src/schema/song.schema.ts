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

const createSongSchema = updateSongSchema.shape({
  imageUrl: string(),
  songUrl: string(),
});

type UpdateSongInput = InferType<typeof updateSongSchema>;
type CreateSongInput = InferType<typeof createSongSchema>;

export type { UpdateSongInput, CreateSongInput };
export { updateSongSchema, createSongSchema };
