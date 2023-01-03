import { object, string, TypeOf } from "yup";

const updatePlaylistBody = object({
  id: string().required().length(24, "Must be Object id"),
  name: string().required("Name is required"),
  description: string().default(""),
  // imageUrl: string().default("")
});

type UpdatePlaylistInput = TypeOf<typeof updatePlaylistBody>;

export { updatePlaylistBody };

export type { UpdatePlaylistInput };
