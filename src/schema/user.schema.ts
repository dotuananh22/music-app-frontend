import { date, number, object, string, TypeOf } from "yup";

const userGetAllQuery = object({
  limit: number().min(0, "min limit is 0").default(4),
  skip: number().min(0, "min skip is 0").default(0),
  sort: string().default(""),
})
  .noUnknown(true)
  .strict(true);

const userLoginBody = object({
  username: string().required("Username is required").default(""),
  password: string()
    .required("Password is required")
    .default("")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,32}$/,
      "Password must be at least 6 to 32 characters, including at least 1 uppercase letter, 1 lowercase letter, 1 number"
    ),
})
  .noUnknown(true)
  .strict();

const userRegisterBody = userLoginBody;

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const updateUserBody = object({
  fullName: string().required("Fullname is required").default(""),
  imageUrl: string(),
  // birthday: date().required("Birthday is required"),
  email: string()
    .required("Email is required")
    .email("Must be email")
    .default(""),
  birthday: date().required("Birthday is required"),
  phoneNumber: string()
    .required("Phone is required")
    .matches(phoneRegExp, "Phone number is not valid")
    .default(""),
})
  .noUnknown(true)
  .required();

const deleteUserParams = object({
  id: string()
    .required("User Id is required")
    .length(24, "must be object id")
    .default(""),
})
  .noUnknown(true)
  .strict(true);

const UserGetAllSchema = object({
  query: userGetAllQuery,
});

const UserLoginSchema = object({
  body: userLoginBody,
});

const UserRegisterSchema = object({
  body: userRegisterBody,
});

const UserUpdateSchema = object({
  body: updateUserBody,
});

const UserDeleteSchema = object({
  params: deleteUserParams,
});

const UserRestoreSchema = UserDeleteSchema;

type UserGetAllInput = TypeOf<typeof UserGetAllSchema>;
type UserLoginInput = TypeOf<typeof UserLoginSchema>;
type UserUpdateInput = TypeOf<typeof UserUpdateSchema>;
type UserRegisterInput = TypeOf<typeof UserRegisterSchema>;
type UserDeleteInput = TypeOf<typeof UserDeleteSchema>;
type UserRestoreInput = TypeOf<typeof UserRestoreSchema>;

export {
  UserGetAllSchema,
  UserLoginSchema,
  UserUpdateSchema,
  UserRegisterSchema,
  UserDeleteSchema,
  UserRestoreSchema,
};
export type {
  UserGetAllInput,
  UserLoginInput,
  UserUpdateInput,
  UserRegisterInput,
  UserDeleteInput,
  UserRestoreInput,
};
