import { date, object, ref, string, TypeOf } from "yup";

const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,32}$/;

const userLoginSchema = object({
  username: string().required("Username is required"),
  // validate password from 6 to 32 characters, one uppercase, one lowercase and one number
  password: string()
    .required()
    .matches(
      PASSWORD_REGEX,
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

const updateUserPasswordSchema = object({
  oldPassword: string()
    .required("Old password is required")
    .matches(
      PASSWORD_REGEX,
      "Password must be from 6 to 32 characters, one uppercase, one lowercase and one number"
    ),
  newPassword: string()
    .required("New password is required")
    .matches(
      PASSWORD_REGEX,
      "Password must be from 6 to 32 characters, one uppercase, one lowercase and one number"
    ),
  // set confirm password to be equal to new password
  confirmPassword: string()
    .required("Confirm password is required")
    .oneOf([ref("newPassword"), null], "Passwords must match"),
});

type UserLoginInput = TypeOf<typeof userLoginSchema>;
type UserRegisterInput = TypeOf<typeof userRegisterSchema>;
type UserUpdateInput = TypeOf<typeof userUpdateSchema>;
type UserUpdatePasswordInput = TypeOf<typeof updateUserPasswordSchema>;

export {
  userLoginSchema,
  userRegisterSchema,
  userUpdateSchema,
  updateUserPasswordSchema,
};

export type {
  UserLoginInput,
  UserRegisterInput,
  UserUpdateInput,
  UserUpdatePasswordInput,
};
