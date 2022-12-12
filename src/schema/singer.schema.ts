import { boolean, date, number, object, string, TypeOf } from "yup";

const singerGetAllQuery = object({
  limit: number().min(0, "min limit is 0").default(4),
  skip: number().min(0, "min skip is 0").default(0),
  sort: string().default(""),
});

const createSingerBody = object({
  fullName: string().required("Fullname is required").default(""),
  nickname: string().required("Nickname is required").default(""),
  bio: string(),
  story: string(),
  imageUrl: string().required("Image is required").default(""),
  imageCover: string().required("Image cover is required").default(""),
  tick: boolean().required("Tick is required").default(false),
  gender: number().required("Gender is required").default(0),
  birthday: date().required("Birthday is required").default(new Date()),
  country: string().default("Việt Nam"),
  debutYear: number().required("Debut year is required"),
  follower: number().default(0),
  website: string(),
  facebook: string(),
  youtube: string(),
  instagram: string(),
  twitter: string(),
});

const updateSingerBody = createSingerBody
  .omit(["follower"])
  .noUnknown(false, "Invalid field");

const updateSingerParams = object({
  id: string()
    .required("Id is required")
    .length(24, "Id is invalid")
    .default(""),
});

const deleteSingerParams = object({
  id: string()
    .required("Singer Id is required")
    .length(24, "must be object id")
    .default(""),
});

const SingerGetAllSchema = object({
  query: singerGetAllQuery,
});
const SingerCreateSchema = object({
  body: createSingerBody,
});
const SingerUpdateSchema = object({
  body: updateSingerBody,
  params: updateSingerParams,
});
const SingerDeleteSchema = object({
  params: deleteSingerParams,
});
const SingerRestoreSchema = SingerDeleteSchema;

type SingerGetAllInput = TypeOf<typeof SingerGetAllSchema>;
type SingerCreateInput = TypeOf<typeof SingerCreateSchema>;
type SingerUpdateInput = TypeOf<typeof SingerUpdateSchema>;
type SingerDeleteInput = TypeOf<typeof SingerDeleteSchema>;
type SingerRestoreInput = TypeOf<typeof SingerRestoreSchema>;

export {
  SingerGetAllSchema,
  SingerUpdateSchema,
  SingerCreateSchema,
  SingerDeleteSchema,
  SingerRestoreSchema,
};
export type {
  SingerGetAllInput,
  SingerUpdateInput,
  SingerCreateInput,
  SingerDeleteInput,
  SingerRestoreInput,
};
