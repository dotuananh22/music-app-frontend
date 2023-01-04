import { array, object, string, TypeOf } from "yup";

const addSongsToPlaylist = object({
  playlistId: string().required().length(24, "Must be Object id").default(""),
  songIds: array()
    .of(string().required().length(24, "Must be Object id"))
    .required()
    .default([]),
});

const updatePlaylistBody = object({
  id: string().required().length(24, "Must be Object id"),
  name: string().required("Name is required"),
  description: string().default(""),
  // imageUrl: string().default("")
});

const removeSongFromPlaylist = object({
  playlistId: string().required().length(24, "Must be Object id").default(""),
  songIds: array()
    .of(string().required().length(24, "Must be Object id"))
    .required()
    .default([]),
});

type UpdatePlaylistInput = TypeOf<typeof updatePlaylistBody>;
type RemoveSongFromPlaylistInput = TypeOf<typeof removeSongFromPlaylist>;
type AddSongsToPlaylistInput = TypeOf<typeof addSongsToPlaylist>;

export { updatePlaylistBody, removeSongFromPlaylist, addSongsToPlaylist };

export type {
  UpdatePlaylistInput,
  RemoveSongFromPlaylistInput,
  AddSongsToPlaylistInput,
};
