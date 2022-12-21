import { date, object, string, TypeOf } from "yup";

const userLoginSchema = object({
  username: string().required("Username is required"),
  // validate password from 6 to 32 characters, one uppercase, one lowercase and one number
  password: string()
    .required()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,32}$/,
      "Password must be from 6 to 32 characters, one uppercase, one lowercase and one number"
    ),
});

const userRegisterSchema = userLoginSchema;
const userUpdateSchema = object({
  fullName: string().required(),
  imageUrl: string().required(),
  birthday: string().required(),
  email: string().email().required(),
  phoneNumber: string().required(),
});

export type UserLoginInput = TypeOf<typeof userLoginSchema>;
export type UserRegisterInput = TypeOf<typeof userRegisterSchema>;
export type UserUpdateInput = TypeOf<typeof userUpdateSchema>;

export { userLoginSchema, userRegisterSchema, userUpdateSchema };
